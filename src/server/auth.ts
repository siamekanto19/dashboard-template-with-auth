import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user']
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/signup',
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!!,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
        name: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }
        // existing user
        const oldUser = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (oldUser && oldUser.password) {
          const doesPasswordMatch = bcrypt.compareSync(credentials.password, oldUser.password)
          if (doesPasswordMatch) {
            return { ...oldUser, password: undefined }
          }

          throw new Error('Either Email or Password is incorrect')
        }

        // New User
        const user = await db.user.create({
          data: {
            email: credentials.email,
            password: bcrypt.hashSync(credentials.password),
            name: credentials.name,
          },
        })

        return { ...user, password: undefined }
      },
    }),
  ],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
