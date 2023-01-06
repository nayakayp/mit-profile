import * as React from "react";

import { FiChevronDown } from "react-icons/fi";

const CollapsibleLink = ({ title, isActive }) => {
  return (
    <>
      <div className="flex items-center space-x-[8px] cursor-pointer">
        <p className={isActive && "text-accent"}>{title}</p>
        <FiChevronDown
          className={`font-semibold text-xl transition-all ${
            isActive ? "rotate-180 text-accent" : "rotate-0"
          }`}
        />
      </div>
    </>
  );
};

export default CollapsibleLink;
