"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#00041a] text-[#e4ded7] gap-5">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">You lost your way!</p>
      
      <div>
        <Link href="/" className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
