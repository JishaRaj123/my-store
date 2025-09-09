import Head from "next/head";
import Link from "next/link";
import { useState, useContext } from "react";
import { CartContext } from "@/pages/_app";
import BannerSlider from "@/components/BannerSlider";
import Banner from "@/components/Banner"; 
import Footer from "@/components/Footer";   // adjust path if needed


export default function Home() {
  // Categories
  const categories = [
    { id: 1, name: "Mens", image: "https://picsum.photos/seed/mens/400/300" },
    { id: 2, name: "Womens", image: "https://picsum.photos/seed/womens/400/300" },
    { id: 3, name: "Kids", image: "https://picsum.photos/seed/kids/400/300" },
    { id: 4, name: "Electronics", image: "https://picsum.photos/seed/electronics/400/300" },
    { id: 5, name: "Jewellery", image: "https://picsum.photos/seed/jewellery/400/300" },
    { id: 6, name: "Footwear", image: "https://picsum.photos/seed/footwear/400/300" },
    { id: 7, name: "Beauty", image: "https://picsum.photos/seed/beauty/400/300" },
    { id: 8, name: "Food", image: "https://picsum.photos/seed/food/400/300" },
    { id: 9, name: "Grocery", image: "https://picsum.photos/seed/grocery/400/300" },
    { id: 10, name: "HomeDecor", image: "https://picsum.photos/seed/homedecor/400/300" },
    { id: 11, name: "Furniture", image: "https://picsum.photos/seed/furniture/400/300" },
    { id: 12, name: "Stationery", image: "https://picsum.photos/seed/stationery/400/300" },
  ];

  // Products
  const products = [
  { id: 1, name: "Red T-Shirt", price: 499, category: "Mens", image: "https://picsum.photos/seed/p1/400/300" },
  { id: 2, name: "Blue Jeans", price: 999, category: "Mens", image: "https://picsum.photos/seed/p2/400/300" },
  { id: 3, name: "Saree", price: 1499, category: "Womens", image: "https://picsum.photos/seed/p3/400/300" },
  { id: 4, name: "Kids Toy", price: 299, category: "Kids", image: "https://picsum.photos/seed/p4/400/300" },
  { id: 5, name: "Laptop", price: 49999, category: "Electronics", image: "https://picsum.photos/seed/p5/400/300" },
  { id: 6, name: "Necklace", price: 9999, category: "Jewellery", image: "https://picsum.photos/seed/p6/400/300" },
  { id: 7, name: "Shoes", price: 1999, category: "Footwear", image: "https://picsum.photos/seed/p7/400/300" },
  { id: 8, name: " Brown Lipstick", price: 399, category: "Beauty", image: "https://picsum.photos/seed/p8/400/300" },
  { id: 9, name: "Snacks (Set of 5)", price: 99, category: "Food", image: "https://picsum.photos/seed/p9/400/300" },
  { id: 10, name: "Jaya Rice", price: 499, category: "Grocery", image: "https://picsum.photos/seed/p10/400/300" },
  { id: 11, name: "Black Shoes", price: 299, category: "Footwear", image: "https://picsum.photos/seed/p11/400/300" },
  { id: 12, name: "Himalaya Face Wash", price: 499, category: "Beauty", image: "https://picsum.photos/seed/p12/400/300" },
  { id: 13, name: "Rice", price: 4099, category: "Grocery", image: "https://picsum.photos/seed/p13/400/300" },
  { id: 14, name: " Shoes", price: 9299, category: "Footwear", image: "https://picsum.photos/seed/p14/400/300" },
  { id: 15, name: "Face Wash", price: 2499, category: "Beauty", image: "https://picsum.photos/seed/p15/400/300" },
];


  // State
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const { addToCart } = useContext(CartContext);

  // Filter + Search logic
  const filteredProducts = products.filter((p) => {
    const matchCategory = filter === "All" || p.category === filter;
   //  search in product name or category
  const matchSearch =
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Head><title>NovaMart</title></Head>

      <main className="w-full">
        {/* 🔹 Search + Filter (top, below Navbar) */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8  gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-full sm:w-2/3"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-4 py-2 rounded w-full sm:w-1/3"
          >
            <option value="All">All</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        
         {/* 🔹 Banner Slider */}
      <BannerSlider />

          

        {/* 🔹 Shop by Category */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Shop by Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link href={`/category/${cat.name}`} key={cat.id}>
              <div className="border rounded-lg shadow hover:shadow-lg cursor-pointer">
                <img src={cat.image} alt={cat.name} className="rounded-t-lg h-48 w-full object-cover" />
                <div className=" p-4 text-center font-semibold text-blue-950">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <br />
        <br />
         {/* 🔹 Banner Ad */}
        <Banner />
        
        {/* 🔹 Product Grid */}
        <h2 className="text-2xl font-bold text-blue-900 mb-6 mt-12">Trending New Products</h2>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-5 rounded-lg shadow bg-white "
              >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                <h3 className="text-sn font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600 mt-1">₹{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className=" mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

<Footer />



        
      </main>
    </>
  );
}
