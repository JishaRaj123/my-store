// import Stripe from "stripe";
// import { dbConnect } from "@/lib/mongodb";
// import Order from "@/models/Order";

// // console.log("Checkout API hit!");
// // console.log("Stripe Key exists?", !!process.env.STRIPE_SECRET_KEY);




// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).end();
//   const { items, userId } = req.body; // [{name, price, qty}]
//   await dbConnect();

//   const line_items = items.map((i) => ({
//     price_data: {
//       currency: "inr",
//       product_data: { name: i.name },
//       unit_amount: Math.round(i.price * 100),
//     },
//     quantity: i.qty,
//   }));

//   const amount = items.reduce((s, i) => s + i.price * i.qty, 0);

//   const session = await stripe.checkout.sessions.create({
//     mode: "payment",
//     payment_method_types: ["card"],
//     line_items,
//     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
//   });

//   // Save order (pending)
//   const order = await Order.create({
//     userId: userId || null,
//     items,
//     amount,
//     status: "pending",
//     stripeSessionId: session.id,
//   });

//   res.json({ id: session.id, url: session.url, orderId: order._id });
// }
import Stripe from "stripe";
import clientPromise from "@/lib/mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("Checkout API hit!");

    const client = await clientPromise;
    console.log(" MongoDB connected successfully");

    const { items } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in cart" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr", //  INR instead of USD
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.qty, // Fix here
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    res.status(200).json({ url: session.url }); // ✅ send Stripe URL
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ error: error.message });
  }
}

