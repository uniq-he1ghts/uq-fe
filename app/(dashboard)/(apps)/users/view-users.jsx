"use client";
import React from "react";
import TaskBreadCrumbs from "./components/bread-crumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UserTable from "./components/user-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateUsers from "./components/create-users";
import EditUsers from "./components/edit-users";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const ViewUsers = ({ contacts, users }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleSheetOpen = () => {
    setOpen(!open);
  };
  const handleEditSheetOpen = () => {
    setOpenEdit(!openEdit);
  };
  const [showSidebar, setShowSidebar] = React.useState(false);
  const isDesktop = useMediaQuery("(max-width: 1280px)");
  return (
    <>
      <div className="flex flex-wrap mb-4">
        <div className="text-xl font-medium text-default-900 flex-1">Users</div>
        <div className="flex-none">
          <TaskBreadCrumbs />
        </div>
      </div>

      <div className="app-height flex gap-4 relative overflow-hidden">
        {isDesktop && showSidebar && (
          <div
            className=" bg-background/60 backdrop-filter
         backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
        {/* <div
          className={cn("transition-all duration-150  flex-none  ", {
            "absolute h-full top-0 md:w-[260px] w-[200px] z-[999]": isDesktop,
            "flex-none min-w-[260px]": !isDesktop,
            "left-0": isDesktop && showSidebar,
            "-left-full": isDesktop && !showSidebar,
          })}
        ></div> */}

        <Card className="flex-1 overflow-x-auto">
          <CardHeader className="sticky top-0 mb-0 bg-card z-50">
            <Button className="w-32" onClick={handleSheetOpen}>
              + Add User
            </Button>
          </CardHeader>
          <UserTable
            className="mb-10"
            data={users}
            openSheet={handleEditSheetOpen}
            handleSidebar={() => setShowSidebar(true)}
          />
        </Card>
      </div>
      <CreateUsers open={open} onClose={handleSheetOpen} />
      <EditUsers open={openEdit} onClose={handleEditSheetOpen} />
    </>
  );
};

export default ViewUsers;
