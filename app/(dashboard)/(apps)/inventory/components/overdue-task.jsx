"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// avatar
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const columns = [
  {
    key: "SKU",
    label: "SKU",
  },
  {
    key: "Current_Stock",
    label: "Current Stock",
  },
  {
    key: "Sales_Velocity",
    label: "Sales Velocity",
  },
  {
    key: "daysOfInventory",
    label: "Days of Inventory",
  },
  {
    key: "reorderPoint",
    label: "Reorder Point",
  },
  {
    key: "eOQ",
    label: "EOQ",
  },
  {
    key: "action",
    label: "action",
  },
];

const users = [
  {
    id: 1,
    name: "SKU12345",
    task: "100",
    deadline: "20/day",
    overdue: "01",
    daysOfInventory: "20",
    reorderPoint: "50",
    EOQ: "300",
  },
  {
    id: 2,
    name: "SKU12345",
    task: "900",
    deadline: "20/day",
    daysOfInventory: "20",
    reorderPoint: "50",
    EOQ: "300",
  },
  {
    id: 3,
    name: "SKU12345",
    task: "100",
    deadline: "20/day",
    daysOfInventory: "20",
    reorderPoint: "50",
    EOQ: "300",
  },
  {
    id: 4,
    name: "SKU12345",
    task: "200",
    deadline: "20/day",
    daysOfInventory: "20",
    reorderPoint: "50",
    EOQ: "300",
  },
  {
    id: 5,
    name: "Mark Dsuza",
    task: "600",
    deadline: "20/day",
    daysOfInventory: "20",
    reorderPoint: "50",
    EOQ: "300",
  },
  {
    id: 6,
    name: "SKU12345",
    task: "500",
    deadline: "20/day",
    daysOfInventory: "20",
    reorderPoint: "50",
    EOQ: "300",
  },
];

const OverdueTask = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Product-level Inventory Management</CardTitle>
        <div className="flex gap-4 md:w-fit md:flex-none ml-8 ">
          <Search className="w-4 h-4 text-default-400 absolute top-1/2  -translate-y-1/2" />
          <Input placeholder="Search inventory" className="h-10" />
          <Button type="button" color="secondary" asChild className="w-20">
            <Link href="#"> View all</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0 overflow-x-auto">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-sm font-semibold text-default-800 last:text-right  h-12"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id} className="hover:bg-default-100">
                <TableCell className="flex items-center gap-2 py-1">
                  <span className="text-sm font-medium text-defualt-600 py-1 whitespace-nowrap">
                    {item.name}
                  </span>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px]">
                  {item.task}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 whitespace-nowrap">
                  {item.deadline}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 last:text-end py-1 whitespace-nowrap">
                  <Badge color="default" variant="soft">
                    {item.daysOfInventory}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 last:text-end py-1 whitespace-nowrap">
                  <Badge color="warning" variant="soft">
                    {item.reorderPoint}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 last:text-end py-1 whitespace-nowrap">
                  <Badge color="info" variant="soft">
                    {item.EOQ}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 last:text-end py-1 whitespace-nowrap">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        size="icon"
                        color="secondary"
                        className=" h-7 rounded-full bg-transparent w-7 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground  "
                      >
                        <Icon
                          icon="heroicons:ellipsis-horizontal"
                          className=" h-6 w-6 "
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" avoidCollisions>
                      <DropdownMenuLabel>Action Center</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Icon
                          icon="heroicons:pencil"
                          className=" h-4 w-4 mr-2 "
                        />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon icon="heroicons:eye" className=" h-4 w-4 mr-2 " />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon
                          icon="heroicons:trash"
                          className=" h-4 w-4 mr-2 "
                        />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OverdueTask;
