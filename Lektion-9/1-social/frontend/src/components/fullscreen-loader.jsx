import { Loader } from "lucide-react"

export const FullscreenLoader = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="w-10 h-10 animate-spin" />
    </div>
  )
}