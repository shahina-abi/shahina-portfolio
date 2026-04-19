// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//     const sectionRef = useRef(null);
//     const contentRef = useRef(null);

//     useEffect(() => {
//         const words = contentRef.current.querySelectorAll('.about-text-word');

//         gsap.to(words, {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             stagger: 0.02,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse"
//             }
//         });

//         // Animate the cards separately
//         const cards = contentRef.current.querySelectorAll('.stats-card');
//         gsap.fromTo(cards,
//             { y: 30, opacity: 0 },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.8,
//                 stagger: 0.1,
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 60%",
//                 }
//             }
//         );
//     }, []);

//     return (
//         <section id="about" ref={sectionRef} className="py-20 bg-secondary relative overflow-hidden">
//             {/* Background Elements */}
//             <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2"></div>

//             <div className="container mx-auto px-6">
//                 <div className="max-w-4xl mx-auto text-center">

//                     {/* Content */}
//                     <div ref={contentRef}>
//                         <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
//                             About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">Me</span>
//                         </h2>

//                         <div className="space-y-6 text-lg text-text-muted leading-relaxed mb-10 text-center">
//                             <p>
//                                 {"I am a motivated and enthusiastic".split(" ").map((word, i) => (
//                                     <span key={`p1-${i}`} className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4">{word}</span>
//                                 ))}
//                                 <span className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4 text-accent font-medium">MERN Stack Developer</span>
//                                 {"based in Doha, Qatar. Certified by Illinois Tech through Entri Elevate, I specialize in building responsive, user-friendly, real-world applications using".split(" ").map((word, i) => (
//                                     <span key={`p1-2-${i}`} className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4">{word}</span>
//                                 ))}
//                                 <span className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4 text-white">MongoDB, Express.js, React, and Node.js</span>.
//                             </p>
//                             <p>
//                                 {"Recently, I completed a full-featured food delivery application as a capstone project, demonstrating my ability to handle complex full-stack development. I am passionate about clean UI, smooth interactions, and bringing ideas to life through code.".split(" ").map((word, i) => (
//                                     <span key={`p2-${i}`} className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4">{word}</span>
//                                 ))}
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                             {[
//                                 { label: "MERN", sub: "Stack" },
//                                 { label: "React", sub: "Frontend" },
//                                 { label: "Node.js", sub: "Backend" },
//                                 { label: "MongoDB", sub: "Database" }
//                             ].map((item, index) => (
//                                 <div key={index} className="stats-card p-4 bg-primary rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 text-center group">
//                                     <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.label}</h3>
//                                     <p className="text-xs text-text-muted uppercase tracking-wider">{item.sub}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const words = contentRef.current.querySelectorAll(".about-text-word");

    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.02,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    const cards = contentRef.current.querySelectorAll(".stats-card");
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      },
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={contentRef}>
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">
                Me
              </span>
            </h2>

            {/* Text */}
            <div className="space-y-6 text-lg text-text-muted leading-relaxed mb-10 text-center">
              <p>
                {"I am a motivated".split(" ").map((word, i) => (
                  <span
                    key={`p1-${i}`}
                    className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4"
                  >
                    {word}
                  </span>
                ))}
                <span className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4 text-accent font-medium">
                  Frontend & Full Stack Developer
                </span>
                {"based in Doha, Qatar. Certified by Illinois Tech, I specialize in building responsive, user-friendly applications using"
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={`p1-2-${i}`}
                      className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4"
                    >
                      {word}
                    </span>
                  ))}
                <span className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4 text-white">
                  React, Next.js, Node.js, and Tailwind CSS
                </span>
                .
              </p>
              <p>
                {"During my internship at ErrorBite, I built a live AI cancer detection dashboard integrating 8 machine learning models using Next.js and Python FastAPI — deployed on Vercel and Railway. I also love crafting immersive 3D experiences using Three.js, GSAP, and Framer Motion."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={`p2-${i}`}
                      className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4"
                    >
                      {word}
                    </span>
                  ))}
              </p>
              <p>
                {"I am passionate about clean UI, smooth animations, and bringing ideas to life through code."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={`p3-${i}`}
                      className="about-text-word inline-block mr-1.5 opacity-0 translate-y-4"
                    >
                      {word}
                    </span>
                  ))}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Next.js", sub: "Frontend" },
                { label: "FastAPI", sub: "Backend" },
                { label: "8 Models", sub: "AI Integration" },
                { label: "MERN", sub: "Full Stack" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="stats-card p-4 bg-primary rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 text-center group"
                >
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Live project callout */}
            <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 text-sm text-accent hover:bg-accent/10 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Live Project: AI Cancer Detection Dashboard →{" "}
              <a
                href="https://cnn-testing-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline underline-offset-2"
              >
                cnn-testing-app.vercel.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
