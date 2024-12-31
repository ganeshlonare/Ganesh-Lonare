    // import SongCarousel from "./SongCarousel";
    import "../animations/animate.css";
    import AnimatedBody from "../animations/AnimatedBody";
    import AnimatedTitle from "../animations/AnimatedTitle";
    import Image from "next/image";
    import img1 from '../../public/me.jpeg'
    import { FaReact, FaNodeJs, FaCss3Alt, FaJava, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
    import { SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiTailwindcss, SiHono, SiTurborepo, SiCloudflare ,SiDocker,SiKubernetes , SiGmail, SiMongodb, SiExpress} from "react-icons/si";

    const About = () => {
      return (
        <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[rgb(14,16,22)] bg-cover bg-center pt-16 pb-16 md:pt-20 md:pb-24 lg:pt-20 lg:pb-1"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"ABOUT ME"}
          className={
            "mb-10 text-left text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:mb-16 md:text-[60px] lg:text-[100px]"
          }
          wordSpace={"mr-[22px]"}
          charSpace={"mr-[0.000em]"}
        />
      </div>
      <section className="min-h-screen bg-#0E1016 text-white p-8">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Box 1: Introduction */}
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl col-span-1 flex flex-col justify-between">
              <div>
                {/* <h1 className="text-3xl font-bold mb-4">Software Developer</h1> */}
                <AnimatedTitle
          text={"Software Developer"}
          className={
            "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
          }
          wordSpace={"mr-[12px]"}
          charSpace={"mr-[0.000em]"}
        />
                  <AnimatedBody
                  className="text-[#e4ded7]/80"
              text={
                "3+ years of experience building scalable web applications and innovative backend solutions, specializing in technologies like  Next.js, TypeScript, React.js, Hono , Express.js, Node.js, PostgreSQL, MongoDB and JavaScript. Passionate about creating efficient and user-friendly digital experiences."
              }
            />
            <br />
             <AnimatedBody 
             className="text-[#e4ded7]/80"
             text={
              "Passionate about crafting elegant code and building innovative software solutions. 🌱 With a solid proficiency in Java and a fervent interest in web development."
             }
             />
              </div>
            </div>

            {/* Box 2: Profile Picture */}
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl flex items-center justify-center flex-col gap-2">
              <Image
                src={img1}
                alt="Profile"
                width={100}
                height={100}
                className="w-56 h-56 rounded-full border-4 border-gray-800"
              />
              <p>Ganesh Lonare</p>
            </div>

            {/* Box 3: Background */}
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl col-span-2">
              {/* <h2 className="text-2xl font-semibold mb-4">MY BACKGROUND</h2> */}
              <AnimatedTitle
          text={"MY BACKGROUND"}
          className={
            "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
          }
          wordSpace={"mr-[12px]"}
          charSpace={"mr-[0.000em]"}
        />
              <AnimatedBody
              className="text-[#e4ded7]/80"
              text={
                "Growing up in India, surrounded by the vibrant culture and the rapid evolution of technology, my journey has been shaped by a blend of curiosity and a passion for innovation. My background as an undergraduate in Electronics and Computer Engineering, combined with my fascination for problem-solving, has been a cornerstone of my growth."
              } 
              />
              <br />
                <AnimatedBody
                className="text-[#e4ded7]/80"
                text={
                  "My journey into technology started with building simple projects from First Year, eventually leading to mastering web development and exploring cutting-edge backend frameworks like Node js and Hono. My curiosity continues to drive me to take on challenges, whether it’s solving algorithmic problems or developing end-to-end solutions for real-world applications."
                }
                 /> 
                
            </div>

            {/* Box 4: Experience */}
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl col-span-2">
              {/* <h2 className="text-2xl font-bold mb-4">Experience</h2> */}
              {/* <ul className="space-y-3 text-base">
                <li>
                  <strong>2024 - Present:</strong> Full-Stack Developer, working on an innovative project for the Indian diaspora to connect with local artisans in India, integrating logistics and machine learning for personalized solutions.
                </li>
                <li>
                  <strong>2024 - Present:</strong> Engineered robust backend solutions for web platforms using Hono, PostgreSQL, and Prisma, with a focus on optimized performance and secure data handling.
                </li>
                <li>
                  <strong>2024 - 2025:</strong> Designed and implemented a scalable lecture management system with subscription models, role-based access control, and seamless content delivery through cloud integration.
                </li>
                <li>
                  <strong>2023 - 2024:</strong> Designed and implemented a dynamic blog platform with user authentication, SEO optimization, and responsive design for enhanced user engagement.
                </li>
              </ul> */}
              <div className="mb-24 flex w-[100%] gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[15px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Programming Languages"}
                className={
                  "text-[14px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JAVA , JavaScript , TypeScript."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Web Development"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Next.js , React.js , Express.js , Node.js , Hono.js , Turborepo"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"DataBase Management"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "PostgreSQL , MongoDB , Prisma , MySQL , Mongoose."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Devops Tech"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Docker , CI/CD , Kubernetes"
                }
              />
            </div>
            
          </div>
          <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Tools & Technologies"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <div className="text-[#e4ded7]/80">
              <AnimatedBody
                text={
                  "Git , Cloudflare Workers , Prisma Accelerate , NextAuth.js , OpenAI API , Zod , Razorpay , Cloudinary."
                }
              />
              </div>
            </div>
            </div>

            {/* Box 5: Tech Stack */}
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl col-span-1 h-76 flex flex-col items-center justify-center mt-6 md:mt-0">
              {/* <h2 className="text-2xl font-bold mb-4">Tech Stack</h2> */}
              <AnimatedTitle
          text={"Tech Stack"}
          className={
            "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
          }
          wordSpace={"mr-[12px]"}
          charSpace={"mr-[0.000em]"}
        />
              <ul className="grid grid-cols-3 gap-4 text-lg">
                <li className="flex items-center space-x-2">
                  <SiNextdotjs className="text-gray-400" size={24} />
                  <span>Next.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaReact className="text-cyan-400" size={24} />
                  <span>React.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaNodeJs className="text-green-500" size={24} />
                  <span>Node.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaJava className="text-green-500" size={24} />
                  <span>Java</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiTypescript className="text-blue-600" size={24} />
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiPostgresql className="text-blue-500" size={24} />
                  <span>PostgreSQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiPrisma className="text-indigo-500" size={24} />
                  <span>Prisma</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiTailwindcss className="text-cyan-400" size={24} />
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiHono className="text-yellow-400" size={24} />
                  <span>Hono</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiTurborepo className="text-red-500" size={24} />
                  <span>Turborepo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiCloudflare className="text-orange-400" size={24} />
                  <span>Cloudflare Workers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiDocker className="text-blue-500" size={24} />
                  <span>Docker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiKubernetes className="text-cyan-400" size={24} />
                  <span>Kubernetes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiMongodb className="text-green-400" size={24} />
                  <span>MongoDB</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiExpress className="text-white-400" size={24} />
                  <span>Express</span>
                </li>
              </ul>
            </div>

            {/* Box 6: Achievements */}
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl">
              {/* <h2 className="text-2xl font-bold mb-4">Achievements</h2> */}
              <AnimatedTitle
          text={"Achievements"}
          className={
            "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
          }
          wordSpace={"mr-[12px]"}
          charSpace={"mr-[0.000em]"}
        />
              <ul className="space-y-3 text-base">
                <li><span className="font-semibold uppercase underline text-cyan-400">Certification</span> - Web Development and Devops <br />(Instructor Harkirat Singh) - virtual</li>
                <li><span className="font-semibold uppercase underline text-cyan-400">Certification</span> - Core Java <br/>(Instructor Durga sir) - virtual</li>
                <li><span className="font-semibold uppercase underline text-cyan-400">Participation</span> - Smart India Hackathon <br />(2024)</li>
                <li><span className="font-semibold uppercase underline text-cyan-400">Participation</span> - TCS Codevita Challenge <br />(2024)</li>
              </ul>
            </div>


            {/* Box 7: Education */}
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl">
              {/* <h2 className="text-2xl font-bold mb-4">Education</h2> */}
              <AnimatedTitle
          text={"Educations"}
          className={
            "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
          }
          wordSpace={"mr-[12px]"}
          charSpace={"mr-[0.000em]"}
        />
              <ul className="space-y-4 text-lg text-[#e4ded7]/80">
                <li>
                  <span className="font-bold text-white">2022 – 2026(Present):</span> Bachelor of Technology in Electronics and Computer Engineering, <br /><span className="italic">Sanjivani College of Engineering.</span>
                </li>
                <li>
                  <span className="font-bold text-white">2020 – 2022:</span> Higher Secondary Education,<br /> <span className="italic">SSGM Junior College.</span>
                </li>
              </ul>
            </div>


            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-2xl col-span-2">
              {/* <h2 className="text-2xl font-bold mb-4">Contact</h2> */}
              <AnimatedTitle
          text={"Contact"}
          className={
            "mb-4 text-left text-3xl font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-2xl md:mb-4 md:text-3xl lg:text-3xl"
          }
          wordSpace={"mr-[12px]"}
          charSpace={"mr-[0.000em]"}
        />
              <ul className="space-y-4 text-lg">
                <li className="flex gap-4 items-center">
                  <span className="font-bold"><SiGmail/></span> ganeshlonareofficia@gmail.com
                </li>
                <li className="flex gap-4 items-center">
                  <span className="font-bold"><FaPhone/></span> +91 9637823565
                </li>
                <li className="flex gap-4 items-center">
                  <span className="font-bold"><FaLinkedin/></span> <a href="https://www.linkedin.com/in/ganeshlonare" target="_blank" className="text-blue-500">linkedin.com/in/ganeshlonare</a>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="font-bold"><FaGithub/></span> <a href="https://github.com/ganeshlonare" target="_blank" className="text-blue-500">github.com/ganeshlonare</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>

      );
    };

    export default About;
