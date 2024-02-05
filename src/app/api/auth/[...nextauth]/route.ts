import { authService } from "@/app/services";
import nextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      name: 'google',
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
      httpOptions: {
        timeout: 10000,
      },
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentials) {
        const {email, password} = credentials as {
          email: string,
          password: string
        }
        if(!credentials?.email || !credentials.password) {
          return null;
        }
        const response = await authService.loginWithUser({
          email,
          password
        })
        if(response?.status !== "OK" && !response?.access_token ) return null

        return {
          id: credentials.email,
          user: {
            id: credentials?.email,
            email: credentials?.email,
            accessToken: response.access_token,
            refreshToken: response.refresh_token
          }
        }
      }
    })
  ],
  callbacks: {
    async jwt({token, user, account}) {
      //handle Login with social
      if(user && (account?.provider === 'google')) {
        try {
          const {name, email} = user;
          // console.log(name, email)
        } catch(err) {
          // console.log(err);
        }
      }
      // console.log('token', token)
      // console.log('user', user)
      return {...token, ...user};
    },

    async session({token, session}) {
      session.user = token.user;
      console.log('session', session)
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt'
  },

  pages: {
    signIn: '/login',
    error: '/not-found',
  }

}

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
