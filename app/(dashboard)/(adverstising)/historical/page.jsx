import Card from "@/components/ui/card-snippet";
import BasicTimeline from "./components/basic-timeline";

import { basicTimeline } from "./components/source-code";

const TimelinePage = () => {
  return (
    <div className="space-y-5">
      <Card title="Historical Action Impact Analysis">
        <div>
          <BasicTimeline />
        </div>
      </Card>
    </div>
  );
};

export default TimelinePage;
