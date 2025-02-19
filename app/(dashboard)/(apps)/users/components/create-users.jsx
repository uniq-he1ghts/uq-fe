"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { CalendarDays, X } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "react-select";

const users = [
  { value: "", label: "Owner" },
  { value: "", label: "E-commerce Manager" },
  { value: "", label: "Amazon Manager" },
  { value: "", label: "Marketing Manager" },
];
const statuses = [
  { value: "", label: "pending" },
  { value: "", label: "Active" },
];
const prioriy = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];
const marketplace = [
  { value: "", label: "Europe" },
  { value: "", label: "North America" },
  { value: "", label: "Austrelia" },
  { value: "", label: "India" },
  { value: "", label: "UAE" },
  { value: "", label: "Other" },
];

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const CreateUser = ({ open, onClose }) => {
  const [openDate, setOPenDate] = useState(true);
  const toggleOpenDate = () => setOPenDate(!openDate);
  const [date, setDate] = useState(new Date());
  const formatDate = new Date(date);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    formatDate
  );

  useEffect(() => {
    toggleOpenDate();
  }, [date]);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="pt-5 overflow-x-auto">
        <SheetHeader className="flex-row items-center justify-between mb-4">
          <span className="text-lg font-semibold text-default-900">
            Basic Information
          </span>
        </SheetHeader>
        <form className=" h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">
                Full Name
              </Label>
              <Input id="boardTitle" placeholder="Full Name" />
            </div>
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">
                Work Email
              </Label>
              <Input id="boardTitle" placeholder="Work Email" />
            </div>
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">
                Phone Number
              </Label>
              <Input id="boardTitle" placeholder="Phone Number" />
            </div>
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">
                Company Name
              </Label>
              <Input id="boardTitle" placeholder="Company Name" />
            </div>
            <div>
              <Label
                htmlFor="assignedMember"
                className="mb-1.5 text-default-600"
              >
                Role
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={users}
                styles={styles}
                isMulti
              />
            </div>
            <div>
              <Label htmlFor="status" className="mb-1.5 text-default-600">
                Status
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={statuses}
                styles={styles}
              />
            </div>
            <div>
              <Label htmlFor="priority" className="mb-1.5 text-default-600">
                Usage
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={prioriy}
                styles={styles}
              />
            </div>
            <SheetHeader className="flex-row items-center justify-between mb-4">
              <span className="text-lg font-semibold text-default-900">
                Amazon Store Details
              </span>
            </SheetHeader>
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">
                Amazon Brand/Store Name
              </Label>
              <Input id="boardTitle" placeholder="Amazon Brand/Store Name" />
            </div>
            <div>
              <Label htmlFor="priority" className="mb-1.5 text-default-600">
                Marketplace
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={marketplace}
                styles={styles}
              />
            </div>
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">
                Link ASIN
              </Label>
              <Input id="boardTitle" placeholder="Link ASIN" />
            </div>
            <SheetHeader className="flex-row items-center justify-between mb-4">
              <span className="text-lg font-semibold text-default-900">
                Pain Points
              </span>
            </SheetHeader>

            <div>
              <Label htmlFor="priority" className="mb-1.5 text-default-600">
                Date
              </Label>

              <div className="relative">
                <Input
                  placeholder="Select Date"
                  onFocus={toggleOpenDate}
                  value={formattedDate}
                />

                <CalendarDays className="w-4 h-4 text-default-400 absolute top-1/2 right-2 -translate-y-1/2" />
                <div
                  className={cn(
                    "absolute bottom-10 left-0 w-[300px] bg-background z-20 hidden",
                    {
                      block: openDate,
                    }
                  )}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border border-default-200 rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <SheetFooter className="pb-10">
            <SheetClose>
              <Button
                type="button"
                className="mt-4 bg-red-600 hover:bg-white hover:text-red-500 hover:ring-red-500 hover:ring-1 "
              >
                Cancel
              </Button>
            </SheetClose>
            <Button className="mt-4">Create new user</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateUser;
