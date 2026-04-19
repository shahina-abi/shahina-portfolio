import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);
    const eduRef = useRef(null);
    const certRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

        tl.fromTo(eduRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 })
            .fromTo(certRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.6");
    }, []);

    return (
        <section id="education" ref={sectionRef} className="py-20 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Education Column */}
                    <div ref={eduRef}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-accent/10 rounded-full text-accent">
                                <GraduationCap size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Education</h2>
                        </div>

                        <div className="space-y-8 border-l-2 border-white/10 ml-5 pl-8 relative">
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-primary"></span>
                                <h3 className="text-xl font-bold text-white">MERN Stack Development</h3>
                                <p className="text-accent font-medium mb-1">Entri Elevate – Certified by Illinois Tech</p>
                                <p className="text-text-muted text-sm mb-2">Course successfully completed with official certification.</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-secondary border-4 border-primary"></span>
                                <h3 className="text-xl font-bold text-white">Bachelor of Science – Geology</h3>
                                <p className="text-accent font-medium mb-1">Calicut University, Ponnani, India</p>
                                <div className="flex items-center gap-4 text-sm text-text-muted">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> 2015 – 2018</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certificates Column */}
                    <div ref={certRef}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-accent/10 rounded-full text-accent">
                                <Award size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Certificates</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                "MERN Stack Development – Entri (Certified by Illinois Tech)",
                                "Microsoft Excel (Basic to Advanced) – by Asitha Vijilesh",
                                "ChatGPT Essentials – by Aswin K R"
                            ].map((cert, index) => (
                                <div key={index} className="bg-secondary/30 p-4 rounded-lg border border-white/5 hover:border-accent/30 transition-colors flex items-start gap-3">
                                    <Award className="text-accent shrink-0 mt-1" size={20} />
                                    <span className="text-text-muted hover:text-white transition-colors">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
