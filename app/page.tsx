"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import PreLoader from "./animations/PreLoader/PreLoader";
import Links from "@/components/ui/Links";
import { useEffect } from "react";
// import AnimatedCursor from "react-animated-cursor"


const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <>
    <PreLoader />
    {/* <AnimatedCursor
     innerSize={9}        // Black inner dot size
        outerSize={40}        // White outer circle size
        color="255, 255, 255" // White color for the outer circle
        outerAlpha={0.7}      // Slight transparency for the outer circle
        innerScale={1}        // No scaling effect on the inner circle
        outerScale={1.5}      // Slightly larger scaling for the outer circle on hover
        outerStyle={{
          transition: '0.1s ease-out', // Faster transition for the outer circle
        }}
        innerStyle={{
          backgroundColor: "black", // Black inner circle
        }}
        trailingSpeed={4}     // Increase the speed of the outer circle following the inner dot
        clickables={['button', 'a']}
    /> */}
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-full w-full">
        <FloatingNav navItems={navItems} />
        <Links />
        <Hero />
        <RecentProjects />
        
        {/* <Approach /> */}
        
      </div>
      <div className="max-w-7xl w-full">
        <Grid />
        {/* <Clients /> */}
        <Experience />
        <Footer />
      </div>
    </main>
    </>
  );
};

export default Home;


