import { google } from "googleapis"

interface CalendarEvent {
  summary: string
  description?: string
  start: {
    dateTime: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  attendees?: Array<{
    email: string
    displayName?: string
  }>
  reminders: {
    useDefault: boolean
    overrides?: Array<{
      method: "email" | "popup"
      minutes: number
    }>
  }
}

interface CreateEventParams {
  title: string
  description?: string
  startDateTime: string
  endDateTime: string
  // Making these optional since we're not using them in the event creation
  // to avoid requiring domain-wide delegation
  attendeeEmail?: string
  attendeeName?: string
  timeZone?: string
}

class GoogleCalendarService {
  private calendar: any
  private auth: any

  constructor() {
    if (
      !process.env.GOOGLE_CALENDAR_CLIENT_EMAIL ||
      !process.env.GOOGLE_CALENDAR_PRIVATE_KEY ||
      !process.env.GOOGLE_CALENDAR_USER_EMAIL
    ) {
      throw new Error("Google Calendar credentials not configured. Make sure GOOGLE_CALENDAR_CLIENT_EMAIL, GOOGLE_CALENDAR_PRIVATE_KEY, and GOOGLE_CALENDAR_USER_EMAIL are set.")
    }

    // Initialize Google Auth with service account and domain-wide delegation
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CALENDAR_PRIVATE_KEY.replace(/\\\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
      // This enables domain-wide delegation
      clientOptions: {
        subject: process.env.GOOGLE_CALENDAR_USER_EMAIL
      }
    })

    this.calendar = google.calendar({ version: "v3", auth: this.auth })
  }

  async createEvent(params: CreateEventParams): Promise<any> {
    try {
      
      // Use the primary calendar of the delegated user
      const calendarId = 'primary';
      
      // First, verify the calendar exists and is accessible
      try {
        await this.calendar.calendars.get({
          calendarId: calendarId
        });
      } catch (calendarError: any) {
        console.error('Error accessing calendar:', {
          message: calendarError.message,
          code: calendarError.code,
          status: calendarError.status,
          response: calendarError.response?.data
        });
        throw new Error(`Cannot access calendar. Please ensure the service account has the correct permissions.`);
      }
      
      // For service accounts, we can't invite attendees without domain-wide delegation
      // So we'll include the attendee info in the description instead
      const event: CalendarEvent = {
        summary: params.title,
        description: params.description,
        start: {
          dateTime: params.startDateTime,
          timeZone: params.timeZone || "America/New_York",
        },
        end: {
          dateTime: params.endDateTime,
          timeZone: params.timeZone || "America/New_York",
        },
        // Remove attendees array since we can't invite without domain-wide delegation
        // The attendee info is already in the description
        reminders: {
          useDefault: false,
          overrides: [
            { method: "popup", minutes: 30 }, // 30 minutes before
          ],
        },
      };
      
      // Create the event
      const response = await this.calendar.events.insert({
        calendarId: calendarId,
        resource: event,
        sendUpdates: "all",
      });
      
      return response.data;
      
    } catch (error: any) {
      console.error('Detailed error creating calendar event:', {
        message: error.message,
        code: error.code,
        status: error.status,
        response: error.response?.data,
        config: {
          method: error.config?.method,
          url: error.config?.url,
          data: error.config?.data
        }
      });
      
      // Provide more specific error messages based on the error code
      if (error.code === 404) {
        throw new Error('Calendar not found. Please verify the calendar ID and ensure the service account has access.');
      } else if (error.code === 401 || error.code === 403) {
        throw new Error('Authentication failed. Please verify the service account credentials and permissions.');
      } else {
        throw new Error(`Failed to create calendar event: ${error.message}`);
      }
    }
  }

  async updateEvent(eventId: string, params: Partial<CreateEventParams>): Promise<any> {
    try {
      const event: Partial<CalendarEvent> = {}

      if (params.title) event.summary = params.title
      if (params.description) event.description = params.description
      if (params.startDateTime) {
        event.start = {
          dateTime: params.startDateTime,
          timeZone: params.timeZone || "America/New_York",
        }
      }
      if (params.endDateTime) {
        event.end = {
          dateTime: params.endDateTime,
          timeZone: params.timeZone || "America/New_York",
        }
      }
      if (params.attendeeEmail) {
        event.attendees = [
          {
            email: params.attendeeEmail,
            displayName: params.attendeeName,
          },
        ]
      }

      const response = await this.calendar.events.update({
        calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
        eventId: eventId,
        resource: event,
        sendUpdates: "all",
      })

      return response.data
    } catch (error) {
      console.error("Error updating calendar event:", error)
      throw new Error("Failed to update calendar event")
    }
  }

  async deleteEvent(eventId: string): Promise<void> {
    try {
      await this.calendar.events.delete({
        calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
        eventId: eventId,
        sendUpdates: "all",
      })
    } catch (error) {
      console.error("Error deleting calendar event:", error)
      throw new Error("Failed to delete calendar event")
    }
  }

  async getAvailableSlots(date: string): Promise<string[]> {
    try {
      const startOfDay = new Date(`${date}T00:00:00`)
      const endOfDay = new Date(`${date}T23:59:59`)

      const response = await this.calendar.events.list({
        calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      })

      const events = response.data.items || []
      const bookedSlots = events.map((event: any) => {
        const start = new Date(event.start.dateTime || event.start.date)
        return start.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      })

      // Define available time slots (9 AM to 6 PM)
      const allSlots = [
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
      ]

      return allSlots.filter((slot) => !bookedSlots.includes(slot))
    } catch (error) {
      console.error("Error getting available slots:", error)
      // Return default slots if error
      return [
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
      ]
    }
  }

  formatDateTime(date: Date, time: string): string {
    const [timeStr, period] = time.split(" ")
    const [hours, minutes] = timeStr.split(":")
    let hour24 = Number.parseInt(hours)

    if (period === "PM" && hour24 !== 12) {
      hour24 += 12
    } else if (period === "AM" && hour24 === 12) {
      hour24 = 0
    }

    const dateTime = new Date(date)
    dateTime.setHours(hour24, Number.parseInt(minutes), 0, 0)

    return dateTime.toISOString()
  }
}

export default GoogleCalendarService
