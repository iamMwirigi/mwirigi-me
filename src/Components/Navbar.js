import React, { useState, useEffect } from 'react';
import logo from '../Components/Assets/about-pic.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(window.location.hash || "#about");

  // Update active tab on window hash change
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash || "#about");
    };
    
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex p-5 items-center justify-center space-x-4 flex-nowrap">
        <a
          href="#about"
          onClick={() => handleTabClick("#about")}
          className={`text-grey font-bold hover:text-gray-200 ${
            activeTab === "#about" ? "text-gray-200" : ""
          }`}
        >
          About
        </a>

        <a
          href="#skills"
          onClick={() => handleTabClick("#skills")}
          className={`text-grey font-bold hover:text-gray-200 ${
            activeTab === "#skills" ? "text-gray-200" : ""
          }`}
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => handleTabClick("#projects")}
          className={`text-grey font-bold hover:text-gray-200 ${
            activeTab === "#projects" ? "text-gray-200" : ""
          }`}
        >
          Projects
        </a>

        <a
          href="#pricing"
          onClick={() => handleTabClick("#pricing")}
          className={`text-grey font-bold hover:text-gray-200 ${
            activeTab === "#pricing" ? "text-gray-200" : ""
          }`}
        >
          Pricing
        </a>

        <a
          href="#contact"
          onClick={() => handleTabClick("#contact")}
          className={`text-grey font-bold hover:text-gray-200 ${
            activeTab === "#contact" ? "text-gray-200" : ""
          }`}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
