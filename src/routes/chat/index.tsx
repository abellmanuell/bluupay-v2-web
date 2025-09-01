import { createFileRoute } from "@tanstack/react-router"
// Local Imports
import { Page } from "@/components/shared/Page";
import { ChatProvider } from "../../components/chat/ChatProvider";
import { Sidebar } from "../../components/chat/Sidebar";
import { ConversationPanel } from "../../components/chat/ConversationPanel";
import { ProfileInfo } from "../../components/chat/ProfileInfo";
import { SplashScreen } from "@/components/template/SplashScreen";
import { sessionQueryOptions } from "@/lib/auth-client";

// ----------------------------------------------------------------------
export const Route = createFileRoute('/chat/')({
  beforeLoad: async ({ context, location }) => {
    const session = await context.queryClient.ensureQueryData(sessionQueryOptions)
    /*  if (!session) {
       throw redirect({ to: '/login', search: { redirect: location.href } })
     } */
  },
  component: Chat,
  pendingComponent: () => <SplashScreen />
})


export default function Chat() {
  return (
    <Page title="Chat">
      <ChatProvider>
        <Sidebar />
        <ConversationPanel />
        <ProfileInfo />
      </ChatProvider>
    </Page>
  );
}
