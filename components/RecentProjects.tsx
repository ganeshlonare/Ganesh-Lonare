import Image from 'next/image';
import AnimatedTitle from "../app/animations/AnimatedTitle";
import AnimatedBody from "../app/animations/AnimatedBody";
import { FaGithub, FaLink } from 'react-icons/fa';
import Link from 'next/link';
import MagicButton from './MagicButton'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { projects } from '@/data';


const RecentProjects = () => {
  return (
    <section
      className="z-10 flex w-full flex-col items-center justify-center bg-[#000319] bg-cover bg-center py-16 md:py-20 lg:py-10 lg:px-24"
      id="work"
    >
      <section className="bg-[#000319] text-[#e4ded7] max-w-screen mx-auto px-4 relative pb-8 sm:pb-16">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
            <TextGenerateEffect
                words="FEATURED   WORK"
                className="text-center text-[40px] md:text-7xl lg:text-6xl border-[#fff] border-b-[2px] p-0"
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
                className="hidden sm:flex absolute -top-20 -bottom-20 w-[2px] bg-[#fff]"
                style={{
                  left: "calc(50% - 1px)",
                }}
              ></div>

              {/* Diagonal Line */}
              <div
                className={`h-[2px] absolute hidden sm:flex ${
                  index % 2 === 0
                    ? "left-1/4 right-1/2"
                    : "left-1/2 right-1/4"
                }`}
                style={{
                  backgroundColor: "#fff",
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
                <div className="">
                  <Link href={project.link} target='blank' rel="noopener noreferrer" className='mr-4'>
                    <MagicButton
                      title="Git Hub"
                      icon={<FaGithub />}
                      position="right"
                    />
                  </Link>
                  <Link href={project.link} target='blank' rel="noopener noreferrer" className='hidden'>
                    <MagicButton
                      title="Live Demo"
                      icon={<FaLink />}
                      position="right"
                    />
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

export default RecentProjects;
