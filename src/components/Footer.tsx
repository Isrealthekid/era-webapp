import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import eraLogo from "@/assets/era-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-era-gray-50 py-16 overflow-hidden">
      {/* Background wordmark */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none text-center">
        <span className="font-display text-[clamp(20px,4.2vw,58px)] uppercase tracking-wide text-era-gray-200 whitespace-nowrap">
          Engineering Resource Academy
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={eraLogo} alt="ERA Academy" className="h-14 w-auto mb-4" />
            <p className="text-sm text-era-gray-500 leading-relaxed mb-6 max-w-xs">
              Empowering engineers and graduates through training, mentorship, and industry placement.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-lg text-era-gray-900 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "Blog", to: "/blog" },
                { label: "Recruitment", to: "/careers" },
                { label: "Trainings", to: "/trainings" },
                { label: "Gallery", to: "/gallery" },
                { label: "FAQ", to: "/faq" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-era-gray-500 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-era-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-era-gray-500">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span>3rd Floor, Oshopey Plaza, Allen Avenue, Ikeja, Lagos</span>
              </li>
              <li className="flex items-start gap-2 text-era-gray-500">
                <Mail size={16} className="mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@era.com.ng" className="hover:text-primary transition-colors">info@era.com.ng</a>
              </li>
              <li className="flex items-start gap-2 text-era-gray-500">
                <Phone size={16} className="mt-0.5 text-primary shrink-0" />
                <span>08139777878</span>
              </li>
              <li className="flex items-start gap-2 text-era-gray-500">
                <Phone size={16} className="mt-0.5 text-primary shrink-0" />
                <span>+234 811 386 1126</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-era-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-era-gray-500">
          <div className="flex items-center gap-3">
            <p>&copy; {new Date().getFullYear()} ERA Academy</p>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <a href="mailto:info@era.com.ng" className="hover:text-primary transition-colors">info@era.com.ng</a>
            <span>·</span>
            <span>Lagos, NG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
