"use client";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub , FaTwitter , FaLinkedin } from "react-icons/fa";
import { SiCodechef , SiLeetcode } from "react-icons/si";

const Links = () => {
  return (
    <nav className="fixed right-20 top-1/2 transform -translate-y-1/2 z-50 lg:flex flex-col w-[306px] items-center justify-center gap-10 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[3px] hidden ">
      

      <Link
        href="https://github.com/ganeshlonare"
        target="_blank"
        aria-label="View GitHub Profile"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[24px] sm:text-[14px] md:py-1 md:px-4">
          <FaGithub className="text-[30px]"/>
        </h4>
      </Link>
      <Link
        href="https://leetcode.com/u/ganeshlonare/"
        target="_blank"
        aria-label="View LeetCode Profile"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          <SiLeetcode className="text-[30px]"/>
        </h4>
      </Link>

      <Link
        href="https://www.linkedin.com/in/ganeshlonare"
        target="_blank"
        aria-label="View LinkedIN Profile"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          <FaLinkedin className="text-[30px]"/>
        </h4>
      </Link>

      <Link
        href="https://www.codechef.com/users/ganeshlonare"
        target="_blank"
        aria-label="View X Profile"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          <SiCodechef className="text-[30px]"/>
        </h4>
      </Link>
    </nav>
  );
};

export default Links;
