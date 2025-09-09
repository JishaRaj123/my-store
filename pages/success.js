import { useEffect } from "react";

export default function Success() {
  // you can call backend to verify session if you want
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Payment Successful 🎉</h1>
      <p>Thank you for your order!</p>
    </div>
  );
}
