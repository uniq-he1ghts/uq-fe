import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopContributer = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center gap-1 mb-1 border-none p-6">
        <CardTitle>FBA Inventory Management</CardTitle>
        <DashboardDropdown />
      </CardHeader>
      <CardContent className="pt-0 ">
        <div className="mt-1 ">
          <span className="font-semibold text-lg text-gray-700 dark:text-white">
            FBA Storage Fee Calculator
          </span>
          <p className="text-gray-500 text-base mt-1 dark:text-gray-400">
            Estimated fees: $2000
          </p>
        </div>
        <div className="mt-1 ">
          <span className="font-semibold text-lg  text-gray-700 dark:text-white">
            Long-term Storage Fee Projections
          </span>
          <p className="text-gray-500 text-base mt-1 dark:text-gray-400">
            Next billing: $300 in fees
          </p>
        </div>

        <hr className="font-bold text-blue-500 dark:text-blue-300 mt-2" />
      </CardContent>
      <CardHeader className="flex-row justify-between items-center gap-1  mb-1 border-none p-6">
        <CardTitle>Supplier and Purchase Order Management</CardTitle>
        <DashboardDropdown />
      </CardHeader>
      <CardContent>
        <div>
          <span className="text-gray-500 text-base mt-1 dark:text-gray-400">
            Next PO for SKU12345:{" "}
            <span className="text-green-800 dark:text-green-300 top-1">
              Delivery on 09/30/2024{" "}
            </span>
          </span>
          <p className="text-gray-500 text-base mt-1 dark:text-gray-400">
            Next PO for SKU67890:{" "}
            <span className="text-red-700 dark:text-red-500"> On hold</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopContributer;
