import { FullscreenLoader } from "@/components/fullscreen-loader"
import { Header } from "@/components/header"
import { useAuth } from "@/contexts/authContext"
import PostsContextProvider from "@/contexts/postsContext"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function MainLayout() {

  const { authLoaded, user } = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(authLoaded && !user) {
      navigate('/auth/login')
    }
  }, [user, authLoaded])

  if(!authLoaded) return <FullscreenLoader />

  return (
    <PostsContextProvider>
      <div className="h-full">
        <Header />
        <div className="pt-12">
          <Outlet />
        </div>
      </div>
    </PostsContextProvider>
  )
}
export default MainLayout