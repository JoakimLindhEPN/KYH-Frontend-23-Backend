import { useEffect } from "react"

function IndexPage() {

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('http://localhost:8000/api/todos/protected')
      // console.log(res)
      const data = await res.json()
      console.log({res, data})
    }
    getTodos()
  }, [])

  return (
    <div>IndexPage</div>
  )
}
export default IndexPage