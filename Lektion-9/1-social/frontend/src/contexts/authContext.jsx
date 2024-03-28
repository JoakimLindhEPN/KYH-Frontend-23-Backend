import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [authLoaded, setAuthLoaded] = useState(false)


  useEffect(() => {
    const getUserData = async () => {

      const res = await fetch('/api/auth/me')

      if(res.status !== 200) {
        await fetch('/api/auth/logout', { method: 'POST' })
        setUser(null)
        setAuthLoaded(true)
        return
      }

      const data = await res.json()
      setUser(data)
      setAuthLoaded(true)
    }
    getUserData()

  }, [])


  const register = async (formData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      
      if(res.status !== 201) {
        return { error: data.message }
      }

      setUser(data)
      return { success: true }
    } catch (err) {
      return { error: err.message }
    }
  }

  const login = async (formData) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if(res.status !== 200) {
        return { error: data.message }
      }

      setUser(data)
      return { success: true }
    } catch (err) {
      return { error: err.message }
    }
  }

  const logout = async () => {
    const res = await fetch('/api/auth/logout', { method: 'POST' })
    if(res.status === 200)
      setUser(null)
  }

  const value = {
    user,
    register,
    login,
    logout,
    authLoaded
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