import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type CheckoutItem = {
    name: string;
    image: string;
    price: number;
    quantity: number;
  };

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('🛒 Incoming checkout items:', body.items);

  try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: body.items.map((item: CheckoutItem) => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [
                item.image.startsWith('http') 
                  ? item.image 
                  : `${req.nextUrl.origin}${item.image}`,
              ],
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        })),
        mode: 'payment',
        shipping_address_collection: {
          allowed_countries: ['US'], // you can add more countries here
        },
        success_url: `${req.nextUrl.origin}/success`,
        cancel_url: `${req.nextUrl.origin}/cancel`,
      });
      

    console.log('✅ Stripe session created:', session.id);
    return NextResponse.json({ url: session.url });
} catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('🔥 Stripe Checkout Error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
  
}
