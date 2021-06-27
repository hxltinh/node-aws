import React, { createContext, useState } from "react";

export const SelectMenuContext = createContext(null);

export const CreateContextProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  return (
    <SelectMenuContext.Provider
      value={{ selectedMenu, setSelectedMenu }}
    >
        {children}
    </SelectMenuContext.Provider>
  );
};
