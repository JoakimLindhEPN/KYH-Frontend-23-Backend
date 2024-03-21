import { useState } from "react"
import { useAuth } from "../contexts/authContext"

export const RegisterForm = () => {

  const { register } = useAuth()
  const [formData, setformData] = useState({
    email: '',
    password: ''
  })
  
  const handleSubmit = async () => {

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="email" className="border border-neutral-500 py-1 px-2 rounded" />
      <input type="password" placeholder="password" className="border border-neutral-500 py-1 px-2 rounded" />
      <button className="bg-green-700 text-white rounded py-1">Register</button>
    </form>
  )
}