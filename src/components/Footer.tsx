import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import eraLogo from "@/assets/era-logo.png";

const footerLinks = {
  Programs: [
    { label: "Technical Training", to: "/trainings" },
    { label: "Soft Skills", to: "/trainings" },
    { label: "Internship Placement", to: "/trainings" },
    { label: "Career Coaching", to: "/about" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Blog & News", to: "/blog" },
    { label: "Gallery", to: "/gallery" },
  ],
  Resources: [
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Trainings", to: "/trainings" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Service", to: "#" },
    { label: "Cookie Policy", to: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-era-gray-900 text-era-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <img src={eraLogo} alt="ERA Academy" className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering civil & mechanical engineering graduates for the building environment.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-era-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} ERA Academy.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white hover:scale-125 transition-all duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-white hover:scale-125 transition-all duration-300" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white hover:scale-125 transition-all duration-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
