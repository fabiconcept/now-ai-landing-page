import { type NextRequest, NextResponse } from "next/server"
import { appointmentSchema } from "@/lib/form-validation"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { id } = params

    // Validate the appointment data
    const validatedData = appointmentSchema.parse({
      ...body,
      date: new Date(body.date),
    })

    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

      const { data, error } = await supabase
        .from("appointments")
        .update({
          title: validatedData.title,
          date: validatedData.date.toISOString().split("T")[0],
          time: validatedData.time,
          duration: validatedData.duration,
          patient: validatedData.patient,
          type: validatedData.type,
          notes: validatedData.notes,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()

      if (error) {
        throw error
      }

      return NextResponse.json({ success: true, data: data[0] })
    }

    // Fallback response if no database
    return NextResponse.json({
      success: true,
      data: { id, ...validatedData },
    })
  } catch (error) {
    console.error("Update appointment error:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Invalid appointment data", details: error }, { status: 400 })
    }

    return NextResponse.json({ success: false, error: "Failed to update appointment" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

      const { error } = await supabase.from("appointments").delete().eq("id", id)

      if (error) {
        throw error
      }

      return NextResponse.json({ success: true, message: "Appointment deleted" })
    }

    // Fallback response if no database
    return NextResponse.json({
      success: true,
      message: "Appointment deleted",
    })
  } catch (error) {
    console.error("Delete appointment error:", error)
    return NextResponse.json({ success: false, error: "Failed to delete appointment" }, { status: 500 })
  }
}
