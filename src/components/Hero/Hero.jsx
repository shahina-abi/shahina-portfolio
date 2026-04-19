import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../../assets/profile.png"; // Make sure to place your image in src/assets/ and name it profile.png

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2 },
    )
      .fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6",
      )
      .fromTo(
        imageRef.current,
        { x: 50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        "-=0.8",
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-10"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-cyan/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content: Text */}
        <div className="text-left z-10 order-2 lg:order-1">
          <div ref={textRef}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-accent"></span>
              <span className="text-accent font-medium tracking-widest uppercase text-sm">
                MERN Stack Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">
                Shahina Habeeb
              </span>
            </h1>

            <p className="text-lg text-text-muted max-w-xl mb-8 leading-relaxed">
              I build modern, responsive, and user-friendly web applications.
              Passionate about creating seamless digital experiences with clean
              code and creative design.
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <a
              href="/shahina-fullstack copy.pdf" // Make sure to place your CV in the public folder and name it Shahina_Habeeb_CV.pdf
              className="px-8 py-3.5 bg-gradient-to-r from-accent to-accent-glow text-white font-bold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </a>

            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://github.com/shahina-abi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-text-muted hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:shahinakk300@gmail.com"
                className="p-3 bg-secondary rounded-full text-text-muted hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content: Image */}
        <div
          className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2"
          ref={imageRef}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Abstract Blob Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-cyan rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-float opacity-80 blur-sm"></div>

            {/* Image Container */}
            <div className="absolute inset-2 bg-primary rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-2 border-white/10">
              <img
                src={profileImage}
                alt="Shahina Habeeb"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                }} // Fallback if image not found
              />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-4 -left-4 bg-secondary/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
