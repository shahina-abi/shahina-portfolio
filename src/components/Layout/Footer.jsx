import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Shahina Habeeb</h3>
          <p className="text-text-muted max-w-xs">
            Aspiring MERN Stack Developer building modern web experiences.
          </p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://github.com/shahina-abi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:shahinakk300@gmail.com"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <Mail size={24} />
          </a>
          {/* Add LinkedIn if available, otherwise keep hidden or generic */}
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-text-muted/50">
        &copy; {new Date().getFullYear()} Shahina KK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
