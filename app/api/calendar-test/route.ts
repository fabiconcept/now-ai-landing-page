import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CALENDAR_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    
    // Test listing calendars
    const calendars = await calendar.calendarList.list();
    
    // Test accessing primary calendar
    const primaryCalendar = await calendar.calendars.get({
      calendarId: 'primary'
    });

    // Try to create a test event
    const now = new Date();
    const testEvent = {
      summary: 'Test Event from API',
      description: 'This is a test event created by the API',
      start: {
        dateTime: now.toISOString(),
        timeZone: 'America/New_York',
      },
      end: {
        dateTime: new Date(now.getTime() + 3600000).toISOString(), // 1 hour later
        timeZone: 'America/New_York',
      },
    };

    let testEventResult = null;
    try {
      const createdEvent = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: testEvent,
        sendUpdates: 'none',
      });
      testEventResult = { success: true, eventId: createdEvent.data.id };
      
      // Clean up the test event
      await calendar.events.delete({
        calendarId: 'primary',
        eventId: createdEvent.data.id || ''
      });
    } catch (eventError: any) {
      testEventResult = {
        success: false,
        error: eventError.message,
        details: eventError.response?.data
      };
    }

    return NextResponse.json({
      status: 'success',
      calendars: calendars.data.items?.map(c => ({
        id: c.id,
        summary: c.summary,
        accessRole: c.accessRole,
      })),
      primaryCalendar: {
        id: primaryCalendar.data.id,
        summary: primaryCalendar.data.summary,
        timeZone: primaryCalendar.data.timeZone,
      },
      testEvent: testEventResult,
    });
  } catch (error: any) {
    console.error('Calendar test error:', {
      message: error.message,
      code: error.code,
      status: error.status,
      response: error.response?.data,
    });
    
    return NextResponse.json(
      { 
        status: 'error',
        message: error.message,
        code: error.code,
        details: error.response?.data
      },
      { status: 500 }
    );
  }
}
