import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent font-medium tracking-widest uppercase text-sm">Get In Touch</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">Me</span>
                    </h2>
                </div>

                <div ref={containerRef} className="max-w-5xl mx-auto bg-primary rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Contact Info Side */}
                    <div className="md:w-2/5 bg-gradient-to-br from-secondary to-primary p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-accent/5"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                            <p className="text-text-muted mb-8">
                                I'm open to new opportunities and collaborations. Feel free to reach out!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted uppercase">Email</p>
                                        <a href="mailto:shahinakk300@gmail.com" className="text-white hover:text-cyan transition-colors text-sm">shahinakk300@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted uppercase">Phone</p>
                                        <a href="tel:+9747994890455" className="text-white hover:text-cyan transition-colors text-sm">7994890455</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted uppercase">Location</p>
                                        <p className="text-white text-sm">Doha, Qatar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 flex gap-4">
                            <a href="https://github.com/shahina-abi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300">
                                <Github size={20} />
                            </a>
                            {/* Add LinkedIn if available */}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-3/5 p-10 bg-primary">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white placeholder-text-muted/30 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white placeholder-text-muted/30 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-text-muted">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white placeholder-text-muted/30 transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white placeholder-text-muted/30 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-accent to-accent-glow text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
