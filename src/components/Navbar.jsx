const Navbar = () => {
  const navlinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <>
      <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-white font-bold text-xl">Amandeep</span>
          <div className="flex gap-8">
            {navlinks.map((navlink, i) => (
              <a href={navlink.href} key={i} className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                {navlink.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
