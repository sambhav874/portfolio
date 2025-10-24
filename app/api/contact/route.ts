import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, feedback } = await req.json();
  await dbConnect();

  try {
    // 1. Save message to database
    await Contact.create({ name, email, feedback });

    // 2. Send email
    const transporter = nodemailer.createTransport({
        service:'gmail',
        host: 'smtp.gmail.net',
      port: 465,
      secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
          },
          debug: true,
    })

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${feedback}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
        { success: false, error: 'Server Error' }, 
        { status: 500 }
    );
  }
}