import { type NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/form-validation"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = contactFormSchema.parse(body)

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "noreply@nowai.com",
        to: [validatedData.email, "support@nowai.com"],
        subject: `Contact Form: ${validatedData.inquiryType} - NOW AI`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Role:</strong> ${validatedData.role}</p>
          <p><strong>Inquiry Type:</strong> ${validatedData.inquiryType}</p>
          <p><strong>Urgency:</strong> ${validatedData.urgency || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
      })
    }

    // Save to database
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

      await supabase.from("contact_submissions").insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        role: validatedData.role,
        inquiry_type: validatedData.inquiryType,
        urgency: validatedData.urgency,
        message: validatedData.message,
        created_at: new Date().toISOString(),
      })
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form submission error:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Invalid form data", details: error }, { status: 400 })
    }

    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
