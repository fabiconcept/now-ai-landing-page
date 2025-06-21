import { type NextRequest, NextResponse } from "next/server"
import { demoFormSchema } from "@/lib/form-validation"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = demoFormSchema.parse(body)

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Add to CRM
    // 4. Schedule follow-up tasks

    // Example: Send email notification
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "noreply@nowai.com",
        to: [validatedData.email, "sales@nowai.com"],
        subject: "Demo Request Received - NOW AI",
        html: `
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Role:</strong> ${validatedData.role}</p>
          <p><strong>Practice Type:</strong> ${validatedData.practiceType}</p>
          <p><strong>Practice Size:</strong> ${validatedData.practiceSize}</p>
          <p><strong>Interested Solutions:</strong> ${validatedData.interestedSolutions.join(", ")}</p>
          <p><strong>Preferred Time:</strong> ${validatedData.preferredTime || "Not specified"}</p>
          <p><strong>Current Challenges:</strong> ${validatedData.currentChallenges || "Not specified"}</p>
          <p><strong>Additional Notes:</strong> ${validatedData.additionalNotes || "None"}</p>
        `,
      })
    }

    // Add to CRM (example with HubSpot)
    if (process.env.HUBSPOT_API_KEY) {
      const hubspotResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            email: validatedData.email,
            firstname: validatedData.firstName,
            lastname: validatedData.lastName,
            phone: validatedData.phone,
            company: validatedData.company,
            jobtitle: validatedData.role,
            lead_source: "Demo Request",
            practice_type: validatedData.practiceType,
            practice_size: validatedData.practiceSize,
          },
        }),
      })
    }

    // Save to database (example with Supabase)
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

      await supabase.from("demo_requests").insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        role: validatedData.role,
        practice_type: validatedData.practiceType,
        practice_size: validatedData.practiceSize,
        interested_solutions: validatedData.interestedSolutions,
        preferred_time: validatedData.preferredTime,
        current_challenges: validatedData.currentChallenges,
        additional_notes: validatedData.additionalNotes,
        created_at: new Date().toISOString(),
      })
    }

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully",
    })
  } catch (error) {
    console.error("Demo form submission error:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Invalid form data", details: error }, { status: 400 })
    }

    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
