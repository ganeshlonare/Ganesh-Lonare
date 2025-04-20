import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";

// const Hero = () => {
//   return (
//     <div className="pb-64 pt-48" id="home">
//       {/**
//        *  UI: Spotlights
//        *  Link: https://ui.aceternity.com/components/spotlight
//        */}
//        <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//       </div>
//       {/**
//        *  UI: grid
//        *  change bg color to bg-black-100 and reduce grid color from
//        *  0.2 to 0.03
//        */}
//       <div
//         className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         {/* Radial gradient for the container to give a faded look */}
//         <div
//           // chnage the bg to bg-black-100, so it matches the bg color and will blend in
//           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//             Dynamic Web Magic with Next.js
//           </p>

//           {/**
//            *  Link: https://ui.aceternity.com/components/text-generate-effect
//            *
//            *  change md:text-6xl, add more responsive code
//            */}
//           <TextGenerateEffect
//             words="Transforming Concepts into Intelligent Solutions"
//             className="text-center text-[40px] md:text-7xl lg:text-7xl"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//             Hi! I&apos;m Ganesh Lonare, a Backend Developer based in India.
//           </p>

//           <Link href="#work">
//             <MagicButton
//               title="Show my work"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </Link>
//          <div className="relative">
//   <p className="absolute bottom-4 left-4 text-left tracking-wider text-sm md:text-lg lg:text-2xl">
//     Adaptable developer with expertise across diverse technologies.
//   </p>
// </div>

          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      // first prevent the default behavior
      e.preventDefault();
      // get the href and remove everything before the hash (#)
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      // get the element by id and use scrollIntoView
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    };
  return (
    <div className="pb-64 pt-48" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>    

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            MERN | Spring Boot | DevOps | Next.js 
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Intelligent Solutions"
            className="text-center text-[40px] md:text-7xl lg:text-7xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ganesh Lonare, a Full-Stack Developer based in India.
          </p>
          <Link 
          href="#work"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Work Section"
          >
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>

      {/* Updated Bottom-Left Paragraph */}
      {/* <div className="relative">
        <p className="absolute -bottom-44 left-32 text-left tracking-wider text-sm md:text-lg lg:text-md w-96">
          Adaptable developer with expertise across diverse technologies.
        </p>
      </div> */}

        <div className="relative">
  <p
    className="
      absolute 
      bottom-1 left-4 
      md:bottom-1 md:left-8 
      lg:-bottom-44 lg:left-32 
      text-left 
      tracking-wider 
      text-sm md:text-base lg:text-lg 
      w-72 md:w-80 lg:w-96
    "
  >
    Adaptable developer with expertise across diverse technologies.
  </p>
</div>


      <div className="relative">
        <p className="absolute 
      bottom-1 right-4 
      md:bottom-1 md:right-8 
      lg:-bottom-44 lg:right-32 
      text-left 
      tracking-wider 
      text-sm md:text-base lg:text-lg 
      w-72 md:w-80 lg:w-96 hidden lg:flex">
          Committed to delivering efficient and innovative solutions
        </p>
      </div>
    </div>
  );
};

export default Hero;