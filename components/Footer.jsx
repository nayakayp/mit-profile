import React from "react";

import Chip from "./Chip";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000000] -mx-[80px] px-[80px] pt-16 pb-12">
      <div className=" flex items-start justify-between">
        <img src="logo.png" alt="Logo" className="w-[218px]" />
        <div className="grid grid-cols-4">
          <div className="w-[208px]">
            <p className="text-sm font-semibold text-[#636266] mb-4">Telco</p>
            <ul className="flex flex-col space-y-4">
              <Link
                href=""
                className="group flex items-center space-x-2 justify-start"
              >
                <img src="Product - INEOM.svg" alt="" className="w-5 h-5" />
                <p className="group-hover:text-accent transition-all font-medium text-[#C7C6CC]">
                  INEOM
                </p>
              </Link>
              <Link
                href=""
                className="group flex items-center space-x-2 justify-start"
              >
                <img src="Product - CHRONO.svg" alt="" className="w-5 h-5" />
                <p className="group-hover:text-accent transition-all font-medium text-[#C7C6CC]">
                  CHRONO
                </p>
              </Link>
              <Link
                href=""
                className="group flex items-center space-x-2 justify-start"
              >
                <img src="Product - ACTO.svg" alt="" className="w-5 h-5" />
                <p className="group-hover:text-accent transition-all font-medium text-[#C7C6CC]">
                  ACTO
                </p>
              </Link>
              <Link
                href=""
                className="group flex items-center space-x-2 justify-start"
              >
                <img src="Product - OPTIMO.svg" alt="" className="w-5 h-5" />
                <p className="group-hover:text-accent transition-all font-medium text-[#C7C6CC]">
                  OPTIMO
                </p>
              </Link>
            </ul>
          </div>
          <div className="w-[208px]">
            <p className="text-sm font-semibold text-[#636266] mb-4">
              Artificial Intelligence
            </p>
            <ul className="flex flex-col space-y-4">
              <Link href="" className="flex items-center space-x-2 group">
                <img src="Product - ENGGANO.svg" alt="" className="w-5 h-5" />
                <p className="font-medium transition-all group-hover:text-accent text-[#C7C6CC]">
                  ENGGANO
                </p>
              </Link>
              <Link href="" className="flex items-center space-x-2 group">
                <img src="Product - VIXMO.svg" alt="" className="w-5 h-5" />
                <p className="font-medium transition-all group-hover:text-accent text-[#C7C6CC]">
                  VIXMO
                </p>
              </Link>
            </ul>
          </div>
          <div className="w-[208px]">
            <p className="text-sm font-semibold text-[#636266] mb-4">Company</p>
            <ul className="flex flex-col space-y-4">
              <Link
                href=""
                className="font-medium text-[#C7C6CC] transition-all hover:text-accent"
              >
                About
              </Link>
              <Link
                href=""
                className="font-medium text-[#C7C6CC] transition-all hover:text-accent"
              >
                Team Proposition
              </Link>
              <Link href="" className="font-medium flex space-x-2 group">
                <p className="text-[#C7C6CC] transition-all hover:text-accent">
                  Careers
                </p>
                <div className="bg-[#1570EF] transition-all group-hover:ml-4 flex items-center text-[#EFF8FF] text-xs font-medium rounded-[4px] py-[2px] px-[8px]">
                  We're hiring
                </div>
              </Link>
              <Link
                href=""
                className="font-medium text-[#C7C6CC] transition-all hover:text-accent"
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="w-[208px]">
            <p className="text-sm font-semibold text-[#636266] mb-4">
              Resources
            </p>
            <ul className="flex flex-col space-y-4">
              <Link
                href=""
                className="font-medium text-[#C7C6CC] transition-all hover:text-accent"
              >
                Blog
              </Link>
              <Link
                href=""
                className="font-medium text-[#C7C6CC] transition-all hover:text-accent"
              >
                Press Center
              </Link>
              <Link
                href=""
                className="font-medium text-[#C7C6CC] transition-all hover:text-accent"
              >
                Media Assets
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#47484A] pt-8 w-full mt-16 flex items-center justify-between">
        <p className="text-[#636266]">
          © 2013 - 2023 Mitra Informatika. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transition-all duration-200 hover:text-accent fill-current text-[#636266]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#a)">
                <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0ZM7.12 20.452H3.558V8.995H7.12v11.457ZM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transition-all duration-200 hover:text-accent fill-current text-[#636266]"
              viewBox="0 0 24 24"
            >
              <g clip-path="url(#a)">
                <path d="M12 2.16c3.206 0 3.586.015 4.847.071 1.172.052 1.805.249 2.226.413a3.71 3.71 0 0 1 1.379.895c.421.422.68.82.895 1.378.164.422.36 1.06.412 2.227.057 1.265.07 1.645.07 4.847 0 3.206-.013 3.586-.07 4.846-.051 1.172-.248 1.805-.412 2.227a3.71 3.71 0 0 1-.895 1.378 3.69 3.69 0 0 1-1.379.895c-.421.165-1.059.361-2.226.413-1.266.056-1.645.07-4.847.07-3.206 0-3.586-.014-4.847-.07-1.172-.052-1.805-.248-2.226-.413a3.71 3.71 0 0 1-1.379-.895 3.691 3.691 0 0 1-.895-1.378c-.164-.422-.36-1.06-.412-2.227-.057-1.265-.07-1.645-.07-4.846 0-3.207.013-3.586.07-4.847.051-1.172.248-1.805.412-2.227.216-.558.478-.96.895-1.378.422-.422.82-.68 1.379-.895.421-.164 1.059-.361 2.226-.413 1.261-.056 1.64-.07 4.847-.07ZM12 0C8.742 0 8.334.014 7.055.07 5.78.127 4.903.333 4.144.628a5.857 5.857 0 0 0-2.128 1.388A5.88 5.88 0 0 0 .628 4.139C.333 4.903.127 5.775.07 7.05.014 8.334 0 8.742 0 12s.014 3.666.07 4.945c.057 1.275.263 2.152.558 2.911.31.792.717 1.463 1.388 2.128a5.866 5.866 0 0 0 2.123 1.383c.764.296 1.636.502 2.911.558 1.28.056 1.688.07 4.945.07 3.258 0 3.666-.014 4.946-.07 1.275-.056 2.151-.262 2.91-.558a5.866 5.866 0 0 0 2.124-1.383 5.866 5.866 0 0 0 1.383-2.123c.295-.764.501-1.636.558-2.911.056-1.28.07-1.688.07-4.945 0-3.258-.014-3.666-.07-4.946-.057-1.275-.263-2.151-.558-2.91a5.62 5.62 0 0 0-1.374-2.133A5.866 5.866 0 0 0 19.861.633C19.097.338 18.225.13 16.95.075 15.666.015 15.258 0 12 0Z" />
                <path d="M12 5.836A6.166 6.166 0 0 0 5.836 12 6.166 6.166 0 0 0 12 18.164 6.166 6.166 0 0 0 18.164 12 6.166 6.166 0 0 0 12 5.836Zm0 10.162A3.999 3.999 0 1 1 12.001 8 3.999 3.999 0 0 1 12 15.998ZM19.847 5.592a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transition-all duration-200 hover:text-accent fill-current text-[#636266]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M7.55 21.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638A10 10 0 0 0 24 4.555c-.898.4-1.85.66-2.826.774a4.95 4.95 0 0 0 2.165-2.723A9.897 9.897 0 0 1 20.213 3.8a4.93 4.93 0 0 0-8.394 4.49A13.985 13.985 0 0 1 1.673 3.15a4.93 4.93 0 0 0 1.523 6.57 4.93 4.93 0 0 1-2.23-.614v.06a4.922 4.922 0 0 0 3.95 4.829 4.895 4.895 0 0 1-2.221.084 4.934 4.934 0 0 0 4.597 3.422A9.875 9.875 0 0 1 0 19.538a13.969 13.969 0 0 0 7.55 2.212Z" />
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transition-all duration-200 hover:text-accent fill-current text-[#636266]"
              viewBox="0 0 24 24"
            >
              <g clip-path="url(#a)">
                <path d="M24 12c0-6.627-5.373-12-12-12S0  5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transition-all duration-200 hover:text-accent fill-current text-[#636266]"
              viewBox="0 0 24 24"
            >
              <g clip-path="url(#a)">
                <path
                  fill-rule="evenodd"
                  d="M12 0C5.372 0 0 5.38 0 12.02a12.02 12.02 0 0 0 8.207 11.405c.6.11.818-.26.818-.58 0-.284-.01-1.041-.015-2.043-3.339.726-4.043-1.612-4.043-1.612-.545-1.39-1.332-1.759-1.332-1.759-1.09-.744.083-.73.083-.73 1.203.085 1.837 1.239 1.837 1.239 1.07 1.836 2.809 1.306 3.492.998.11-.776.42-1.305.763-1.605-2.664-.304-5.466-1.336-5.466-5.941 0-1.312.468-2.386 1.235-3.226-.124-.304-.535-1.526.117-3.18 0 0 1.008-.324 3.3 1.231A11.477 11.477 0 0 1 12 5.813c1.02.005 2.046.138 3.005.404 2.29-1.555 3.296-1.232 3.296-1.232.655 1.655.243 2.877.12 3.181.768.84 1.234 1.914 1.234 3.226 0 4.617-2.807 5.634-5.48 5.931.431.371.814 1.104.814 2.226 0 1.606-.014 2.903-.014 3.297 0 .321.216.696.825.578A12.023 12.023 0 0 0 24 12.02C24 5.38 18.626 0 12 0Z"
                  clip-rule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
