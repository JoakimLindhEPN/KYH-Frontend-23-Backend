import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from '../contexts/authContext'
function AuthLayout() {

  const { user } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user])

  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  )
}
export default AuthLayout