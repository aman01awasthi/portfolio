import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900 z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-white font-bold text-xl">Amandeep</span>
          <div className="hidden md:flex gap-8">
            {navlinks.map((navlink, i) => (
              <a
                href={navlink.href}
                key={i}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                {navlink.label}
              </a>
            ))}
          </div>
            <button className="md:hidden text-white" onClick={()=> setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</button>
        </div>
          {isOpen && (
            <div className="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4">
              {navlinks.map((navlink, i) => (
                <a
                  href={navlink.href}
                  key={i}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  onClick={()=> setIsOpen(false)}
                >
                  {navlink.label}
                </a>
              ))}
            </div>
          )}
      </nav>
    </>
  );
};

export default Navbar;
