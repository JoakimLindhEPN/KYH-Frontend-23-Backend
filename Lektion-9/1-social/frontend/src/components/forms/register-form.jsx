import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAuth } from "@/contexts/authContext"
import { useState } from "react"
import { Link } from "react-router-dom"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: 'Email must be valid'
  }),
  password: z.string().min(8, { message: 'Password must be atleast 8 chars long'}),
  confirmPassword: z.string()
}).refine(values => {
  return values.password === values.confirmPassword
}, {
  message: 'Passwords must match',
  path: ["confirmPassword"]
})

export const RegisterForm = () => {

  const { register } = useAuth()
  const [formError, setFormError] = useState('')

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const onSubmit = async (values) => {
    console.log(values)
    const res = await register(values)
    if(res.error) {
      setFormError(res.error)
    }
  }

  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <p>Please register an account</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@domain.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            { formError && <p className="text-destructive text-sm font-semibold">{ formError }</p>}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <div className="flex gap-1 mt-4">
          <p>Already have an account? </p>
          <Link to="/auth/login" className="underline">Login</Link>
        </div>
      </CardContent>
    </Card>
    </>
  )
}