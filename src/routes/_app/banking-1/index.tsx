// Local Imports
import { Page } from "@/components/shared/Page";
import { Statistics } from "../../../components/banking-1/Statistics";
import { Transactions } from "../../../components/banking-1/Transactions";
import { History } from "../../../components/banking-1/History";
import { SendFlow } from "../../../components/banking-1/SendFlow";
import { createFileRoute } from "@tanstack/react-router";

// ----------------------------------------------------------------------
export const Route = createFileRoute('/_app/banking-1/')({
  component: Banking1,
})

export default function Banking1() {
  return (
    <Page title="Banking Dashboard V1">
      <div className="transition-content mt-5 grid w-full grid-cols-12 gap-4 overflow-hidden px-(--margin-x) pb-8 sm:gap-5 lg:mt-6 lg:gap-6">
        <SendFlow />
        <div className="col-span-12 lg:col-span-8">
          <Statistics />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6">
            <Transactions />
            <History />
          </div>
        </div>
      </div>
    </Page>
  );
}
