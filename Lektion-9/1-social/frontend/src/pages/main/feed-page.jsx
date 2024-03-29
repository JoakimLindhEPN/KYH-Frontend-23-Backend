import { AddPostDrawer } from "@/components/drawers/add-post-drawer"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { usePosts } from "@/contexts/postsContext"
import { Loader } from "lucide-react"
import { useEffect } from "react"

function FeedPage() {

  const { posts, loading, error, getPosts } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  console.log(posts)
  return (
    <div>
      <AddPostDrawer>
        <Button className="w-full" variant="ghost">What are you doing right now?</Button>
      </AddPostDrawer>
      { loading && (
        <div className="flex justify-center mt-6">
          <Loader className="h-10 w-10 animate-spin" />
        </div>
      )}
      { error && <p className="text-destructive text-center font-semibold mt-6">{error}</p>}

      <div className="mt-6 flex flex-col gap-4 px-4">
        { posts && posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
export default FeedPage