// import ProjectGrid from "./ProjectGrid";

// const Work = () => {
//   return (
//     <section
//       className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
//       id="work"
//     >
//       <h2 className="mb-10 text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-0 lg:text-[72px] border-b p-6">
//         Featured Work
//       </h2>

//       <ProjectGrid />
//     </section>
//   );
// };

// export default Work;

import paySphere from '../../public/projects/payspere.png'
import estate from '../../public/projects/estate.png'
import lms from '../../public/projects/lms.png'
import blog from '../../public/projects/blog.png'
import mystery from '../../public/projects/mystery.png'
import Image from 'next/image';
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { FaGithub, FaLink } from 'react-icons/fa';
import Link from 'next/link';


const projects = [
  {
    id: 1,
    title: "Payment Application",
    subtitle: "(Scalable Payment Platform)",
    description:
      "Architected and developed a scalable payment application featuring three robust backend services and two dynamic frontends. Optimized development workflow with Turborepo and implemented PostgreSQL and Prisma for efficient data management.",
    image: paySphere, // Replace with the actual image import or path
    link: "https://github.com/ganeshlonare/Payment-app", // Add the project link if available
    skills: [
      "#next.js",
      "#express.js",
      "#postgresql",
      "#prisma",
      "#turborepo",
      "#kubernetes",
      "#docker",
      "#typescript",
      "#react.js",
    ],
    accentColor: "#fff",
  },
  {
    id: 2,
    title: "Mystery Message Web Application",
    subtitle: "(Anonymous Messaging Platform)",
    description:
      "Developed an anonymous messaging platform with features like OTP verification, AI-powered message suggestions, and secure email verification using Resend Mail. Leveraged OpenAI API for intelligent suggestions and ensured data integrity with Zod schema validation.",
    image: mystery, // Replace with the actual image import or path
    link: "https://github.com/ganeshlonare/Mystry-messages-Web", // Add the project link if available
    skills: [
      "#next.js",
      "#react.js",
      "#mongodb",
      "#nextauth.js",
      "#openai-api",
      "#resend-mail",
      "#zod",
      "#javascript",
    ],
    accentColor: "#fff",
  },
  {
    id: 3,
    title: "Learning Management System (LMS)",
    subtitle: "(Comprehensive LMS Platform)",
    description:
      "Developed a comprehensive LMS platform with user registration, course management, and role-based access control. Integrated Razorpay for a subscription-based payment model and enabled seamless file uploads with Multer and Cloudinary.",
    image: lms, // Replace with the actual image import or path
    link: "https://github.com/ganeshlonare/LMS/tree/main/server", // Add the project link if available
    skills: [
      "#node.js",
      "#express.js",
      "#mongodb",
      "#jwt",
      "#razorpay",
      "#multer",
      "#cloudinary",
      "#css",
      "#html",
    ],
    accentColor: "#fff",
  },
  {
    id: 4,
    title: "Blogging Website",
    subtitle: "(Practice Project)",
    description:
      "Explore engaging blogs on our MERN Stack Blog Website Project. Enjoy easy registration, writing and reading posts, commenting, and organized categories for a user-friendly experience.",
    image: blog, // Replace with the actual image import or path
    link: "https://github.com/ganeshlonare/MERN-Blog-Website", // Add the project link if available
    skills: [
      "#react.js",
      "#node.js",
      "#express.js",
      "#mongodb",
      "#javascript",
      "#css",
      "#html",
    ],
    accentColor: "#fff",
  },
  {
    id: 5,
    title: "Real Estate Website",
    subtitle: "(Practice Project)",
    description:
      "Find your ideal home on our MERN Stack Real Estate Website. Explore listings, create listings and enjoy a seamless user experience.",
    image: estate, // Replace with the actual image import or path
    link: "https://github.com/ganeshlonare/MERN-Esate-project", // Add the project link if available
    skills: [
      "#react.js",
      "#node.js",
      "#express.js",
      "#mongodb",
      "#javascript",
      "#css",
      "#html",
    ],
    accentColor: "#fff",
  },
];


const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-10 lg:px-24"
      id="work"
    >
      <section className="bg-[#0E1016] text-[#e4ded7] max-w-screen mx-auto px-4 relative pb-8 sm:pb-16">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "FEATURED WORK"
          }
          className={
            "mb-10 pb-2 text-left text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:mb-0 md:text-[60px] lg:text-[60px]  border-b-[2px]"
          }
          wordSpace={"mr-[22px]"}
          charSpace={"mr-[0.000em]"}
        />
        </div>

        <div className="flex flex-col gap-12 sm:gap-[150px] mt-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-[80px] relative ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Vertical line */}
              <div
                className="absolute -top-20 -bottom-20 w-[2px] bg-gray-300"
                style={{
                  left: "calc(50% - 1px)",
                }}
              ></div>

              {/* Diagonal Line */}
              <div
                className={`h-[2px] absolute ${
                  index % 2 === 0
                    ? "left-1/4 right-1/2"
                    : "left-1/2 right-1/4"
                }`}
                style={{
                  backgroundColor: project.accentColor,
                  top: "50%",
                }}
              ></div>

              {/* Circular Dot */}
              <div
                className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hidden sm:block"
                style={{
                  borderColor: project.accentColor,
                }}
              ></div>

              {/* Project Image */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`order-1 flex w-full justify-center sm:justify-${
                  index % 2 === 0 ? "start" : "end"
                }`}
              >
                <div className="flex flex-col items-center group sm:hover:scale-105 ease-in-out duration-200">
                  <Image
                    className="max-w-[400px] w-full mr-auto z-10 drop-shadow-[0_0px_9px_rgba(255,255,255,0.6)]"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </Link>

              {/* Project Details */}
              <div className="order-2 w-full">
                {/* <h3
                  className="font-bold text-2xl md:text-2xl"
                  style={{
                    color: project.accentColor,
                  }}
                >
                  {project.title}
                </h3> */}
                <AnimatedTitle
                          text={project.title}
                          className={
                            "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
                          }
                          wordSpace={"mr-[12px]"}
                          charSpace={"mr-[0.000em]"}
                        />
                <span
                  className="text-base md:text-lg"
                  style={{
                    color: project.accentColor,
                  }}
                >
                  {project.subtitle}
                </span>
                {/* <p className="text-justify text-sm md:text-lg mt-4 mb-4 font-medium leading-relaxed tracking-wide text-[#e4ded7]">
                  {project.description}
                </p> */}
                <AnimatedBody
                className='mt-2'
                text={project.description}
                 />
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="text-3xl">
                  <Link href={project.link} target='blank' rel="noopener noreferrer">
                    <button className='m-6'>
                      <FaGithub />
                    </button>
                    <button>
                      <FaLink />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Work;
