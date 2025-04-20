// import AnimatedTitle from "../app/animations/AnimatedTitle";
// import { gridItems } from "@/data";
// import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Grid = () => {
//   return (
//     <section id="about">
//       <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] mt-20">
//             <TextGenerateEffect
//                 words="ABOUT   ME"
//                 className="text-center text-[40px] md:text-7xl lg:text-8xl"
//               />
//       </div>
//       <BentoGrid className="w-full py-20">
//         {gridItems.map((item, i) => (
//           <BentoGridItem
//             id={item.id}
//             key={i}
//             title={item.title}
//             description={item.description}
//             // remove icon prop
//             // remove original classname condition
//             className={item.className}
//             img={item.img}
//             imgClassName={item.imgClassName}
//             titleClassName={item.titleClassName}
//             spareImg={item.spareImg}
//           />
//         ))}
//       </BentoGrid>
//     </section>
//   );
// };

// export default Grid;



"use client";

import { gridItems } from "@/data";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import dynamic from "next/dynamic";

// Dynamically import BentoGrid and BentoGridItem (SSRed disabled)
const DynamicBentoGrid = dynamic(() => import("./ui/BentoGrid").then(mod => mod.BentoGrid), {
  ssr: false,
});
const DynamicBentoGridItem = dynamic(() => import("./ui/BentoGrid").then(mod => mod.BentoGridItem), {
  ssr: false,
});

const Grid = () => {
  return (
    <section id="about">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] mt-20">
        <TextGenerateEffect
          words="ABOUT   ME"
          className="text-center text-[40px] md:text-7xl lg:text-8xl"
        />
      </div>

      <DynamicBentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <DynamicBentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </DynamicBentoGrid>
    </section>
  );
};

export default Grid;
