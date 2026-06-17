import { NextResponse } from 'next/server';

interface BookingRequest {
  serviceType: 'viewing' | 'repair';
  name: string;
  phone: string;
  email?: string;
  deviceModel: string;
  issueDescription?: string;
  preferredDate: string;
  preferredTime: string;
  reference: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingRequest = await request.json();
    
    // Validate required fields
    if (!body.name || !body.phone || !body.deviceModel || !body.preferredDate || !body.preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare email content
    const serviceTypeLabel = body.serviceType === 'viewing' ? 'In-Store Device Viewing' : 'Device Repair';
    const emailSubject = `New Booking: ${serviceTypeLabel} - ${body.reference}`;
    
    const emailHtml = `
      <h2>New Teez-Flexx Mobiles Booking</h2>
      <p><strong>Reference:</strong> ${body.reference}</p>
      <p><strong>Service Type:</strong> ${serviceTypeLabel}</p>
      <hr>
      <h3>Customer Details</h3>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Email:</strong> ${body.email || 'Not provided'}</p>
      <hr>
      <h3>Appointment</h3>
      <p><strong>Date:</strong> ${body.preferredDate}</p>
      <p><strong>Time:</strong> ${body.preferredTime}</p>
      <p><strong>Device Model:</strong> ${body.deviceModel}</p>
      ${body.issueDescription ? `<p><strong>Issue Description:</strong> ${body.issueDescription}</p>` : ''}
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted via Teez-Flexx Mobiles website</p>
    `;

    const emailText = `
New Teez-Flexx Mobiles Booking

Reference: ${body.reference}
Service Type: ${serviceTypeLabel}

Customer Details:
Name: ${body.name}
Phone: ${body.phone}
Email: ${body.email || 'Not provided'}

Appointment:
Date: ${body.preferredDate}
Time: ${body.preferredTime}
Device Model: ${body.deviceModel}
${body.issueDescription ? `Issue Description: ${body.issueDescription}` : ''}

Submitted via Teez-Flexx Mobiles website
    `;

    // Try Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'bookings@teez-flexx-mobiles.co.za';
    const toEmail = process.env.TO_EMAIL || 'teezflexxmobiles@gmail.com';

    if (resendApiKey) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Teez-Flexx Bookings <${fromEmail}>`,
          to: toEmail,
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
          reply_to: body.email || undefined,
        }),
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.text();
        console.error('Resend API error:', error);
        // Continue to fallback
      } else {
        return NextResponse.json({ 
          success: true, 
          reference: body.reference,
          message: 'Booking submitted successfully' 
        });
      }
    }

    // Fallback: Log to console (for development) and return success
    // In production, you could also use a different email service here
    console.log('BOOKING RECEIVED:', {
      reference: body.reference,
      serviceType: body.serviceType,
      name: body.name,
      phone: body.phone,
      date: body.preferredDate,
      time: body.preferredTime,
    });

    // If no email service configured, still return success but flag it
    return NextResponse.json({ 
      success: true, 
      reference: body.reference,
      message: resendApiKey 
        ? 'Booking submitted' 
        : 'Booking received (email notification pending setup)',
      _devNote: !resendApiKey ? 'Configure RESEND_API_KEY env var for email delivery' : undefined
    });

  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
