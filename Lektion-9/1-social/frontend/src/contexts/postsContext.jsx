import { createContext, useContext, useState } from "react";


export const PostsContext = createContext()

const PostsContextProvider = ({ children }) => {

  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getPosts = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/posts')
      const data = await res.json()
  
      if(res.status !== 200) {
        setLoading(false)
        setError(data.message)
        return
      }

      setPosts(data)
      setLoading(false)
      setError(null)

    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  const reload = async () => {
    const res = await fetch('/api/posts')
    const data = await res.json()

    if(res.status !== 200) {
      setError(data.message)
      return
    }

    setPosts(data)
    setError(null)
  }

  const likePost = async (postId) => {
    const res = await fetch('/api/like/' + postId, { method: 'POST' })
    if(res.ok)
     await reload()
  }

  const value = {
    posts, 
    loading,
    error,
    getPosts,
    likePost
  }

  return (
    <PostsContext.Provider value={value}>
      { children }
    </PostsContext.Provider>
  )
}

export default PostsContextProvider


export const usePosts = () => {
  const context = useContext(PostsContext)

  if(!context) throw new Error('usePosts must be used inside of an PostsContextProvider')
  return context
}