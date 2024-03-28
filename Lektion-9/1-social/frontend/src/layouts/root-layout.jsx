import AuthContextProvider from "@/contexts/authContext"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <AuthContextProvider>
      <div className="h-screen">
        <Outlet />
      </div>
    </AuthContextProvider>
  )
}
export default RootLayout