import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAuth } from "@/contexts/authContext"
import { usePosts } from "@/contexts/postsContext"
import { Heart, MessageCircle, ThumbsUp } from "lucide-react"
import { LikesDrawer } from "./drawers/likes-drawer"
import { CommentsDrawer } from "./drawers/comments-drawer"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'


export const PostCard = ({ post }) => {

  const { user } = useAuth()
  const { likePost } = usePosts()

  const hasLiked = post.likes.some(like => like.user._id === user?._id)

  const handleLike = async () => {
    likePost(post._id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{ post.user.username }</p>
      </CardHeader>
      <CardContent>
        {/* { post.body } */}
        {/* <div dangerouslySetInnerHTML={{__html: post.body}}></div> */}
        <ReactQuill theme="bubble" value={post.body} readOnly />
      </CardContent>
      <CardFooter className="border-t p-0 flex flex-col">
        <div className="flex items-center justify-between w-full px-6 py-1">

          <LikesDrawer likes={post.likes}>
            <div className="flex items-center gap-1 text-sm cursor-pointer">
              <Heart className="w-4 h-4" />
              <p>{post.likes.length}</p>
            </div>
          </LikesDrawer>

          <CommentsDrawer comments={post.comments} postId={post._id}>
            <div className="text-sm">
              <p>{post.comments.length} comments</p>
            </div>
          </CommentsDrawer>

        </div>

        <div className="border-t px-6 py-1 w-full flex items-center justify-between">
          <div onClick={handleLike} className="flex items-center gap-1 cursor-pointer w-fit text-sm">
            <ThumbsUp fill={hasLiked ? "#fff" : ''} className="w-4 h-4" />
            <p>Like</p>
          </div>

          <CommentsDrawer comments={post.comments} postId={post._id}>
            <div className="flex items-center gap-1 cursor-pointer w-fit text-sm">
              <MessageCircle className="w-4 h-4" />
              <p>Comment</p>
            </div>
          </CommentsDrawer>
        </div>
      </CardFooter>
    </Card>
  )
}