import '@/app/globals.css'
import { type Metadata } from 'next'
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Dashboard Template',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${roboto.className}`}>
      <body>{children}</body>
    </html>
  )
}
