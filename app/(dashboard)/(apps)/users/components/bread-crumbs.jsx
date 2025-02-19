"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
const TaskBreadCrumbs = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>App</BreadcrumbItem>
      <BreadcrumbItem> Section</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default TaskBreadCrumbs;
