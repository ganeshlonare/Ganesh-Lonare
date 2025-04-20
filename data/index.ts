import paySphere from '../public/projects/payspere.png'
import estate from '../public/projects/estate.png'
import lms from '../public/projects/lms.png'
import blog from '../public/projects/blog.png'
import mystery from '../public/projects/mystery.png'
import career from '../public/projects/career.png'

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I thrive on collaboration, aiming to solve real-world problems through technology",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Currently pursuing a B.Tech at Sanjivani College of Engineering, Kopargaon.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "I constantly try to improve my",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Tech enthusiast with a passion for Devops and Backend Development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
  id: 5,
  title: "Currently working as a Backend Developer for AI Career Guidance Platform",
  description: "Hackathon",
  className: "md:col-span-3 md:row-span-2",
  imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  titleClassName: "justify-center md:justify-start lg:justify-center",
  img: "/b5.svg",
  spareImg: "/grid.svg",
},

  {
    id: 6,
    title: "open to internships, collaborations & hackathons!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
  id: 1,
title: "AI-Powered Personalized Career Guidance Platform",
subtitle: "(AI-Driven Career Path Builder)",
description:
  "Developed an AI-powered web application that provides personalized career roadmap's, weekly plans, industry insights, and job resources for students based on their learning history, goals, and quiz results. Key features include personalized career roadmap's ,personalized study plans, resume builder, job listings, code debugger, and more, ensuring students have a comprehensive learning and career development experience.",
image: career, // Replace with the actual image import or path
link: "https://github.com/ganeshlonare/Carrier-Guidence-with-AI", // Add the project link if available
skills: [
  "#springboot",
  "#react.js",
  "#postgresql",
  "#ai",
],
accentColor: "#fff", // You can set this to the appropriate color
},
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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


export const blogs = [
  {
    quote:
      "Collaborating with Shareef Shahzer on our data science project was a game-changer. He not only brought technical expertise but also a deep understanding of our business needs. His predictive analytics model helped us reduce operational costs by 20%. We look forward to working with him on future projects.",
    name: "Jane Doe",
    title: "Chief Operating Officer, TechCorp Solutions",
  },
  {
    quote:
      "The data science solutions provided by Shareef Shahzer were instrumental in improving our patient care strategies. His insights into patient data allowed us to tailor treatments more effectively, resulting in a 15% increase in patient satisfaction. His professionalism and commitment to excellence are unparalleled.",
    name: "John Smith",
    title: "Director of Data Analytics, HealthPlus",
  },
  {
    quote:
      "We were impressed by Shareef Shahzer's ability to transform complex data into actionable business strategies. His work on our customer segmentation project led to a 30% increase in targeted marketing campaign success rates. His collaborative approach and expertise made a significant impact on our business.",
    name: "Lisa Green",
    title: "Marketing Manager, Retail Insights",
  },
  {
    quote:
      "The predictive models and data visualization tools developed by Shareef Shahzer have revolutionized our approach to risk management. His solutions provided us with clearer insights and more accurate forecasts, reducing our financial risks by 25%. His dedication and technical skill were evident in every step of the project.",
    name: "Michael Brown",
    title: "Chief Financial Officer, FinancePro",
  },
  {
    quote:
      "Collaborating with Shareef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shareef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Development and DevOps Certified",
    desc: "Certified in Full Stack Web Development and DevOps, proficient in JavaScript, React, Node.js, and Docker. Built and deployed scalable web applications, optimizing performance and ensuring seamless CI/CD pipelines. Enhanced development efficiency and reliability, delivering robust solutions in both frontend and backend systems.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Core Java Certified",
    desc: "Completed Core Java training, gaining a strong foundation in object-oriented programming, data structures, exception handling, and multi-threading. Built and debugged Java-based applications, ensuring efficient and maintainable code. Equipped with the skills to develop robust and scalable software solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Web Development Workshop Trainer",
    desc: "Conducted a 3-day workshop on Full Stack Web Development at Sanjivani College of Engineering. Trained 50+ students in building dynamic web applications using JavaScript, React, and Node.js. Designed hands-on sessions, simplifying complex concepts and enhancing participants' understanding of modern web development practices.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Spring Boot and Microservices Trainee",
    desc: "Currently enrolled in a comprehensive course to master Spring Framework, Spring Boot, Microservices, and DevOps. Developing skills to build scalable and efficient backend systems, design microservice architectures, and implement CI/CD pipelines for seamless application deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ganeshlonare",
  },
  {
    id: 2,
    img: "/medium.svg",
    link: "https://medium.com/@shahzershareef",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shareef-shahzer/",
  },
];
