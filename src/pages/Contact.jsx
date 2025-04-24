// ContactFooter.jsx
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 mb-2">
            <Mail size={18} /> SyedSaudJan@gmail.com
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Phone size={18} /> +92-3128036794
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={18} /> ShahAlam Market Lahore, Pakistan
          </p>
        </div>

        {/* Social Media */}
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
