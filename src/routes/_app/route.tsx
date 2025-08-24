import { SplashScreen } from "@/components/template/SplashScreen";
import { Link, Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { sessionQueryOptions, signOut, useSession } from "@/lib/auth-client";
import { AppLayout } from "./(layouts)/AppLayout";
import MainLayout from "./(layouts)/MainLayout";

export const Route = createFileRoute('/_app')({
  beforeLoad: async ({ context, location }) => {
    const session = await context.queryClient.ensureQueryData(sessionQueryOptions)
    if (!session) {
      throw redirect({ to: '/login', search: { redirect: location.href } })
    }
  },
  component: DashboardLayout,
  pendingComponent: () => <SplashScreen />
})

function DashboardLayout() {
  const { data: session } = useSession()
  const qc = useQueryClient()

  async function handleLogout() {
    await signOut()
    await qc.invalidateQueries({ queryKey: sessionQueryOptions.queryKey })
    window.location.assign('/login')
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>

  )
}
{/* <div className="min-h-dvh">
      <header className="flex items-center justify-between border-b bg-white px-6 py-3">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-lg font-semibold">
            🛰️ Acme
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link to="/" activeProps={{ className: 'text-indigo-600' }} className="text-neutral-700 hover:text-neutral-900">
              Home
            </Link>
            <Link to="/profile" activeProps={{ className: 'text-indigo-600' }} className="text-neutral-700 hover:text-neutral-900">
              Profile
            </Link>
            <Link to="/demo/tanstack-query" activeProps={{ className: 'text-indigo-600' }} className="text-neutral-700 hover:text-neutral-900">
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
              <span className="hidden text-sm text-neutral-700 md:inline">
                {session.user.name ?? session.user.email}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-xl border bg-white px-3 py-2 text-sm hover:bg-neutral-50"
              >
                Sign out
              </button>
            </>
          ) : null}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div> */}