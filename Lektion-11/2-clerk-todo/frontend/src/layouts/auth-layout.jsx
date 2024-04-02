import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="h-full flex items-center justify-center bg-slate-600">
      <Outlet />
    </div>
  )
}
export default AuthLayout