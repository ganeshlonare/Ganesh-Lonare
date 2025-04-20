import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiHashnode ,SiX } from "react-icons/si";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          height={100}
          width={100}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[65vw]">
          Let’s build something amazing together! Whether you have a project idea or need a skilled developer, I’m always excited to connect.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s connect and explore how I can bring value to your team as a dedicated intern or full-time developer.
        </p>
        <Link 
        href="mailto:ganeshlonareofficial@gmail.com" 
        target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light lg:mb-[-2rem] sm:mb-2">
          Made with ❤️ by Ganesh Lonare
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <Link 
              href="http://github.com/ganeshlonare"
              target="_blank"
              aria-label="View GitHub Profile"
              >
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-4 lg:mb-8"
            >
              
              <FaGithub/>
              
            </div>
            </Link>
            <Link 
              href="https://hashnode.com/@ganeshlonare311"
              target="_blank"
              aria-label="View Hashnode Profile"
              >
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-4 lg:mb-8"
            >
              <SiHashnode/>
            </div>
            </Link>
            <Link 
              href="https://x.com/ganeshlonare311"
              target="_blank"
              aria-label="View X Profile"
              >
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-4 lg:mb-8"
            >
              <SiX/>
            </div>
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
