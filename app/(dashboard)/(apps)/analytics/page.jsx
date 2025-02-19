"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ReportsSnapshot from "./components/reports-snapshot";
import UserDeviceReport from "./components/user-device-report";
import UserStats from "./components/user-stats-chart";
import { Button } from "@/components/ui/button";
import UsersStat from "./components/users-stat";
import ReportsArea from "./components/reports-area";
import StackedColumn from "./components/users-stat/stacked-column";

import DatePickerWithRange from "@/components/date-picker-with-range";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">
          Analytics Dashboard
        </div>

        <DatePickerWithRange />
      </div>
      {/* reports area */}
      <div className="grid grid-cols-6  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <ReportsSnapshot />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <UsersStat />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReportsArea />
        </div>
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              FBA and FBM sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UserStats />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Income per Quarter 2023
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UserDeviceReport />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:flex-row-reverse">
        <Card className="">
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Market Share per Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <StackedColumn />
          </CardContent>
        </Card>
        <Card className="flex-auto">
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Market Share per Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <StackedColumn />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
