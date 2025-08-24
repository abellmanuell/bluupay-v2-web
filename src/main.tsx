import { ErrorComponent, RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import "./i18n/config"

import "simplebar-react/dist/simplebar.min.css"
import './styles/index.css'


import { AuthQueryProvider } from "@daveyplate/better-auth-tanstack"
import { BreakpointProvider } from './app/contexts/breakpoint/Provider.tsx'
import { LocaleProvider } from './app/contexts/locale/Provider.tsx'
import { SidebarProvider } from './app/contexts/sidebar/Provider.tsx'
import { ThemeProvider } from './app/contexts/theme/Provider.tsx'
import { SplashScreen } from './components/template/SplashScreen.tsx'
import reportWebVitals from './reportWebVitals.ts'

// Create a new router instance

const TanStackQueryProviderContext = TanStackQueryProvider.getContext()
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    ...TanStackQueryProviderContext,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <SplashScreen />,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
        <AuthQueryProvider>
          <ThemeProvider>
            <LocaleProvider>
              <BreakpointProvider>
                <SidebarProvider>
                  <RouterProvider router={router} />
                </SidebarProvider>
              </BreakpointProvider>
            </LocaleProvider>
          </ThemeProvider>
        </AuthQueryProvider>
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
