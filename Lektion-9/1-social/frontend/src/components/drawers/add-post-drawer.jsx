import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { useState } from "react"
import { usePosts } from "@/contexts/postsContext"
import { AddPostForm } from "../forms/add-post-form"

export const AddPostDrawer = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        { children }
      </DrawerTrigger>
      <DrawerContent className="h-[90svh]">
        <DrawerHeader>
          <DrawerTitle>Create a new post</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <AddPostForm setIsOpen={setIsOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}