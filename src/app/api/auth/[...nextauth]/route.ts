import { authService } from "@/app/services";
import nextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
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
      // console.log('token', token)
      // console.log('user', user)
      return {...token, ...user};
    },

    async session({token, session}) {
      // console.log('tokensession', token.user)
      // console.log('session', session)
      session.user = token.user;
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
