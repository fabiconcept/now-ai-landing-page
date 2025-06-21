import { type NextRequest, NextResponse } from "next/server"
import GoogleCalendarService from "@/lib/google-calendar"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")

    if (!date) {
      return NextResponse.json(
        {
          success: false,
          error: "Date parameter is required",
        },
        { status: 400 },
      )
    }

    // Validate date format
    const dateObj = new Date(date)
    if (isNaN(dateObj.getTime())) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid date format",
        },
        { status: 400 },
      )
    }

    // Check if date is in the past
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (dateObj < today) {
      return NextResponse.json(
        {
          success: false,
          error: "Cannot book appointments in the past",
        },
        { status: 400 },
      )
    }

    // Check if it's a weekend
    const dayOfWeek = dateObj.getDay()
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return NextResponse.json({
        success: true,
        data: [], // No slots available on weekends
      })
    }

    let availableSlots: string[] = []

    if (process.env.GOOGLE_CALENDAR_API_KEY) {
      try {
        const calendarService = new GoogleCalendarService()
        availableSlots = await calendarService.getAvailableSlots(date)
      } catch (calendarError) {
        console.error("Google Calendar error:", calendarError)
        // Fallback to default slots
        availableSlots = [
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
    } else {
      // Default available slots if no calendar integration
      availableSlots = [
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
    }

    return NextResponse.json({
      success: true,
      data: availableSlots,
    })
  } catch (error) {
    console.error("Available slots error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch available slots",
      },
      { status: 500 },
    )
  }
}
