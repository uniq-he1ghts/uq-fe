"use client";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

import BasicTable from "./basic-table";
const BasicTimeline = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span className="text-lg">
              {" "}
              Adjusted bid for keyword 'example'{" "}
            </span>{" "}
            <br />
            <span className="text-base text-gray-300"> Oct 1, 2024 </span>
            <BasicTable />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <span className="text-lg"> Changed targeting to 'Broad' </span>{" "}
            <br />
            <span className="text-base text-gray-300">Oct 2, 2024 </span>
            <BasicTable />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <span className="text-lg"> Changed targeting to 'Broad' </span>{" "}
            <br />
            <span className="text-base text-gray-300">Oct 2, 2024 </span>
            <BasicTable />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default BasicTimeline;
