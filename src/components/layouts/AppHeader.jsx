import React, { useState } from "react";
import { use_sidebar } from "../../context/SidebarContext";
import { Button } from "../ui/button";

const AppHeader = () => {
  const { toogle_sidebar } = use_sidebar();

  return (
    <>
      <div className="bg-white border-b border-gray-200 flex justify-between align-middle items-center h-12 px-4">
        <Button variant="default">Button</Button>
        <Button variant="secondary" size="icon" aria-label="Submit"></Button>
        <button
          className="bg-info w-25 h-10 bg-[#465fff] text-white rounded-lg "
          onClick={toogle_sidebar}
        >
          Toogle
        </button>
        AppHeader
      </div>
    </>
  );
};

export default AppHeader;
