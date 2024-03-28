import { useState } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from "../ui/button";
import { usePosts } from "@/contexts/postsContext";

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

export const AddPostForm = ({setIsOpen}) => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [formError, setFormError] = useState('')

  const { addPost } = usePosts()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')

    if(title.trim() === '' || body === '') {
      setFormError('Please enter all the fields')
    }

    const res = addPost({ title, body })

    if(res.error) {
      setFormError(res.error)
      return
    }

    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Label htmlFor="title">Title</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <ReactQuill theme="snow" value={body} toolbarOptions={toolbarOptions} onChange={setBody} />
      </div>
      { formError && <p className="text-destructive text-sm font-semibold">{formError}</p>}
      <Button type="submit" className="w-full">Create</Button>
    </form>
  )
}