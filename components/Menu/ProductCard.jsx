import React from "react";
import Link from "next/link";

import Chip from "../Chip";

const ProductCard = ({ title, subtitle, imgUrl, status }) => {
  return (
    <Link
      href=""
      className="py-3 transition-all duration-200 hover:bg-[#F9FAFB] px-4 max-w-[292px] flex space-x-4 items-start"
    >
      <img src={imgUrl} alt="" className="h-6 w-4" />
      <div className="">
        <div className="flex items-center space-x-2">
          <p className="text-black font-semibold">{title}</p>
          {status && (
            <Chip label={status} className="bg-[#F9FAFB] text-[#475467]" />
          )}
        </div>
        <p className="text-gray font-normal text-sm mt-1">{subtitle}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
