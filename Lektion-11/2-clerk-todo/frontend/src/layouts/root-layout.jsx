import { Outlet } from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'
import { Navbar } from "../components/navbar"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="h-screen">
        <Navbar />
        <Outlet />
      </div>
    </ClerkProvider>
  )
}
export default RootLayout