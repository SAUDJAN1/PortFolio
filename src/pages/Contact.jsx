// ContactFooter.jsx
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react"; // added Facebook

export default function Contact() {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Get In Touch</h2>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-blue-600" />
            <a href="mailto:SyedSaudJan@gmail.com" className="hover:text-blue-400 transition">
              SyedSaudJan@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-blue-600" />
            <a href="tel:+923128036794" className="hover:text-blue-400 transition">
              +92-3128036794
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-blue-600" />
            Peshawar, Pakistan
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About Me</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Follow & Subscribe */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">Follow Me</h2>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/syedsaudjan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/SaudJan1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Github size={28} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61581307782024" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Facebook size={28} />
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-blue-500">Subscribe to Updates</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Syed Saud Jan. All rights reserved.
      </div>
    </footer>
  );
}