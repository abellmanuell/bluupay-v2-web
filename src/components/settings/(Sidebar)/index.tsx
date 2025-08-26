// Local Imports
import { MainPanel } from "@/app/layouts/MainLayout/Sidebar/MainPanel";
import { baseNavigation } from "@/app/navigation/baseNavigation";
import { SidebarPanel } from "./_SidebarPanel";

// ----------------------------------------------------------------------

export function Sidebar() {
  return (
    <>
      <MainPanel nav={baseNavigation} activeSegmentPath="/settings"
      />
      <SidebarPanel />
    </>
  );
}
