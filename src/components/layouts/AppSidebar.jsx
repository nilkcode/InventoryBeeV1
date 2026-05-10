import React from "react";
import { use_sidebar } from "../../context/SidebarContext";

const AppSidebar = () => {
  const { is_sidebar_open } = use_sidebar();

  return (
    <>
      <div
        className={`min-h-screen bg-white dark:bg-gray-900  border-r border-gray-200 transition-all duration-300 ease-in-out  ${
          is_sidebar_open ? "min-w-64" : "min-w-22.5"
        }`}
      >
     
        
      </div>
    </>
  );
};

export default AppSidebar;
