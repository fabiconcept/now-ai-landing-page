interface BrevoContact {
  email: string
  attributes?: {
    FIRSTNAME?: string
    LASTNAME?: string
    COMPANY?: string
    PHONE?: string
    [key: string]: any
  }
  listIds?: number[]
  updateEnabled?: boolean
}

interface BrevoEmailParams {
  to: Array<{
    email: string
    name?: string
  }>
  subject: string
  htmlContent: string
  textContent?: string
  sender?: {
    name: string
    email: string
  }
  templateId?: number
  params?: Record<string, any>
}

class BrevoEmailService {
  private apiKey: string
  private baseUrl = "https://api.brevo.com/v3"

  constructor() {
    if (!process.env.BREVO_API_KEY) {
      throw new Error("Brevo API key not configured")
    }
    this.apiKey = process.env.BREVO_API_KEY
  }

  private async makeRequest(endpoint: string, method = "GET", data?: any) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": this.apiKey,
      },
      body: data ? JSON.stringify(data) : undefined,
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Brevo API error: ${response.status} - ${error}`)
    }

    return response.json()
  }

  async addContact(contact: BrevoContact): Promise<any> {
    try {
      return await this.makeRequest("/contacts", "POST", contact)
    } catch (error) {
      console.error("Error adding contact to Brevo:", error)
      throw error
    }
  }

  async updateContact(email: string, attributes: Record<string, any>): Promise<any> {
    try {
      return await this.makeRequest(`/contacts/${encodeURIComponent(email)}`, "PUT", {
        attributes,
      })
    } catch (error) {
      console.error("Error updating contact in Brevo:", error)
      throw error
    }
  }

  async sendTransactionalEmail(params: BrevoEmailParams): Promise<any> {
    try {
      const emailData = {
        sender: params.sender || {
          name: "NOW AI",
          email: process.env.FROM_EMAIL || "noreply@nowai.com",
        },
        to: params.to,
        subject: params.subject,
        htmlContent: params.htmlContent,
        textContent: params.textContent,
        templateId: params.templateId,
        params: params.params,
      }

      return await this.makeRequest("/smtp/email", "POST", emailData)
    } catch (error) {
      console.error("Error sending email via Brevo:", error)
      throw error
    }
  }

  async addToList(email: string, listId: number): Promise<any> {
    try {
      return await this.makeRequest(`/contacts/lists/${listId}/contacts/add`, "POST", {
        emails: [email],
      })
    } catch (error) {
      console.error("Error adding contact to list:", error)
      throw error
    }
  }

  async removeFromList(email: string, listId: number): Promise<any> {
    try {
      return await this.makeRequest(`/contacts/lists/${listId}/contacts/remove`, "POST", {
        emails: [email],
      })
    } catch (error) {
      console.error("Error removing contact from list:", error)
      throw error
    }
  }

  async createList(name: string, folderId?: number): Promise<any> {
    try {
      return await this.makeRequest("/contacts/lists", "POST", {
        name,
        folderId,
      })
    } catch (error) {
      console.error("Error creating list in Brevo:", error)
      throw error
    }
  }

  async getLists(): Promise<any> {
    try {
      return await this.makeRequest("/contacts/lists")
    } catch (error) {
      console.error("Error getting lists from Brevo:", error)
      throw error
    }
  }

  // Email templates for different use cases
  getWelcomeEmailTemplate(name: string, interests: string[]): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Welcome to NOW AI Newsletter</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #10b981;">Welcome to NOW AI Newsletter!</h1>
          </div>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for subscribing to our newsletter! We're excited to share valuable insights about healthcare AI, automation, and industry trends with you.</p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #10b981; margin-top: 0;">Your Selected Interests:</h3>
            <ul style="margin: 0;">
              ${interests.map((interest) => `<li>${interest}</li>`).join("")}
            </ul>
          </div>
          
          <p>You'll receive our weekly newsletter every Tuesday with:</p>
          <ul>
            <li>Latest AI trends and developments</li>
            <li>Case studies and success stories</li>
            <li>Implementation best practices</li>
            <li>Exclusive resources and tools</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/resources" 
               style="background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Browse Resources
            </a>
          </div>
          
          <p>Best regards,<br>The NOW AI Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280;">
            You can update your preferences or unsubscribe at any time by 
            <a href="{{unsubscribe}}" style="color: #10b981;">clicking here</a>.
          </p>
        </div>
      </body>
      </html>
    `
  }

  getBookingConfirmationTemplate(name: string, date: string, time: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Call Booking Confirmation - NOW AI</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #10b981;">Call Confirmed!</h1>
          </div>
          
          <p>Hi ${name},</p>
          
          <p>Your strategy call with NOW AI has been successfully scheduled. We're looking forward to discussing how our AI solutions can transform your healthcare practice.</p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #10b981; margin-top: 0;">Call Details:</h3>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Duration:</strong> 45 minutes</p>
            <p><strong>Type:</strong> Video call (a will be provided)</p>
          </div>
          
          <p>To make the most of our time together, please:</p>
          <ul>
            <li>Prepare any specific questions about your practice</li>
            <li>Have information about your current patient volume ready</li>
            <li>Think about your main operational challenges</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/resources" 
               style="background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Prepare for Your Call
            </a>
          </div>
          
          <p>If you need to reschedule, please contact us at least 24 hours in advance.</p>
          
          <p>Best regards,<br>The NOW AI Team</p>
        </div>
      </body>
      </html>
    `
  }
}

export default BrevoEmailService
