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
  attendeeEmail: string
  attendeeName?: string
  timeZone?: string
}

class GoogleCalendarService {
  private calendar: any
  private auth: any

  constructor() {
    if (
      !process.env.GOOGLE_CALENDAR_API_KEY ||
      !process.env.GOOGLE_CALENDAR_CLIENT_EMAIL ||
      !process.env.GOOGLE_CALENDAR_PRIVATE_KEY
    ) {
      throw new Error("Google Calendar credentials not configured")
    }

    // Initialize Google Auth with service account
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CALENDAR_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    })

    this.calendar = google.calendar({ version: "v3", auth: this.auth })
  }

  async createEvent(params: CreateEventParams): Promise<any> {
    try {
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
        attendees: [
          {
            email: params.attendeeEmail,
            displayName: params.attendeeName,
          },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 }, // 24 hours before
            { method: "popup", minutes: 30 }, // 30 minutes before
          ],
        },
      }

      const response = await this.calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
        resource: event,
        sendUpdates: "all",
      })

      return response.data
    } catch (error) {
      console.error("Error creating calendar event:", error)
      throw new Error("Failed to create calendar event")
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
