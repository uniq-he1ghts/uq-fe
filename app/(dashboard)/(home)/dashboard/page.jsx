"use client";

import GradiantLineChart from "./components/gradiant-linechart";
import TopBrowser from "./components/top-browser";
import TopCustomers from "./components/top-customers";
import VisitorsReportChart from "./components/visitors-chart";
import CustomerStatistics from "./components/customer-statistics";
import Transaction from "./components/transaction";
import Orders from "./components/orders";
import TopCountries from "./components/top-countries";
import Products from "./components/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardSelect from "@/components/dasboard-select";
import EcommerceStats from "./components/ecommerce-stats";
import TopSell from "./components/top-sell";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardDropdown from "@/components/dashboard-dropdown";
const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="text-2xl font-medium text-default-800">Dashboard</div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <EcommerceStats />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardHeader className="border-none pb-0 mb-0">
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="flex-1 whitespace-nowrap">
                  Total Orders Stats
                </CardTitle>
                <div className="flex-none">
                  <DashboardSelect />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <GradiantLineChart />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <TopBrowser />
        </div>
      </div>
      <div className="grid grid-cols-12  gap-6">
        <div className="col-span-12 lg:col-span-4 2xl:col-span-5">
          <Card>
            <CardHeader className="mb-0">
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="flex-1 whitespace-nowrap">
                  Top Orders
                </CardTitle>
                <div className="flex-none">
                  <DashboardSelect />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0 pt-0 h-[520px] pb-2">
              <ScrollArea className="h-full">
                <TopSell />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-8 2xl:col-span-7">
          <TopCustomers />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardHeader className=" gap-4 border-none pb-0 mb-0">
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="flex-1 whitespace-nowrap">
                  Sale Performance Matrics
                </CardTitle>
                <div className="flex-none">
                  <DashboardSelect />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pt-0">
              <VisitorsReportChart />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CustomerStatistics />
        </div>
      </div>
      <Card>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <Orders />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ScrollArea className="h-full">
              <Products />
            </ScrollArea>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
