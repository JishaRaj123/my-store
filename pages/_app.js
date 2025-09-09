import React, { useState, useEffect, createContext, useMemo } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar"; 

export const CartContext = createContext();

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add item (increase qty if already in cart)
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const incrementQty = (id) =>
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );

  const decrementQty = (id) =>
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
      )
    );

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((n, i) => n + i.qty, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () => cart.reduce((s, i) => s + i.price * i.qty, 0),
    [cart]
  );

  const value = {
    cart,
    addToCart,
    incrementQty,
    decrementQty,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
        <Navbar /> 
       
  <main className="p-6 pt-24">
      <Component {...pageProps} />
      </main>
    </CartContext.Provider>
  );
}

export default MyApp;
