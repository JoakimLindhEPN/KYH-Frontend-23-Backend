import { useEffect } from "react"
import { Outlet } from "react-router-dom"

function AuthLayout() {

  useEffect(() => {
    // kolla om vi är inloggade och redidrect om vi är det.
  }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  )
}
export default AuthLayout