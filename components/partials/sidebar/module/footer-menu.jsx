import React from "react";
import { Settings } from "@/components/svg";
import ThemeCustomize from "../../customizer/theme-customizer";
const FooterMenu = () => {
  return (
    <div className="space-y-5 flex flex-col items-center justify-center pb-6">
      <button className="w-8 h-8 mt-2  mx-auto text-default-500 flex items-center justify-center  rounded-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground">
        <ThemeCustomize triger={<Settings className=" h-6 w-6 mt-4" />} />
      </button>
    </div>
  );
};
export default FooterMenu;
