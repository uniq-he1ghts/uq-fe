"use client";

import WelcomeBlock from "./components/welcome-block";
import ReportsCard from "./components/reports";
import ReportChart from "./components/report-chart";

import OverdueTask from "./components/overdue-task";
import UpcomingDeadline from "./components/upcoming-deadlines";
import RecentActivity from "./components/recent-activity";
import TopContributer from "./components/top-contributer";
import ActiveTask from "./components/active-task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePickerWithRange from "@/components/date-picker-with-range";
import { Docs } from "@/components/svg";

const ProjectPages = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800">
          Inventory Dashboard
        </div>
        <DatePickerWithRange />
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="col-span-8 md:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
            <ReportsCard />
            <div className="col-span-2 p-4 space-y-2 bg-white shadow-sm shadow-gray-200 border rounded-md">
              {" "}
              <Docs className="w-8 h-8 text-info justify-center mb-4" />
              <span className="font-bold text-lg   ">
                Restock Alerts and Recommendations SKU12345:
              </span>
              <p>
                {" "}
                Recommended toorder 100 units (Lead time: 5 days) Reorder
                <span className="font-semibold text-green-400 text-base ml-2">
                  SKU67890:
                </span>
              </p>
              <p>Recommended to order 50 units (Lead time: 3 days)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-6">
        <div className="col-span-10 2xl:col-span-8 grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <ReportChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2 lg:col-span-6 xl:col-span-5">
          <OverdueTask />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <Card>
            <CardHeader className="border-none">
              <CardTitle>Inventory Turnover Rate</CardTitle>
            </CardHeader>
            <CardContent className="px-3 mt-1">
              <ActiveTask />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <TopContributer />
        </div>
      </div>
    </div>
  );
};

export default ProjectPages;
