'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const SignupForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  })

  const handleSignIn = async (values: z.infer<typeof signupSchema>) => {
    setLoading(true)
    const resp = await signIn('credentials', { redirect: false, email: values.email, password: values.password })
    if (resp?.error) {
      toast.error(resp.error)
      setLoading(false)
      return
    }
    setLoading(false)
    window.location.href = '/dashboard'
  }

  return (
    <div className='pt-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((values) => handleSignIn(values))} className='w-full flex flex-col gap-5'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='brian@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button loading={loading} absoluteLoaderPosition className='bg-[#719331] hover:bg-lime-600 mt-4 h-11 rounded-[12px]'>
            Continue with email
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SignupForm
