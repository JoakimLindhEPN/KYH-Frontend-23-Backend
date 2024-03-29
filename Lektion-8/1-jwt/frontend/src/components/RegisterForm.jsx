import { useState } from "react"
import { useAuth } from "../contexts/authContext"

export const RegisterForm = () => {

  const { register } = useAuth()
  const [formError, setFormError] = useState('')
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })


  const handleChange = e => {
    setformData(form => ({
      ...form,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await register(formData)

    if(error) {
      setFormError(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="firstName" className="border border-neutral-500 py-1 px-2 rounded" name="firstName" value={formData.firstName} onChange={handleChange} />
      <input type="text" placeholder="lastName" className="border border-neutral-500 py-1 px-2 rounded" name="lastName" value={formData.lastName} onChange={handleChange} />
      <input type="text" placeholder="email" className="border border-neutral-500 py-1 px-2 rounded" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" placeholder="password" className="border border-neutral-500 py-1 px-2 rounded" name="password" value={formData.password} onChange={handleChange} />
      <button className="bg-green-700 text-white rounded py-1">Register</button>
      <p>{formError}</p>
    </form>
  )
}