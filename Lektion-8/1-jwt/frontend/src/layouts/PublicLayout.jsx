import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/authContext"
import { useEffect } from "react"

function PublicLayout() {

  const { user } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if(!user) {
      navigate('/auth/login')
    }
  }, [user])

  return (
    <>
      <Outlet />
    </>
  )
}
export default PublicLayout