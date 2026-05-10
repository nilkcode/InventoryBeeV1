import React, { useState } from "react";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../context/SidebarContext";

const LayoutContent = () => {
  //   const [isSidebarToogle, setSidebarToogle] = useState(true);

  //   const handleToogleSidebar = () => {
  //     setSidebarToogle((pre) => !pre);
  //   };

  return (
    <>
      <div className="flex">
        <AppSidebar />
        <div className="grid grid-rows-[auto_1fr_auto]  h-screen grow">
          <AppHeader />
          <main className="bg-white p-4 flex flex-col h-full overflow-auto">
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
