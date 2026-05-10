import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [is_sidebar_open, set_is_sidebar_open] = useState(true);

  const toogle_sidebar = () => {
    set_is_sidebar_open((pre) => !pre);
  };

  const open_sidebar = () => set_is_sidebar_open(true);
  const close_sidebar = () => set_is_sidebar_open(false);

  return (
    <SidebarContext.Provider
      value={{ is_sidebar_open, toogle_sidebar, open_sidebar, close_sidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

//export context

export const use_sidebar = () => useContext(SidebarContext);
