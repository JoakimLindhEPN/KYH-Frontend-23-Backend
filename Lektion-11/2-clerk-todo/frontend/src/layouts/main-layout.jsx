import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function MainLayout() {

  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(isLoaded && !userId) {
  //     navigate('/auth/sign-in')
  //   } 
  // }, [])
  
  if(!isLoaded) return <p>Loading...</p>

  return (
    <div className="h-full bg-slate-600">
      <Outlet />
    </div>
  )
}
export default MainLayout