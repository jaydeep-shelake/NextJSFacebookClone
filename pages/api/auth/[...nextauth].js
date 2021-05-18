import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId:'481973186188591',
      clientSecret:'f84ef50ab59fe1ff9b11447d08106f05',
      NEXTAUTH_URL:'http://localhost:3000'
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})