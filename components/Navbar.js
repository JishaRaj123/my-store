import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/pages/_app";

export default function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center bg-blue-600 p-4  text-white sticky top-0 z-50">
      {/* Left side - Store name */}
      <h1 className="text-2xl font-bold">NovaMart</h1>

      {/* Right side - Navigation links */}
      <div className="flex space-x-6 items-center">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <Link href="/cart" className="hover:text-amber-400">
          Cart 
          {cartCount > 0 && (
            <span className="ml-1 bg-amber-400 text-black px-2 py-0.5 rounded-full text-sm">
              {cartCount}
            </span>
          )}
        </Link>
        <Link href="/login" className="hover:text-amber-400">Login</Link>
      </div>
    </nav>
  );
}   