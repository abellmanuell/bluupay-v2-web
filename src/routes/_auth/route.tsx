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
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}