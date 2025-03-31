import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Here you would typically integrate with your preferred email service
    // For example: SendGrid, AWS SES, or any other email service
    
    // For now, we'll just log the data
    console.log('Contact form submission:', { name, email, message })

    // You can implement your email sending logic here
    // Example with SendGrid (you'll need to install @sendgrid/mail):
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    await sgMail.send({
      to: 'your-email@example.com',
      from: 'your-verified-sender@example.com',
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })
    */

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in contact form:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 