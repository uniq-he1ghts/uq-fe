"use client";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WithCheckbox from "./components/with-checkbox";
import DefaultPagination from "./components/dafault-pagi";
const BasicTextarea = () => {
  return (
    <Card className="p-8">
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4">
          <div className="text-2xl font-medium text-default-800">
            Callaboration
          </div>
          <span className="text-lg text-gray-900 dark:text-white">
            Shared Notes{" "}
          </span>
          <Textarea placeholder="Type Here.." rows="3" />
          <span className="text-lg text-gray-900 dark:text-white">
            Task List{" "}
          </span>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Add a new task"
              id="input"
              className="h-11"
            />
            <Button type="submit">Add Task</Button>
          </div>
          <Card title="With Checkbox">
            <WithCheckbox />
          </Card>
          <div className="space-y-5">
            <Card title="Default Pagination">
              <DefaultPagination />
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BasicTextarea;
