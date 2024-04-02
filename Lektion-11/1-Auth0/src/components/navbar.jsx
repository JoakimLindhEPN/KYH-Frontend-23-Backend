import { useAuth0 } from "@auth0/auth0-react"
import { Link, NavLink } from "react-router-dom"
import LoginButton from "./login-button"
import LogoutButton from "./logout-button"

export const Navbar = () => {

  const { isAuthenticated } = useAuth0()

  return (
    <div className="navbar">
      <Link className="logo" to="/">LOGO</Link>
      <ul className="nav-links">
        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
        { !isAuthenticated && <LoginButton /> }

        {
          isAuthenticated &&
          <>
            <li><NavLink className="nav-link" to="/me">My Account</NavLink></li>
            <LogoutButton />
          </>
        }
      </ul>
    </div>
  )
}