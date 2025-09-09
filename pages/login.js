import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.ok) window.location.href = "/";
    else alert(data.message || "Login failed");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-4xl mb-8 font-bold mb-4 text-blue-900 text-center">Login</h1>
      <form onSubmit={submit} className="grid gap-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border p-3 rounded"/>
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="border p-3 rounded mb-4"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded ">Login</button>
      </form>
    </div>
  );
}
