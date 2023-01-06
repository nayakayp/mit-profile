import React from "react";

const CollapsiblePlaceholder = ({ children }) => {
  return (
    <div className="w-full bg-white transition-all absolute top-[10vh] left-0  px-[80px]">
      {children}
    </div>
  );
};

export default CollapsiblePlaceholder;
