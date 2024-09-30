'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

const Providers = ({ children, session }: Readonly<{ children: React.ReactNode; session: Session | null }>) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
