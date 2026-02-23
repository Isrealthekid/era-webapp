import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-era-gray-900 text-era-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-3xl text-primary">ERA</span>
            <p className="mt-4 text-sm leading-relaxed">
              Engineering Resources Academy — building great futures through proper guidance, technical training, and industry connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Trainings", to: "/trainings" },
                { label: "Blog", to: "/blog" },
                { label: "Gallery", to: "/gallery" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>Technical Training</li>
              <li>Soft Skills Development</li>
              <li>Internship Placement</li>
              <li>Career Mentorship</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@era.com.ng" className="hover:text-primary transition-colors">info@era.com.ng</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-primary shrink-0" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-era-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-era-gray-500">
          <p>&copy; {new Date().getFullYear()} ERA Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
