
import React from "react";
import { Mail, Instagram, Phone, Twitter, Linkedin } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "stephaniesenwa@gmail.com",
    icon: Mail,
    href: "mailto:stephaniesenwa@gmail.com",
  },
  {
    label: "Instagram",
    value: "stephanieesenwa",
    icon: Instagram,
    href: "https://www.instagram.com/stephanieesenwa",
  },
  {
    label: "Phone",
    value: "+234 90 3620 0031",
    icon: Phone,
    href: "tel:+2349036200031",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/stephanieesenwa",
    icon: Instagram,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stephanie-esenwa-480844286",
    icon: Linkedin,
  },
];

const Footer = () => (
  <footer className="relative border-t border-school-green bg-white overflow-hidden mt-12">
    {/* Gradient Background */}
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 school-gradient opacity-10"
      style={{ mixBlendMode: "lighten" }}
    />
    <div className="relative z-10 container max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 py-10">
      {/* Left: Logo/Heading */}
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 text-center md:text-left gap-3">
        <span className="text-2xl font-extrabold font-playfair tracking-tight text-primary drop-shadow-sm">
          Food Waste Optimization Outreach Project
        </span>
        <span className="text-sm text-muted-foreground opacity-90 italic">
          Powered by Students for Students
        </span>
      </div>
      {/* Center: Contact */}
      <div className="flex flex-col gap-3 items-center md:items-start">
        <h2 className="text-lg font-semibold text-primary mb-2 tracking-wide">
          Contact Us
        </h2>
        <div className="flex flex-col gap-1 text-muted-foreground">
          {contacts.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-school-green-light/60 group transition-all hover:shadow-md"
              target={item.label === "Instagram" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <span className="bg-school-green p-2 rounded-full text-white group-hover:scale-110 transition-transform shadow-md">
                <item.icon size={19} />
              </span>
              <span className="underline decoration-school-green/70 underline-offset-2 group-hover:decoration-2 transition-all select-all">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Right: Socials */}
      <div className="flex flex-col items-center md:items-end gap-3">
        <span className="text-lg font-semibold text-primary mb-1 tracking-wide">
          Follow us
        </span>
        <div className="flex flex-row gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`
                bg-school-green 
                text-white
                hover:bg-white 
                hover:text-school-green
                border 
                border-school-green 
                transition-all
                rounded-full p-2 
                shadow-sm hover:shadow-lg
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-school-green
                active:scale-95
              `}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </div>
    {/* Footer legal */}
    <div className="w-full text-center py-3 bg-school-green-light border-t border-school-green opacity-95 animate-fade-in text-sm text-primary font-medium tracking-wide">
      &copy; {new Date().getFullYear()} FWOOP
    </div>
  </footer>
);

export default Footer;

