// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Github, ExternalLink, Layers } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const projectsData = [
//   {
//     title: "FoodBae – Food Delivery Website",
//     description:
//       "A full-featured food delivery platform with restaurant listings, cart system, and order placement. Features user authentication and protected routes.",
//     tech: ["MERN Stack", "Redux", "Tailwind CSS", "Axios"],
//     github: "https://github.com/shahina-abi/foodapp", // Assuming general github link if specific not provided
//     demo: "https://food-ordering-olive-five.vercel.app/",
//     image:
//       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Food image
//   },
//   {
//     title: "FlowerBloom – Online Flower Shop",
//     description:
//       "Designed and built a responsive flower shop website with form validation. Deployed using Netlify and GitHub.",
//     tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
//     github: "https://github.com/shahina-abi/flower-website",
//     demo: "https://glittering-rolypoly-72ac6f.netlify.app/",
//     image:
//       "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     title: "Auraluxe – Premium Headphone 3D Experience",
//     description:
//       "Developed a cinematic premium headphone landing page with immersive 3D visuals and smooth scroll-based interactions. Implemented React Three Fiber for interactive 3D models, GSAP ScrollTrigger for advanced parallax animations, and Framer Motion for fluid UI transitions. Designed a modern dark-themed interface featuring a cinematic hero section with background video, scroll-linked animations, and high-performance responsive layout optimized for deployment.",
//     tech: [
//       "Next.js",
//       "React",
//       "Three.js",
//       "React Three Fiber",
//       "GSAP (ScrollTrigger)",
//       "Framer Motion",
//       "Tailwind CSS",
//     ],
//     github: "https://github.com/shahina-abi/premium-headphones", // update if needed
//     demo: "https://beats-headphone-five.vercel.app/",
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// const Projects = () => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardsRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       },
//     );
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="py-20 bg-secondary/30 relative"
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
//           Featured <span className="text-accent">Projects</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//           {projectsData.map((project, index) => (
//             <div
//               key={index}
//               ref={addToRefs}
//               className="bg-secondary rounded-2xl overflow-hidden border border-white/5 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] hover:border-accent/50 transition-all duration-500 group relative"
//             >
//               {/* Hover Gradient Border Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-accent to-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
//               <div className="h-48 overflow-hidden relative">
//                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-text-muted mb-4 line-clamp-3">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs font-medium px-2.5 py-1 bg-secondary text-accent rounded-md"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
//                   >
//                     <Github size={18} /> Code
//                   </a>
//                   <a
//                     href={project.demo}
//                     className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
//                   >
//                     <ExternalLink size={18} /> Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  ExternalLink,
  Brain,
  ShoppingCart,
  Briefcase,
  Utensils,
  Flower,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "Beats Premium Headphones",
    subtitle: "Full-Stack E-Commerce · Stripe · Live Payments",
    description:
      "End-to-end e-commerce store with Stripe checkout handling real transactions, Google OAuth login, real-time order tracking dashboard, and automated transactional emails via Resend API. Zero-downtime deployment on Vercel with MongoDB Atlas.",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "NextAuth.js",
      "Zustand",
      "Framer Motion",
    ],
    github: "https://github.com/shahina-abi/premium-headphones",
    demo: "https://beats-headphone-five.vercel.app/",
    badge: "Full-Stack · Live",
    badgeColor: "from-green-500 to-emerald-500",
    Icon: ShoppingCart,
    highlight: true,
  },
  {
    title: "FoodBae – Food Delivery Platform",
    subtitle: "MERN Stack · JWT Auth · Redux",
    description:
      "Full-featured food delivery platform with JWT authentication, restaurant listings, cart management, and order placement. Protected routes managed with Redux and scalable RESTful backend APIs built with Node.js and Express.js.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Redux",
      "Axios",
    ],
    github: "https://github.com/shahina-abi/foodapp",
    demo: "https://food-ordering-olive-five.vercel.app/",
    badge: "MERN · Live",
    badgeColor: "from-red-500 to-rose-500",
    Icon: Utensils,
    highlight: false,
  },
  {
    title: "CancerScreen AI Dashboard",
    subtitle: "Medical AI · 8 Models · 99.3% Accuracy",
    description:
      "Multi-model cancer risk stratification platform powered by 8 AI models covering 6+ cancer types. Trained PyTorch models (MobileNetV2, ResNet50, DenseNet121) on medical datasets and converted to ONNX for fast CPU inference. Outputs Confidence %, ECE, Sensitivity, Specificity, and Risk Score.",
    tech: [
      "FastAPI",
      "PyTorch",
      "ONNX Runtime",
      "Next.js",
      "TypeScript",
      "Railway",
      "Vercel",
    ],
    github: "https://github.com/shahina-abi/CNN-Testing-app",
    demo: "https://cnn-testing-app.vercel.app",
    badge: "AI · Featured",
    badgeColor: "from-violet-500 to-indigo-500",
    Icon: Brain,
    highlight: true,
  },

  {
    title: "CareerBoost – AI CV Enhancer",
    subtitle: "AI Platform · OpenAI · Job Matching",
    description:
      "AI-powered platform that rewrites resumes to be ATS-friendly using OpenAI, parses PDF and DOCX files, and matches user skills to live job listings via RapidAPI — reducing job-search effort by ~60%. Served 100+ users during development.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI",
      "Groq AI",
      "RapidAPI",
    ],
    github: "https://github.com/shahina-abi",
    demo: "https://careerboost-cv-fqof.vercel.app/",
    badge: "AI · Full-Stack",
    badgeColor: "from-orange-500 to-amber-500",
    Icon: Briefcase,
    highlight: false,
  },

  {
    title: "FlowerBloom – Online Flower Shop",
    subtitle: "Responsive UI · Netlify · Vanilla JS",
    description:
      "Fully responsive flower-selling website with modern UI design and client-side JavaScript form validation. Maintained with structured version control on GitHub and deployed live on Netlify.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Netlify"],
    github: "https://github.com/shahina-abi/flower-website",
    demo: "https://glittering-rolypoly-72ac6f.netlify.app/",
    badge: "Frontend",
    badgeColor: "from-pink-500 to-fuchsia-500",
    Icon: Flower,
    highlight: false,
  },
  {
    title: "TaskTracker – AI Study Planner",
    subtitle: "MERN Stack · JWT Auth · OpenRouter AI",
    description:
      "AI-powered student productivity app with smart task management, daily planning, reminders, weekly insights, Pomodoro focus sessions, streak tracking, and calendar-based deadline management.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Axios",
      "JWT",
      "OpenRouter API",
      "Recharts",
    ],
    github: "https://github.com/shahina-abi/task-tracker",
    demo: "https://task-tracker-inky-pi.vercel.app/",
    badge: "AI · MERN · Live",
    badgeColor: "from-violet-500 to-indigo-500",
    Icon: ClipboardList,
    highlight: true,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      },
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      },
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent/70 mb-3">
            — Portfolio —
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Production-grade applications built and deployed — full stack, AI,
            and everything in between.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project, index) => {
            const { Icon } = project;
            const isHovered = hoveredIndex === index;
            const isFeatured = project.highlight;

            return (
              <div
                key={index}
                ref={addToRefs}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group rounded-2xl border transition-all duration-500 cursor-default flex flex-col
                  ${
                    isFeatured
                      ? "md:col-span-1 border-white/10 bg-white/[0.03]"
                      : "border-white/[0.06] bg-white/[0.02]"
                  }
                  ${isHovered ? "border-accent/40 bg-white/[0.05] -translate-y-1 shadow-[0_20px_60px_rgba(0,0,0,0.4)]" : ""}
                `}
                style={{ backdropFilter: "blur(12px)" }}
              >
                {/* Top gradient bar */}
                <div
                  className={`h-[2px] w-full rounded-t-2xl bg-gradient-to-r ${project.badgeColor} transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-40"}`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Badge row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.badgeColor} bg-opacity-10 shadow-inner`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${project.badgeColor} text-white`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title + Subtitle */}
                  <h3
                    className={`text-lg font-bold text-white mb-1 transition-colors duration-300 ${isHovered ? "text-accent" : ""}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-medium tracking-wide text-white/35 mb-3 uppercase">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/[0.05] text-white/50 border border-white/[0.07]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5 pt-4 border-t border-white/[0.06]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white transition-colors duration-200"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-accent/70 hover:text-accent transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/20 text-xs mt-12 tracking-widest uppercase">
          All projects deployed & live in production
        </p>
      </div>
    </section>
  );
};

export default Projects;
