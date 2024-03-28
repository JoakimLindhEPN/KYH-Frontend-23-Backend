import { FullscreenLoader } from "@/components/fullscreen-loader"
import { useAuth } from "@/contexts/authContext"
import { Outlet } from "react-router-dom"

function AuthLayout() {

  const { authLoaded } = useAuth()

  if(!authLoaded) return <FullscreenLoader />

  return (
    <div className="h-full flex items-center justify-center">
      <Outlet />
    </div>
  )
}
export default AuthLayout