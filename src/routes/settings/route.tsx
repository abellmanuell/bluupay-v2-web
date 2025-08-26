// Import Dependencies
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

// Local Imports
import { Page } from "@/components/shared/Page";
import { Header } from "@/app/layouts/MainLayout/Header";
import { Sidebar } from "../../components/settings/(Sidebar)";
import { Card } from "@/components/ui";
import { sessionQueryOptions } from "@/lib/auth-client";
import { SplashScreen } from "@/components/template/SplashScreen";

// ----------------------------------------------------------------------
export const Route = createFileRoute('/settings')({
  beforeLoad: async ({ context, location }) => {
    const session = await context.queryClient.ensureQueryData(sessionQueryOptions)
    /*  if (!session) {
       throw redirect({ to: '/login', search: { redirect: location.href } })
     } */
  },
  component: Settings,
  pendingComponent: () => <SplashScreen />
})

export default function Settings() {
  return (
    <Page title="Setting">
      <Header />
      <main className="main-content transition-content grid flex-1 grid-cols-1 place-content-start px-(--margin-x) py-6">
        <Card className="h-full w-full p-4 sm:px-5 2xl:mx-auto 2xl:max-w-5xl">
          <Outlet />
        </Card>
      </main>
      <Sidebar />
    </Page>
  );
}
