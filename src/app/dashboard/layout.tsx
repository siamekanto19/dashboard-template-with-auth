import '@/app/globals.css'
import DashboardSidebar from '@/components/core/DashboardSidebar'
import Providers from '@/lib/providers'
import { getServerAuthSession } from '@/server/auth'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Create T3 App',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession()
  if (!session) {
    return redirect('/signup')
  }

  return (
    <html lang='en'>
      <body>
        <Providers session={session}>
          <div className='w-full flex items-start'>
            <DashboardSidebar />
            <div className='w-full p-10'>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
