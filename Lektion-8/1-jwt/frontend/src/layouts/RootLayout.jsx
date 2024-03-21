import { Outlet } from "react-router-dom"
import AuthContextProvider from "../contexts/authContext"
import { Header } from "../components/Header"

function RootLayout() {
  return (
    <>
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
    </>
  )
}
export default RootLayout