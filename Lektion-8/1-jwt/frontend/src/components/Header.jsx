import { useAuth } from "../contexts/authContext"

export const Header = () => {

  const { user, logout } = useAuth()

  return (
    <div className="h-10 bg-slate-300 flex justify-end items-center px-4">
      { user && user.displayName }
      { user && (
        <button onClick={logout} className="bg-red-800 text-white px-2 py-1 rounded ml-10">Logout</button>
      )}
    </div>
  )
}