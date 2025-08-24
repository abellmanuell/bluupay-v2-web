import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { sessionQueryOptions } from '@/lib/auth-client'

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context, location }) => {
    const session = await context.queryClient.ensureQueryData(sessionQueryOptions)
    if (session) {
      throw redirect({ to: '/', search: { redirect: location.href } })
    }
  },
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">
      <div className="hidden bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-10 text-white lg:block">
        <div className="mx-auto max-w-md">
          <h1 className="mt-10 text-4xl font-bold">Welcome back</h1>
          <p className="mt-4 text-white/90">
            Use your account to sign in or create a new one. Password reset is
            available if you need it.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  )
}