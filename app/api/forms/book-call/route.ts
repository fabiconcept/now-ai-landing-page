import { type NextRequest, NextResponse } from "next/server"
import { bookCallFormSchema } from "@/lib/form-validation"
import GoogleCalendarService from "@/lib/google-calendar"
import BrevoEmailService from "@/lib/brevo-email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = bookCallFormSchema.parse({
      ...body,
      selectedDate: new Date(body.selectedDate),
    })

    let calendarEventId: string | null = null

    // Create Google Calendar event
    if (process.env.GOOGLE_CALENDAR_API_KEY) {
      try {
        const calendarService = new GoogleCalendarService()

        const startDateTime = calendarService.formatDateTime(validatedData.selectedDate, validatedData.selectedTime)

        // Add 45 minutes for end time
        const endDate = new Date(startDateTime)
        endDate.setMinutes(endDate.getMinutes() + 45)
        const endDateTime = endDate.toISOString()

        const calendarEvent = await calendarService.createEvent({
          title: `Strategy Call - ${validatedData.firstName} ${validatedData.lastName}`,
          description: `
            Call Type: ${validatedData.callType}
            Company: ${validatedData.company}
            Role: ${validatedData.role}
            Timeline: ${validatedData.urgency}
            
            Topics to Discuss:
            ${validatedData.topics}
            
            Additional Notes:
            ${validatedData.additionalNotes || "None"}
            
            Contact: ${validatedData.email} | ${validatedData.phone}
          `,
          startDateTime,
          endDateTime,
          attendeeEmail: validatedData.email,
          attendeeName: `${validatedData.firstName} ${validatedData.lastName}`,
        })

        calendarEventId = calendarEvent.id
        console.log(`Calendar event created: ${calendarEventId}`)
      } catch (calendarError) {
        console.error("Google Calendar error:", calendarError)
        // Continue without failing the request
      }
    }

    // Send confirmation emails using Brevo
    if (process.env.BREVO_API_KEY) {
      try {
        const brevoService = new BrevoEmailService()

        // Add contact to CRM
        await brevoService.addContact({
          email: validatedData.email,
          attributes: {
            FIRSTNAME: validatedData.firstName,
            LASTNAME: validatedData.lastName,
            COMPANY: validatedData.company,
            PHONE: validatedData.phone,
            ROLE: validatedData.role,
            CALL_TYPE: validatedData.callType,
            URGENCY: validatedData.urgency,
            CALL_DATE: validatedData.selectedDate.toISOString(),
            CALL_TIME: validatedData.selectedTime,
            SOURCE: "Book Call Form",
          },
          listIds: process.env.BREVO_LEADS_LIST_ID ? [Number.parseInt(process.env.BREVO_LEADS_LIST_ID)] : undefined,
          updateEnabled: true,
        })

        // Send confirmation email to customer
        await brevoService.sendTransactionalEmail({
          to: [
            {
              email: validatedData.email,
              name: `${validatedData.firstName} ${validatedData.lastName}`,
            },
          ],
          subject: "Your Strategy Call is Confirmed - NOW AI",
          htmlContent: brevoService.getBookingConfirmationTemplate(
            validatedData.firstName,
            validatedData.selectedDate.toLocaleDateString(),
            validatedData.selectedTime,
          ),
        })

        // Send notification email to team
        if (process.env.TEAM_EMAIL) {
          await brevoService.sendTransactionalEmail({
            to: [{ email: process.env.TEAM_EMAIL, name: "NOW AI Team" }],
            subject: `New Strategy Call Booked - ${validatedData.firstName} ${validatedData.lastName}`,
            htmlContent: `
              <h2>New Strategy Call Booking</h2>
              <p><strong>Contact:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
              <p><strong>Company:</strong> ${validatedData.company}</p>
              <p><strong>Role:</strong> ${validatedData.role}</p>
              <p><strong>Date:</strong> ${validatedData.selectedDate.toLocaleDateString()}</p>
              <p><strong>Time:</strong> ${validatedData.selectedTime}</p>
              <p><strong>Call Type:</strong> ${validatedData.callType}</p>
              <p><strong>Timeline:</strong> ${validatedData.urgency}</p>
              <p><strong>Topics:</strong><br>${validatedData.topics}</p>
              ${validatedData.additionalNotes ? `<p><strong>Additional Notes:</strong><br>${validatedData.additionalNotes}</p>` : ""}
              ${calendarEventId ? `<p><strong>Calendar Event ID:</strong> ${calendarEventId}</p>` : ""}
            `,
          })
        }

        console.log(`Booking confirmation sent to ${validatedData.email}`)
      } catch (brevoError) {
        console.error("Brevo service error:", brevoError)
        // Continue with fallback
      }
    }

    // Fallback: Send confirmation email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: process.env.FROM_EMAIL || "bookings@nowai.com",
          to: validatedData.email,
          subject: "Your Strategy Call is Confirmed - NOW AI",
          html: `
            <h2>Call Booking Confirmed!</h2>
            <p>Hi ${validatedData.firstName},</p>
            <p>Your strategy call has been successfully scheduled:</p>
            <ul>
              <li><strong>Date:</strong> ${validatedData.selectedDate.toLocaleDateString()}</li>
              <li><strong>Time:</strong> ${validatedData.selectedTime}</li>
              <li><strong>Duration:</strong> 45 minutes</li>
            </ul>
            <p>We'll send you a calendar invitation shortly with the video call details.</p>
            <p>Best regards,<br>The NOW AI Team</p>
          `,
        })
      } catch (resendError) {
        console.error("Resend fallback error:", resendError)
      }
    }

    // Save to database
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      try {
        const { createClient } = await import("@supabase/supabase-js")
        const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

        await supabase.from("call_bookings").insert({
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          company: validatedData.company,
          role: validatedData.role,
          call_type: validatedData.callType,
          urgency: validatedData.urgency,
          topics: validatedData.topics,
          additional_notes: validatedData.additionalNotes,
          selected_date: validatedData.selectedDate.toISOString(),
          selected_time: validatedData.selectedTime,
          calendar_event_id: calendarEventId,
          status: "confirmed",
          created_at: new Date().toISOString(),
        })
      } catch (dbError) {
        console.error("Database error:", dbError)
        // Don't fail the request if database save fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Call booking successful! Check your email for confirmation.",
      data: {
        eventId: calendarEventId,
        date: validatedData.selectedDate.toLocaleDateString(),
        time: validatedData.selectedTime,
      },
    })
  } catch (error) {
    console.error("Call booking error:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: error,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to book call. Please try again or contact support.",
      },
      { status: 500 },
    )
  }
}
