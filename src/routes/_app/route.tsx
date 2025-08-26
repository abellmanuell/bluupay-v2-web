import { SplashScreen } from "@/components/template/SplashScreen";
import { Link, Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { sessionQueryOptions, signOut, useSession } from "@/lib/auth-client";
import MainLayout from "@/app/layouts/MainLayout";


export const Route = createFileRoute('/_app')({
  beforeLoad: async ({ context, location }) => {
    const session = await context.queryClient.ensureQueryData(sessionQueryOptions)
    /*  if (!session) {
       throw redirect({ to: '/login', search: { redirect: location.href } })
     } */
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
