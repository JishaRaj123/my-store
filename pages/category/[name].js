import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "../_app";

const allProducts = {
  Mens: [
    { id: 1, name: "Men's T-Shirt", price: 499, image: "https://picsum.photos/seed/m1/400/300" },
    { id: 2, name: "Men's Jeans", price: 999, image: "https://picsum.photos/seed/m2/400/300" },
    { id: 3, name: "Baggy Jeans", price: 899, image: "https://picsum.photos/seed/m3/400/300" },
    { id: 4, name: "SuitSet", price: 599, image: "https://picsum.photos/seed/m4/400/300" },
    { id: 5, name: "Causual Shirts", price: 699, image: "https://picsum.photos/seed/m5/400/300" },
    { id: 6, name: "WinterClothes", price: 1599, image: "https://picsum.photos/seed/m6/400/300" },
  ],
  Womens: [
    { id: 7, name: "Women's Jeans", price: 799, image: "https://picsum.photos/seed/w1/400/300" },
    { id: 8, name: "Croptop", price: 349, image: "https://picsum.photos/seed/w2/400/300" },
    { id: 9, name: "Kurthi", price: 569, image: "https://picsum.photos/seed/w3/400/300" },
    { id: 10, name: "Sarees", price: 1299, image: "https://picsum.photos/seed/w4/400/300" },
    { id: 11, name: "Lehenga", price: 1569, image: "https://picsum.photos/seed/w5/400/300" },
    { id: 12, name: "Silk Sarees", price: 1099, image: "https://picsum.photos/seed/w6/400/300" },
  ],
  Kids: [
    { id: 13, name: "Kids Shoes", price: 499, image: "https://picsum.photos/seed/k1/400/300" },
    { id: 14, name: "Kids Frock", price: 599, image: "https://picsum.photos/seed/k2/400/300" },
    { id: 15, name: "Kids Jeans ", price: 1999, image: "https://picsum.photos/seed/k3/400/300" },
    { id: 16, name: "Top", price: 899, image: "https://picsum.photos/seed/k4/400/300" },
    { id: 15, name: "Combo Sets ", price: 999, image: "https://picsum.photos/seed/k5/400/300" },
    { id: 16, name: "Inner Wear", price: 299, image: "https://picsum.photos/seed/k6/400/300" },
  ],
  Electronics: [
    { id: 19, name: "Smartphone", price: 15999, image: "https://picsum.photos/seed/e1/400/300" },
    { id: 20, name: "Headphones", price: 1999, image: "https://picsum.photos/seed/e2/400/300" },
    { id: 21, name: "Television", price: 20999, image: "https://picsum.photos/seed/e3/400/300" },
    { id: 22, name: "Fridge", price: 10099, image: "https://picsum.photos/seed/e4/400/300" },
    { id: 23, name: "Remote Control", price: 2999, image: "https://picsum.photos/seed/e5/400/300" },
    { id: 24, name: "Wired Earphone", price: 1099, image: "https://picsum.photos/seed/e6/400/300" },
  ],
  Jewellery: [
    { id: 25, name: "Necklace", price: 1999, image: "https://picsum.photos/seed/j1/400/300" },
    { id: 26, name: "Bangles", price: 499, image: "https://picsum.photos/seed/j2/400/300" },
    { id: 27, name: "Rings", price: 299, image: "https://picsum.photos/seed/j3/400/300" },
    { id: 28, name: "Earrings", price: 199, image: "https://picsum.photos/seed/j4/400/300" },
    { id: 29, name: "Gold Rings", price: 699, image: "https://picsum.photos/seed/j5/400/300" },
    { id: 30, name: "Chokers", price: 599, image: "https://picsum.photos/seed/j6/400/300" },
  ],
  Footwear: [
    { id: 31, name: "Sneakers", price: 1499, image: "https://picsum.photos/seed/f1/400/300" },
    { id: 32, name: "Shoes", price: 499, image: "https://picsum.photos/seed/f2/400/300" },
    { id: 33, name: "Crocks", price: 2039, image: "https://picsum.photos/seed/f3/400/300" },
    { id: 34, name: "High Heels", price: 1399, image: "https://picsum.photos/seed/f4/400/300" },
    { id: 35, name: "Formal Shoes", price: 2039, image: "https://picsum.photos/seed/f5/400/300" },
    { id: 36, name: "Flat Heels", price: 2399, image: "https://picsum.photos/seed/f6/400/300" },
  ],
  Beauty: [
    { id: 37, name: "FaceWash", price: 209, image: "https://picsum.photos/seed/b1/400/300" },
    { id: 38, name: "Moisterizer", price: 109, image: "https://picsum.photos/seed/b2/400/300" },
    { id: 39, name: "Foundation kit", price: 399, image: "https://picsum.photos/seed/b3/400/300" },
    { id: 40, name: "Lipstick", price: 99, image: "https://picsum.photos/seed/b4/400/300" },
    { id: 41, name: "Concealer", price: 599, image: "https://picsum.photos/seed/b5/400/300" },
    { id: 42, name: "SunScreen", price: 499, image: "https://picsum.photos/seed/b6/400/300" },
  ],
  Food: [
    { id: 43, name: "Drinks", price: 199, image: "https://picsum.photos/seed/fo1/400/300" },
    { id: 44, name: "Chocolates", price: 99, image: "https://picsum.photos/seed/fo2/400/300" },
    { id: 45, name: "Lays", price: 59, image: "https://picsum.photos/seed/fo3/400/300" },
    { id: 46, name: "Biscuits", price: 299, image: "https://picsum.photos/seed/fo4/400/300" },
    { id: 47, name: "Murukku", price: 69, image: "https://picsum.photos/seed/fo5/400/300" },
    { id: 48, name: "Milk Sahke", price: 189, image: "https://picsum.photos/seed/fo6/400/300" },
  ],
  Grocery: [
    { id: 49, name: "Rice 5kg", price: 699, image: "https://picsum.photos/seed/g1/400/300" },
    { id: 50, name: "Fruits", price: 359, image: "https://picsum.photos/seed/g2/400/300" },
    { id: 51, name: "Wheat Flour", price: 499, image: "https://picsum.photos/seed/g3/400/300" },
    { id: 52, name: "Vegetables", price: 679, image: "https://picsum.photos/seed/g4/400/300" },
    { id: 53, name: "Tumeric powder", price: 299, image: "https://picsum.photos/seed/g5/400/300" },
    { id: 54, name: "Coconut Oil", price: 379, image: "https://picsum.photos/seed/g6/400/300" },
  ],
    HomeDecor: [
    { id: 55, name: "Flower Vase", price: 699, image: "https://picsum.photos/seed/hd1/400/300" },
    { id: 56, name: "Photo Frame Set", price: 299, image: "https://picsum.photos/seed/hd2/400/300" },
    { id: 57, name: "Candle Holder", price: 499, image: "https://picsum.photos/seed/hd3/400/300" },
    { id: 58, name: "Table Lamp", price: 629, image: "https://picsum.photos/seed/hd4/400/300" },
    { id: 59, name: "Wall Clocks", price: 399, image: "https://picsum.photos/seed/hd5/400/300" },
    { id: 60, name: "Curtains", price: 1009, image: "https://picsum.photos/seed/hd6/400/300" },
  ],
    Furniture: [
    { id: 61, name: "Wood Shoe Racket", price: 6990, image: "https://picsum.photos/seed/fu1/400/300" },
    { id: 62, name: "3 Seater Sofa", price: 15999, image: "https://picsum.photos/seed/fu2/400/300" },
    { id: 63, name: "Fabric Study Arm Chair", price: 4990, image: "https://picsum.photos/seed/fu3/400/300" },
    { id: 64, name: "Wooden Shelf", price: 12379, image: "https://picsum.photos/seed/fu4/400/300" },
    { id: 65, name: "Corner Sets", price: 14990, image: "https://picsum.photos/seed/fu5/400/300" },
    { id: 66, name: "TV Stand", price: 19379, image: "https://picsum.photos/seed/fu6/400/300" },
  ],
    Stationery: [
    { id: 67, name: "NoteBook", price: 109, image: "https://picsum.photos/seed/s1/400/300" },
    { id: 68, name: "Pens (Pack of 10)", price: 149, image: "https://picsum.photos/seed/s2/400/300" },
    { id: 69, name: "Sticky Notes", price: 79, image: "https://picsum.photos/seed/s3/400/300" },
    { id: 70, name: "Stapler", price: 179, image: "https://picsum.photos/seed/s4/400/300" },
    { id: 71, name: "Highligher", price: 99, image: "https://picsum.photos/seed/s5/400/300" },
    { id: 72, name: "Sketch Pens", price: 189, image: "https://picsum.photos/seed/s6/400/300" },
  ],
};

export default function CategoryPage() {
  const router = useRouter();
  const { name } = router.query;
  const { addToCart } = useContext(CartContext);

  const products = allProducts[name] || [];

  return (
    <div className=" max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 text-center">{name} Collection</h1>

      {products.length === 0 ? (
        <p>No products found in {name}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="border rounded-lg shadow">
              <img src={p.image} alt={p.name} className="rounded-t-lg h-48 w-full object-cover" />
              <div className="p-5">
                <h2 className="font-semibold mb-2 text-blue-950">{p.name}</h2>
                <p className="text-gray-600">₹{p.price}</p>
                <button
                  onClick={() => addToCart(p)}
                  className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
