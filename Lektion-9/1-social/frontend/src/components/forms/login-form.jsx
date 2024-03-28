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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useAuth } from "@/contexts/authContext"
import { useState } from "react"
import { Link } from "react-router-dom"


const formSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string().min(1, { message: 'Password is required' })
})

export const LoginForm = () => {

  const { login } = useAuth()
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
    const res = await login(values)
    if(res.error) {
      setFormError(res.error)
    }
  }

  return (
    <>
    <Tabs defaultValue="email">
      <TabsList className="grid w-full grid-cols-2 mb-2">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="username">Username</TabsTrigger>
      </TabsList>
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <p>Login to you account</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <TabsContent value="username">
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
              </TabsContent>
              <TabsContent value="email">
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
              </TabsContent>
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

              { formError && <p className="text-destructive text-sm font-semibold">{ formError }</p>}
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          <div className="flex gap-1 mt-4">
            <p>Don't have an account yet? </p>
            <Link to="/auth/register" className="underline">Register</Link>
          </div>
        </CardContent>
      </Card>
    </Tabs>
    </>
  )
}