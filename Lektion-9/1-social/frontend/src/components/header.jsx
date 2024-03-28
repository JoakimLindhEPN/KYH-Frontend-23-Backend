import { useAuth } from "@/contexts/authContext"
import { UserButton } from "./user-button"
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
  const { user } = useAuth()
  return (
    <div className="fixed top-0 border-b w-full h-12 flex items-center justify-between px-4">
      <ModeToggle />
      {user && <UserButton />}
    </div>
  )
}