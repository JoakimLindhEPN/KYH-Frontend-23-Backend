import { FullscreenLoader } from "@/components/fullscreen-loader"
import { useAuth } from "@/contexts/authContext"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function AuthLayout() {

  const { authLoaded, user } = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(authLoaded && user) {
      navigate('/')
    }
  }, [user, authLoaded])

  if(!authLoaded) return <FullscreenLoader />

  return (
    <div className="h-full flex items-center justify-center">
      <Outlet />
    </div>
  )
}
export default AuthLayout