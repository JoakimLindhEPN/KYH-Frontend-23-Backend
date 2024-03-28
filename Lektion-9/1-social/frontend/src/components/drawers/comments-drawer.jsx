import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Send } from "lucide-react"
import { useState } from "react"
import { usePosts } from "@/contexts/postsContext"

export const CommentsDrawer = ({ children, comments, postId }) => {

  const [text, setText] = useState('')
  const { addComment } = usePosts()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(text.trim() === '') return

    await addComment(postId, text)
    setText('')
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        { children }
      </DrawerTrigger>
      <DrawerContent className="h-[90svh]">
        <ScrollArea className="px-4 mt-6 mb-20">
          { comments.map(comment => (
            <div key={comment._id} className="bg-muted p-2 rounded-lg mb-4">
              <p className="text-xs text-muted-foreground mb-1">{comment.user.username}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 w-full p-4 flex items-center gap-2">
          <Input value={text} onChange={e => setText(e.target.value)} />
          <Button size="sm">
            <Send />
          </Button>
        </form>
      </DrawerContent>
    </Drawer>
  )
}