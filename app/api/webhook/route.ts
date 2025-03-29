// app/api/webhook/route.ts
import { NextRequest } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const body = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
  console.error('Webhook signature verification failed:', errorMessage);
  return new Response(`Webhook Error: ${errorMessage}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'essencenala@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'essencenala@gmail.com',
      to: 'essencenala@gmail.com',
      subject: 'New Order Received 🎉',
      text: `A new order has been placed by ${session.customer_email} for a total of $${session.amount_total! / 100} USD.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('📧 Order email sent successfully!');
    } catch (error) {
      console.error('Failed to send order email:', error);
    }
  }

  return new Response('Webhook received', { status: 200 });
}