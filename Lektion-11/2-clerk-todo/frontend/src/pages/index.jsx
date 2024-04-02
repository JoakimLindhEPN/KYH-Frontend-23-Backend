import { useEffect, useState } from "react"
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from "react-router-dom"

function IndexPage() {

  const { userId, isLoaded, getToken } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(isLoaded && !userId) {
      navigate('/auth/sign-in')
    } 
  }, [])
  
  
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    const getTodos = async () => {
      try {
        setLoading(true)
        const token = await getToken()
        const res = await fetch('http://localhost:8000/api/todos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = await res.json()
        
        console.log({res, data})
        if(res.status !== 200) {
          throw new Error(data.message)
        }
        
        setLoading(false)
        setTodos(data)
        setError(null)
        
      } catch (err) {
        console.log(err)
        setLoading(false)
        setError(err.message)
      }
    }
    getTodos()
  }, [getToken])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await getToken()
    const res = await fetch('http://localhost:8000/api/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title })
    })
    
    const data = await res.json()
    
    if(res.status !== 201) {
      setError('Somenting went wrong')
      console.log(data.message)
      return
    }
    
    setTodos(todos => [...todos, data])
    setTitle('')
  }
  
  
  if(!isLoaded) return <p>Loading...</p>
  if(loading) return <p>Loading...</p>
  
  return (
    <div className="h-full bg-slate-600 pt-12 px-4">
      <form onSubmit={handleSubmit} className="w-full flex pt-2 gap-2">
        <input value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded px-1" />
        <button className="bg-slate-700 px-4 py-1 rounded">Add</button>
      </form>
      { todos.map(todo => (
        <div key={todo._id}>
          <p>{todo.title}</p>
        </div>
      ))}
      { error && <p>{error}</p>}
    </div>
  )
}
export default IndexPage