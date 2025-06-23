import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Clients & Reviews", href: "#clients" },
    { name: "Team", href: "#team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      if (window.scrollY > heroHeight - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-colors duration-300">
      <div className={`text-4xl font-bold ${scrolled ? "text-white" : "text-black"} transition`}>
        69pixels.
      </div>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex md:gap-6 lg:gap-10 text-sm font-bold items-center ${
          scrolled ? "text-white" : "text-black"
        } transition`}
      >
        {navItems.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </div>

      <button
        className={`hidden md:flex px-5 py-2 rounded hover:bg-black transition ${scrolled ? "text-black bg-white" : "text-white bg-[#1a1a1a]"}`}
      >
        Discuss your project
      </button>

      {/* Mobile Icon */}
      <div className="md:hidden text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black flex flex-col items-start px-6 py-4 gap-4 shadow-lg md:hidden transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-[#1a1a1a] text-white px-4 py-2 rounded hover:bg-black transition">
            Discuss your project
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
