// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 mt-12 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">NovaMart</h2>
          <p className="text-gray-300">
            Your one-stop shop for fashion, electronics, home, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="/shipping" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Stay Connected</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-62 p-2 rounded text-black"
          /> <br />
          <button className="mt-3 bg-amber-400 text-black px-4 py-2 rounded font-semibold hover:bg-amber-500">
            Subscribe
          </button>
          <div className="flex space-x-4 mt-4">
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400 border-t border-gray-600 pt-4">
        © 2025 NovaMart. All rights reserved.
      </div>
    </footer>
  );
}
