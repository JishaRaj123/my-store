// import { useContext } from "react";
// import { CartContext } from "@/pages/_app";
// import Navbar from "@/components/Navbar";

// export default function Cart() {
//   const {
//     cart,
//     incrementQty,
//     decrementQty,
//     removeFromCart,
//     cartTotal,
//     clearCart,
//   } = useContext(CartContext);

//   return (
//     <>
//       {/* <Navbar /> */}
//       <main className="max-w-4xl mx-auto p-4 ">
//         <h1 className="text-3xl font-bold mb-4">Your Cart 🛒</h1>

//         {cart.length === 0 ? (
//           <p className="text-gray-600">No items yet.</p>
//         ) : (
//           <>
//             <ul className="space-y-4">
//               {cart.map((item) => (
//                 <li key={item.id} className="border p-4 rounded flex gap-4 items-center">
//                   <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//                   <div className="flex-1">
//                     <h2 className="font-bold">{item.name}</h2>
//                     <p className="text-gray-600">₹{item.price}</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button onClick={() => decrementQty(item.id)} className="px-3 py-1 border rounded">-</button>
//                     <span className="w-8 text-center">{item.qty}</span>
//                     <button onClick={() => incrementQty(item.id)} className="px-3 py-1 border rounded">+</button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="ml-4 text-red-600 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 flex items-center justify-between">
//               <h2 className="text-2xl font-bold">Total: ₹{cartTotal}</h2>
//               <div className="space-x-3">
//                 <button onClick={clearCart} className="px-4 py-2 border rounded">Clear Cart</button>
//                 <a
//                   href="/checkout"
//                   className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                 >
//                   Checkout
//                 </a>
//               </div>
//             </div>

//           </>
//         )}
//       </main>
//     </>
//   );
// }




import { useContext } from "react";
import { CartContext } from "@/pages/_app";
import Navbar from "@/components/Navbar";

export default function Cart() {
  const {
    cart,
    incrementQty,
    decrementQty,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useContext(CartContext);

  //  Checkout function
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout/create-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart, userId: null }), // Replace null with real userId after auth
    });

    const data = await res.json();
       console.log("Stripe session response:", data);
    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    } else {
      alert("Something went wrong with checkout.");
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <main className="max-w-6xl mx-auto p-1 ">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Your Cart 🛒</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">No items yet.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="border p-4 rounded flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrementQty(item.id)}
                      className="px-3 py-1 border rounded"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button
                      onClick={() => incrementQty(item.id)}
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex  items-center justify-between">
              <h2 className="text-2xl text-blue-900 font-bold">Total: ₹{cartTotal}</h2>
              <div className="space-x-3">
                <button onClick={clearCart} className="px-5 py-3 text-blue-900 border rounded">
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="px-5 py-3 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
