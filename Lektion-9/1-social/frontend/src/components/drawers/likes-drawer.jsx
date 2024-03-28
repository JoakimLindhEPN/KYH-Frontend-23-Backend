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

export const LikesDrawer = ({ children, likes }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        { children }
      </DrawerTrigger>
      <DrawerContent className="h-96">
        <ScrollArea className="px-4 mt-6">
          { likes.map(like => (
            <div key={like._id}>
              <p>{like.user.username}</p>
              <Separator className="my-2" />
            </div>
          ))}
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}