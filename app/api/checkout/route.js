import Stripe from 'stripe';

export async function POST(request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PRICE_ID) {
    return Response.redirect(`${siteUrl}/?payment=setup-needed`, 303);
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
    success_url: `${siteUrl}/dashboard?payment=success`,
    cancel_url: `${siteUrl}/#pricing`
  });
  return Response.redirect(session.url, 303);
}
