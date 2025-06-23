import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <div className="flex flex-col items-center mt-20">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-4" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="mb-4" />
      <button onClick={() => login(email, password)} className="bg-blue-500 px-4 py-2 text-white rounded">Login</button>
    </div>
  );
}
