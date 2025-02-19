"use client";
import Card from "@/components/ui/card-snippet";
import BasicTable from "./basic-table";

const SimpleTablePage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Table">
        <BasicTable />
      </Card>
    </div>
  );
};

export default SimpleTablePage;
