import { type NextRequest, NextResponse } from "next/server"
import { newsletterFormSchema } from "@/lib/form-validation"
import BrevoEmailService from "@/lib/brevo-email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = newsletterFormSchema.parse(body)

    // Initialize Brevo service
    if (process.env.BREVO_API_KEY) {
      const brevoService = new BrevoEmailService()

      try {
        // Add contact to Brevo
        await brevoService.addContact({
          email: validatedData.email,
          attributes: {
            INTERESTS: validatedData.interests.join(", "),
            SIGNUP_DATE: new Date().toISOString(),
            SOURCE: "Website Newsletter Signup",
          },
          listIds: process.env.BREVO_NEWSLETTER_LIST_ID
            ? [Number.parseInt(process.env.BREVO_NEWSLETTER_LIST_ID)]
            : undefined,
          updateEnabled: true,
        })

        // Send welcome email
        await brevoService.sendTransactionalEmail({
          to: [{ email: validatedData.email }],
          subject: "Welcome to NOW AI Newsletter!",
          htmlContent: brevoService.getWelcomeEmailTemplate("Subscriber", validatedData.interests),
        })

        console.log(`Newsletter subscription successful for ${validatedData.email}`)
      } catch (brevoError) {
        console.error("Brevo service error:", brevoError)
        // Continue with fallback even if Brevo fails
      }
    }

    // Fallback: Send welcome email using Resend if Brevo fails
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: process.env.FROM_EMAIL || "newsletter@nowai.com",
          to: validatedData.email,
          subject: "Welcome to NOW AI Newsletter!",
          html: `
            <h2>Welcome to NOW AI Newsletter!</h2>
            <p>Thank you for subscribing to our newsletter. You'll receive weekly insights about healthcare AI, automation, and industry trends.</p>
            <p><strong>Your interests:</strong> ${validatedData.interests.join(", ")}</p>
            <p>You can update your preferences or unsubscribe at any time.</p>
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

        await supabase.from("newsletter_subscribers").insert({
          email: validatedData.email,
          interests: validatedData.interests,
          subscribed_at: new Date().toISOString(),
          source: "website",
          status: "active",
        })
      } catch (dbError) {
        console.error("Database error:", dbError)
        // Don't fail the request if database save fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription successful! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)

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
        error: "Failed to process newsletter subscription. Please try again.",
      },
      { status: 500 },
    )
  }
}
