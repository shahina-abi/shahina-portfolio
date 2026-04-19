// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Code, Database, Layout, Server, PenTool, Globe, Terminal, Cpu } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const skillsData = [
//     {
//         category: "Front-end",
//         icon: <Layout size={32} />,
//         skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
//     },
//     {
//         category: "Back-end",
//         icon: <Server size={32} />,
//         skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
//     },
//     {
//         category: "Tools",
//         icon: <PenTool size={32} />,
//         skills: ["Git", "Postman", "Figma", "VS Code", "Vite"]
//     },
//     {
//         category: "Languages",
//         icon: <Globe size={32} />,
//         skills: ["English", "Malayalam", "Hindi"]
//     }
// ];

// const Skills = () => {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         gsap.fromTo(cardsRef.current,
//             { y: 50, opacity: 0 },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.8,
//                 stagger: 0.2,
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 80%",
//                 }
//             }
//         );
//     }, []);

//     const addToRefs = (el) => {
//         if (el && !cardsRef.current.includes(el)) {
//             cardsRef.current.push(el);
//         }
//     };

//     return (
//         <section id="skills" ref={sectionRef} className="py-20 bg-primary relative">
//             {/* Background Glow */}
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-[100px] translate-y-1/2"></div>

//             <div className="container mx-auto px-6 relative z-10">
//                 <div className="text-center mb-16">
//                     <span className="text-accent font-medium tracking-widest uppercase text-sm">My Expertise</span>
//                     <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
//                         Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">Skills</span>
//                     </h2>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {skillsData.map((category, index) => (
//                         <div
//                             key={index}
//                             ref={addToRefs}
//                             className="bg-secondary p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
//                         >
//                             {/* Hover Gradient */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                             <div className="relative z-10 flex flex-col items-center text-center">
//                                 <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-accent mb-6 shadow-lg group-hover:scale-110 group-hover:text-cyan transition-all duration-300 border border-white/5">
//                                     {category.icon}
//                                 </div>

//                                 <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>

//                                 <div className="flex flex-wrap justify-center gap-2">
//                                     {category.skills.map((skill, idx) => (
//                                         <span
//                                             key={idx}
//                                             className="px-3 py-1.5 text-xs font-medium bg-primary text-text-muted rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
//                                         >
//                                             {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Server, PenTool, Globe, Cpu, Layers, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout size={32} />,
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Animations & 3D",
    icon: <Zap size={32} />,
    color: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
    skills: [
      "GSAP",
      "Framer Motion",
      "Three.js",
      "React Three Fiber",
      "ScrollTrigger",
    ],
  },
  {
    category: "Backend & APIs",
    icon: <Server size={32} />,
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Axios",
      "JWT",
      "NextAuth.js",
    ],
  },
  {
    category: "AI Integration",
    icon: <Cpu size={32} />,
    color: "from-orange-500/20 to-yellow-500/10",
    iconColor: "text-orange-400",
    skills: [
      "ONNX Runtime",
      "OpenAI API",
      "Groq AI",
      "PyTorch (basic)",
      "Google Colab",
      "FastAPI + ML",
    ],
  },
  {
    category: "State & Database",
    icon: <Layers size={32} />,
    color: "from-red-500/20 to-rose-500/10",
    iconColor: "text-red-400",
    skills: ["Redux Toolkit", "Zustand", "Context API", "MongoDB", "Mongoose"],
  },
  {
    category: "Tools & Deploy",
    icon: <PenTool size={32} />,
    color: "from-teal-500/20 to-cyan-500/10",
    iconColor: "text-teal-400",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "Vercel",
      "Netlify",
      "Railway",
      "VS Code",
    ],
  },
  {
    category: "Languages",
    icon: <Globe size={32} />,
    color: "from-indigo-500/20 to-blue-500/10",
    iconColor: "text-indigo-400",
    skills: ["English", "Malayalam", "Hindi"],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      },
    );

    // Cards stagger animation
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-[100px] translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">
              Skills
            </span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto text-sm">
            From building interactive frontends to integrating AI models into
            production apps.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillsData.map((category, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-secondary p-6 rounded-2xl border border-white/5 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-primary rounded-xl flex items-center justify-center ${category.iconColor} mb-5 shadow-lg group-hover:scale-110 transition-all duration-300 border border-white/5`}
                >
                  {category.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-bold text-white mb-4">
                  {category.category}
                </h3>

                {/* Skills Pills */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium bg-primary text-text-muted rounded-lg border border-white/5 group-hover:border-white/15 group-hover:text-white/70 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight — AI project callout */}
        <div className="mt-12 p-5 rounded-2xl border border-accent/20 bg-accent/5 text-center max-w-2xl mx-auto">
          <p className="text-white/70 text-sm">
            <span className="text-accent font-semibold">
              Featured Project:{" "}
            </span>
            Built a live AI cancer detection dashboard with 8 ML models —
            <span className="text-cyan"> Next.js + FastAPI + ONNX Runtime</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
