// Import Dependencies
import {
  WalletIcon,
} from "@heroicons/react/24/outline";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaShapes } from "react-icons/fa6";
import { createFileRoute, Link } from '@tanstack/react-router'
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlineInventory2 } from "react-icons/md";
import { PiProjectorScreenThin } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";




// Local Imports
import { Page } from "@/components/shared/Page";
import { randomId } from "@/utils/randomId";
import { Avatar, AvatarProps, Card } from "@/components/ui";

// ----------------------------------------------------------------------

export const Route = createFileRoute('/_app/dashboards/')({
  component: DashboardsRoute,
})

interface App {
  id: string;
  logo: React.ElementType;
  color: AvatarProps["initialColor"];
  name: string;
  text: string;
  path: string;
}

const apps: App[] = [
  {
    id: randomId(),
    logo: CiMoneyBill,
    color: "info",
    name: "Sales",
    text: "Close deals faster and build lasting customer relationships.",
    path: "/apps/chat",
  },
  {
    id: randomId(),
    logo: MdOutlineInventory2,
    color: "warning",
    name: "Inventory Management",
    text: "Stay in control with real-time stock tracking and smart management.",
    path: "/apps/kanban",
  },
  {
    id: randomId(),
    logo: FaMoneyBillWave,
    color: "secondary",
    name: "Finance",
    text: "Simplify accounting, track expenses, and make smarter financial decisions.",
    path: "/apps/filemanager",
  },
  {
    id: randomId(),
    logo: WalletIcon,
    color: "primary",
    name: "HRM",
    text: "Empower your team with seamless HR and payroll solutions.",
    path: "/apps/todo",
  },
  {
    id: randomId(),
    logo: PiProjectorScreenThin,
    color: "warning",
    name: "Projects",
    text: "Plan, collaborate, and deliver projects on time with ease.",
    path: "/apps/ai-chat",
  },
  {
    id: randomId(),
    logo: FaPeopleRoof,
    color: "error",
    name: "Marketing",
    text: "Reach the right audience and grow your brand effortlessly.",
    path: "/apps/mail",
  },
];

export default function DashboardsRoute() {
  return (
    <Page title="Bluu Pay Dashboard">
      <div className="transition-content px-(--margin-x) pb-8">
        <div className="mt-12 text-center">

          <h3 className="dark:text-dark-100 mt-3 text-5xl font-semibold text-gray-800">
            Welcome to BluuPay
          </h3>
          <p className="mt-0.5 text-xl">
            Making your financial life brighter.
          </p>
        </div>
        <div className="mx-auto mt-20 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {apps.map((app) => (
            <Link to="/" key={app.id} className="contents">
              <Card className="flex flex-col p-4 sm:p-10 hover:shadow" key={app.id}>
                <Avatar size={12} initialColor={app.color}>
                  <app.logo className="size-6" />
                </Avatar>
                <h2 className="dark:text-dark-100 mt-5 line-clamp-1 text-base font-medium tracking-wide text-gray-800">
                  {app.name}
                </h2>
                <p className="mt-1 grow">{app.text}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
}
