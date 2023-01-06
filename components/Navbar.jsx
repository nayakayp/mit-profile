import * as React from "react";
import Link from "next/link";
import CollapsibleLink from "./CollapsibleLink";
import CollapsiblePlaceholder from "./CollapsiblePlaceholder";

import CollapsibleContentProduct from "./CollapsibleContent/ProductContent";
import CollapsibleContentBlog from "./CollapsibleContent/BlogContent";

const Navbar = () => {
  const [activeCollapsible, setActiveCollapsible] = React.useState();

  const handleCollapse = (val) => {
    setActiveCollapsible((prevState) => {
      if (prevState === val) return undefined;

      return val;
    });
  };

  return (
    <nav
      className={`${
        activeCollapsible ? "bg-white text-black" : "bg-transparent text-white"
      }  absolute z-50 w-full transition-all px-[80px] min-h-[10vh] -mx-[80px] flex justify-between items-center`}
    >
      <img
        src={activeCollapsible ? "logo-black.png" : "logo.png"}
        alt="Logo"
        className="w-[218px]"
      />
      <ul className="flex space-x-[40px] font-semibold">
        <li className="hover:text-accent transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-accent transition-all">
          <div onClick={() => handleCollapse("product")}>
            <CollapsibleLink
              title="Product"
              isActive={activeCollapsible === "product"}
            />
          </div>
          {activeCollapsible === "product" && (
            <CollapsiblePlaceholder>
              <CollapsibleContentProduct />
            </CollapsiblePlaceholder>
          )}
        </li>
        <li className="hover:text-accent transition-all">
          <Link href="">Careers</Link>
        </li>
        <li className="hover:text-accent transition-all">
          <Link href="">Company</Link>
        </li>
        <li className="hover:text-accent transition-all">
          <div onClick={() => handleCollapse("blog")}>
            <CollapsibleLink
              title="Blog"
              isActive={activeCollapsible === "blog"}
            />
            {activeCollapsible === "blog" && (
              <CollapsiblePlaceholder>
                <CollapsibleContentBlog />
              </CollapsiblePlaceholder>
            )}
          </div>
        </li>
        <li className="hover:text-accent transition-all">
          <Link href="">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
