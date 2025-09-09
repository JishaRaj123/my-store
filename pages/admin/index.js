import { useEffect, useState } from "react";

export default function AdminHome() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "", stock: 10 });

  const load = async () => {
    const res = await fetch("/api/products");
    setProducts(await res.json());
  };

  useEffect(() => { load(); }, []);

  const createProduct = async (e) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ ...form, price: Number(form.price), stock: Number(form.stock) })
    });
    setForm({ name: "", price: "", category: "", image: "", stock: 10 });
    load();
  };

  const remove = async (id) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin • Products</h1>

      <form onSubmit={createProduct} className="grid gap-2 max-w-md mb-6">
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="border p-2 rounded"/>
        <input placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} className="border p-2 rounded"/>
        <input placeholder="Category" value={form.category} onChange={e=>setForm({...form,category:e.target.value})} className="border p-2 rounded"/>
        <input placeholder="Image URL" value={form.image} onChange={e=>setForm({...form,image:e.target.value})} className="border p-2 rounded"/>
        <input placeholder="Stock" value={form.stock} onChange={e=>setForm({...form,stock:e.target.value})} className="border p-2 rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p=>(
            <tr key={p._id}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.category}</td>
              <td className="p-2 border">₹{p.price}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border">
                <button onClick={()=>remove(p._id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr><td className="p-2 border" colSpan="5">No products yet</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
