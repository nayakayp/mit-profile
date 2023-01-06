import React from "react";

const Chip = ({ label, className }) => {
  return (
    <div
      className={`${className} text-sm font-medium rounded-[4px] py-[2px] px-[10px]`}
    >
      {label}
    </div>
  );
};

export default Chip;
