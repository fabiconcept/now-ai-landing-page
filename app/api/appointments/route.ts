import { type NextRequest, NextResponse } from "next/server"
import { appointmentSchema } from "@/lib/form-validation"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")

    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

      let query = supabase.from("appointments").select("*")

      if (date) {
        query = query.eq("date", date)
      }

      const { data, error } = await query.order("time", { ascending: true })

      if (error) {
        throw error
      }

      return NextResponse.json({ success: true, data })
    }

    // Fallback mock data if no database
    const mockData = [
      {
        id: "1",
        title: "Dr. Smith - Consultation",
        date: "2024-01-15",
        time: "14:00",
        duration: "30",
        patient: "John Doe",
        type: "Consultation",
        status: "confirmed",
        notes: "Follow-up appointment",
      },
    ]

    return NextResponse.json({ success: true, data: mockData })
  } catch (error) {
    console.error("Get appointments error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch appointments" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the appointment data
    const validatedData = appointmentSchema.parse({
      ...body,
      date: new Date(body.date),
    })


    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

      // Create Google Calendar event
      try {
        const GoogleCalendarService = (await import("@/lib/google-calendar")).default
        const calendar = new GoogleCalendarService()
        
        const durationMinutes = parseInt(validatedData.duration, 10) || 30
        
        const startDateTime = new Date(`${validatedData.date.toISOString().split('T')[0]}T${validatedData.time}:00`)
        const endDateTime = new Date(startDateTime.getTime() + durationMinutes * 60000)
        
        const calendarEvent = await calendar.createEvent({
          title: `${validatedData.title} - ${validatedData.patient}`,
          description: `Patient: ${validatedData.patient}\n` +
                      `Type: ${validatedData.type}\n` +
                      `Scheduled For: ${validatedData.patient} (${process.env.ADMIN_EMAIL || 'Contact Admin'})\n` +
                      `Notes: ${validatedData.notes || 'None'}`,
          startDateTime: startDateTime.toISOString(),
          endDateTime: endDateTime.toISOString(),
          timeZone: 'America/New_York'
        })

        console.log('Calendar event created:', calendarEvent)
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        const errorStack = error instanceof Error ? error.stack : undefined;
        
        console.error('Error in calendar event creation process:', {
          error,
          message: errorMessage,
          stack: errorStack
        })
        throw new Error(`Calendar event creation failed: ${errorMessage}`)
      }

      const { data, error } = await supabase
        .from("appointments")
        .insert({
          title: validatedData.title,
          date: validatedData.date.toISOString().split("T")[0],
          time: validatedData.time,
          duration: validatedData.duration,
          patient: validatedData.patient,
          type: validatedData.type,
          notes: validatedData.notes,
          status: "pending",
          created_at: new Date().toISOString(),
        })
        .select()


      if (error) {
        throw error
      }

      return NextResponse.json({ success: true, data: data[0] })
    }

    // Fallback response if no database
    return NextResponse.json({
      success: true,
      data: { id: Date.now().toString(), ...validatedData },
    })
  } catch (error) {
    console.error("Create appointment error:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Invalid appointment data", details: error }, { status: 400 })
    }

    return NextResponse.json({ success: false, error: "Failed to create appointment" }, { status: 500 })
  }
}
