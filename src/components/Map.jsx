import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Map = () => {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: "url('/connect.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 w-full h-full"></div>

      {/* Content */}
      <div className="relative z-10 w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h2>

          {/* Address */}
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
            <MapPin className="w-6 h-6 text-red-400" />
            <span className="md:text-lg">
              Rise-N-Grind Trucking,<br />
              10030 Green Level Church Road,<br />
              Suite 802-2034, Cary, NC 27519
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
            <Phone className="w-6 h-6 text-blue-400" />
            <span className="md:text-lg">(810) 818-4610</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
            <Mail className="w-6 h-6 text-green-400" />
            <span className="md:text-lg">admin@risengrindtrucking.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="order-2 lg:order-1 w-full h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.7867001542668!2d-78.90248763041538!3d35.820873785719776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acec3c681eca65%3A0x7d268b6e08203820!2s10030%20Green%20Level%20Church%20Road%2C%20Cary%2C%20NC%2027519%2C%20USA!5e0!3m2!1sen!2sin!4v1756035335964!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-12 text-center text-gray-400 text-sm w-[80vw] mx-auto">
        © {new Date().getFullYear()} Rise-N-Grind Trucking. All Rights Reserved.
      </div>
    </section>
  );
};

export default Map;
