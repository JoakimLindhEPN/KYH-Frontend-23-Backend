import { Auth0Provider } from '@auth0/auth0-react';

import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"

function RootLayot() {
  return (
    <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <div>
      <Navbar />
      <Outlet />
    </div>
  </Auth0Provider>
  )
}
export default RootLayot