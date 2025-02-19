import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TopBrowserChart from "./top-browser-chart";
import DashboardSelect from "@/components/dasboard-select";

const TopBrowser = () => {
  return (
    <Card className="py-2.5">
      <CardHeader className="flex-row items-center justify-between gap-4 border-none">
        <CardTitle>Progress</CardTitle>
      </CardHeader>
      <CardContent className="px-24 pb-2">
        <TopBrowserChart />
      </CardContent>
    </Card>
  );
};

export default TopBrowser;
