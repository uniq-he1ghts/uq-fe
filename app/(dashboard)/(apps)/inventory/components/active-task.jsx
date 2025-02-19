"use client";

import { Progress } from "@/components/ui/progress";
import { AlertCircle } from "lucide-react";

const ActiveTask = ({ rate }) => {
  return (
    <div className="p-2">
      <div className="col-span-12 gap-2 text-xl">Turnover Rate</div>
      <div>
        <div className="mt-5">
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium text-gray-500 capitalize">
              8.5%
            </span>
            <span className="text-lg font-medium text-gray-500">
              {rate?.percentage ? rate?.percentage : 100}%
            </span>
          </div>
          <Progress value={rate?.percentage ? rate?.percentage : 20} />
        </div>

        <div className="text-lg text-red-500 font-bold mt-4">
          <AlertCircle className="mt-4 w-8 h-8 text-white bg-red-500 rounded-full mb-2" />
          Critical Alerts
        </div>
        <p className="text-red-500 mt-1 text-sm">Low Stock on SKU A</p>
        <p className="text-red-500 mt-1 text-sm">Overstock on SKU B</p>
      </div>
    </div>
  );
};

export default ActiveTask;
