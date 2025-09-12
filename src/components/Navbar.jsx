import { useState, useEffect } from "react";
import logo from "../assets/Rise-n-Grind4.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("home")?.offsetHeight || 0;
      if (window.scrollY >= heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false); // <-- important: reset when scrolling back up
      }
    };

    // Call once in case user reloads page mid-scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-colors duration-500 ${isScrolled ? "bg-gray-900" : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="md:h-18 md:w-18 h-15 w-15 fill-white rounded-full" />
        <span className="text-white font-extrabold text-lg leading-tight">
          RISE-N-GRIND <br /> TRUCKING
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-6 text-white font-semibold">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
        <a href="#contact" className="hover:text-gray-300">Contact Us</a>
        <a
          href="#getaquote"
          className="bg-white text-black px-5 py-2 rounded-full font-bold shadow-md hover:bg-gray-100"
        >
          Get a Quote
        </a>
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
       <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-6 text-black text-lg font-semibold lg:hidden max-h-screen ">

          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
          <a
            href="#getaquote"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-6 py-2 rounded-full"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
