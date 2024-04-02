import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  return (
    <div className="px-4 flex items-center justify-between fixed top-0 w-full h-12 bg-slate-700">
      <Link to="/" >LOGO</Link>
      <div>
        <SignedOut>
          <Link to="/auth/sign-in">Sign in</Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  )
}