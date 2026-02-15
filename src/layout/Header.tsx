import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/imgs/logo-top.png';

// Import your data directly
import pestServices from '../data/pestControl.json';
import cleaningServices from '../data/cleaning.json';
import otherServices from '../data/other.json';
import supplies from '../data/supplies.json';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track which dropdown is open (only one allowed)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Helper to close mobile menu AND reset dropdowns when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Handler to toggle specific dropdowns exclusively
  const handleToggle = (e: React.MouseEvent, title: string) => {
    e.preventDefault(); // Stop browser from toggling automatically
    // If it's already open, close it (null). Otherwise, open this one (title).
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const navSections = [
    {
      title: "Pest Control",
      path: "/services/pest-control",
      items: pestServices
    },
    {
      title: "Cleaning",
      path: "/services/cleaning",
      items: cleaningServices
    },
    {
      title: "Supplies",
      path: "/supplies",
      items: supplies
    },
    {
      title: "Other Services",
      path: "/services/other",
      items: otherServices
    }
  ];

  const renderNavLinks = () => (
    <>
      {/* 1. Home Link */}
      <li>
        <Link to="/" onClick={closeMenu} className="font-medium">Home</Link>
      </li>

      {/* 2. Dynamic Category Dropdowns */}
      {navSections.map((section) => (
        <li key={section.title} className="relative z-50">
          {/* Controlled <details>: We explicitly tell it to be 'open' only if it matches our state */}
          <details open={activeDropdown === section.title}>
            <summary 
              onClick={(e) => handleToggle(e, section.title)}
              className="flex items-center gap-1 font-medium hover:text-primary cursor-pointer select-none"
            >
              {section.title}
              {/* CHEVRON FIX: 
                  Rotation is now controlled by React state (activeDropdown), 
                  ensuring it never gets stuck in the wrong position.
              */}
              
            </summary>
            
            {/* Submenu Items */}
            {/* bg-base-100 ensures correct color in both Light & Dark modes */}
            <ul className="p-2 bg-base-100 rounded-box w-52 shadow-lg z-[100]">
              <li className="font-bold text-primary border-b border-base-content/10 mb-2 pb-1">
                <Link to={section.path} onClick={closeMenu}>All {section.title}</Link>
              </li>

              {section.items.map((item) => (
                <li key={item.id}>
                  <Link 
                    to={section.title === "Supplies" ? `/supplies/${item.slug}` : `/service/${item.slug}`} 
                    onClick={closeMenu}
                    className="py-2 text-sm text-base-content/80 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}

      {/* 3. Static Links */}
      <li>
        <Link to="/contact" onClick={closeMenu} className="font-medium">Contact</Link>
      </li>
    </>
  );

  return (
    // bg-base-100 sets the correct background for both modes
    // text-base-content sets the correct text color for both modes
    <div className="sticky top-0 z-50 w-full shadow-md bg-base-100 text-base-content">
      <div className="navbar max-w-7xl mx-auto px-4">
        
        {/* --- Logo Section (Image Only) --- */}
        <div className="flex-1">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src={logo} alt="Pest Control Rajshahi" className="h-10 w-auto" />
          </Link>
        </div>

        {/* --- Desktop Menu --- */}
        <div className="hidden lg:flex flex-none items-center">
          <ul className="menu menu-horizontal px-1 gap-1">
            {renderNavLinks()}
          </ul>
          
          <a href="tel:+8801326521133" className="btn btn-primary btn-sm ml-4 text-white gap-2 rounded-full border-none">
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+880 1326-521133</span>
          </a>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="flex-none lg:hidden">
          <button 
            className="btn btn-square btn-ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-xl border-t border-base-content/10 z-40 lg:hidden h-screen overflow-y-auto pb-20">
          <ul className="menu p-4 w-full text-base-content">
            {renderNavLinks()}
            
            <div className="mt-6 px-2">
              <a href="tel:+8801326521133" className="btn btn-primary w-full text-white rounded-lg">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;