import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import StoreDevtools from '@/lib/demo-store-devtools'
import TanStackQueryDevtools from '@/integrations/tanstack-query/devtools'
import type { QueryClient } from '@tanstack/react-query'
import { Progress } from '@/components/template/Progress'
import { Loadable } from '@/components/shared/Loadable'
import { lazy } from 'react'

interface MyRouterContext {
  queryClient: QueryClient,
  auth: any
}

const Toaster = Loadable(lazy(() => import("@/components/template/Toaster")));
const Tooltip = Loadable(lazy(() => import("@/components/template/Tooltip")));

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Progress />
      <Outlet />
      <Tooltip />
      <Toaster />
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          StoreDevtools,
          TanStackQueryDevtools,
        ]}
      />
    </>
  ),
  // beforeLoad: async () => {}
})
