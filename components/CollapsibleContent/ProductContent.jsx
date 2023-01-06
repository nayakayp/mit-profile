import React from "react";

import ProductCard from "../Menu/ProductCard";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";

const ProductContent = () => {
  return (
    <div className="flex justify-between">
      <div className="pt-8">
        <p className="text-accent text-sm font-medium">OUR PRODUCT</p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <ProductCard
            title="INEOM"
            subtitle="Integrated asset management solutions"
            imgUrl="Product - INEOM.svg"
          />
          <ProductCard
            title="CHRONO"
            subtitle="Procces EMS configuration and performance export file"
            imgUrl="Product - CHRONO.svg"
          />
          <ProductCard
            title="ACTO"
            subtitle="Consolidated ticketing system for all activities organizations"
            imgUrl="Product - ACTO.svg"
          />
          <ProductCard
            title="ENGGANO"
            subtitle="Low code and integrated software development solutions"
            imgUrl="Product - ENGGANO.svg"
            status="Coming Soon"
          />
          <ProductCard
            title="VIXMO"
            subtitle="AI and automation platform focused in autonomous vehicle technology"
            imgUrl="Product - VIXMO.svg"
          />
          <ProductCard
            title="OPTIMO"
            subtitle="Enhancing customer experiences by processing layer-3 radio resource control data"
            imgUrl="Product - OPTIMO.svg"
            status="Coming Soon"
          />
        </div>
      </div>
      <div className="bg-[#F9FAFB] pt-8 pb-10 pl-5 -mr-[80px] pr-[80px]">
        <div className="p-3 max-w-[280px]">
          <img src="Product Placeholder.png" alt="" className="" />
          <p className="font-semibold text-black mb-1 mt-6">
            We've just released an update!
          </p>
          <p className="text-gray text-sm font-normal">
            Check out the all new dashboard view. Pages now load faster.{" "}
          </p>
          <Link
            href=""
            className="text-accent group flex space-x-2 mt-3 text-sm font-semibold"
          >
            <div className="transition-all duration-200 group-hover:mr-2">
              Find out more
            </div>
            <FiArrowRight className="text-xl font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
