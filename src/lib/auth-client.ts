import { queryOptions } from '@tanstack/react-query'
import { apiKeyClient, emailOTPClient, organizationClient, passkeyClient, twoFactorClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'

export const {
    signIn,
    sendVerificationEmail,
    signOut,
    signUp,
    getSession,
    useSession,
    accountInfo,
    listAccounts,
    emailOtp: {
        verifyEmail,
        sendVerificationOtp,
        checkVerificationOtp,
        resetPassword
    },
    forgetPassword: {
        emailOtp,
        
    }
} = createAuthClient({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3333',
    basePath: '/auth',
    plugins: [
        apiKeyClient(),
        emailOTPClient(),
        twoFactorClient(),
        organizationClient(),
        passkeyClient()
    ]
})

export type Session = Awaited<ReturnType<typeof getSession>>

export const sessionQueryOptions = queryOptions({
  queryKey: ['session'],
  queryFn: async () => {
    const { data } = await getSession()
    return data ?? null
  },
  staleTime: 60_000, // Avoid re-checking too often
})