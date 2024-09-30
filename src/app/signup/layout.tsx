import '@/app/globals.css'

import Providers from '@/lib/providers'
import { getServerAuthSession } from '@/server/auth'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dashboard Template',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default async function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession()
  if (session) {
    return redirect('/dashboard')
  }

  return (
    <html lang='en'>
      <body>
        <main>
          <Providers session={session}>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
