import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)


  useEffect(() => {
    const getToken = async () => {
      if(token) return
  
      const local = localStorage.getItem('token')
      if(!local) return

      const res = await fetch('http://localhost:8000/api/users/profile', {
        headers: {
          'Authorization': 'Bearer ' + local
        }
      })

      if(res.status !== 200) {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
      }

      const data = await res.json()
      setUser(data)
      setToken(local)
    }
    getToken()

  }, [])


  const register = async (formData) => {
    try {
      const res = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      console.log(res)
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  const value = {
    token,
    user,
    register
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider


export const useAuth = () => {
  const context = useContext(AuthContext)

  if(!context) throw new Error('useAuth must be inside a AuthContextProvider')
  return context
}