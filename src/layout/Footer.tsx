import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import companyData from '../data/company.json';
import logo from '../assets/imgs/logo-top.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // CHANGED: Uses base-200 (Theme adaptive) instead of neutral (Always dark)
    <footer className="bg-base-200 text-base-content">
      
      {/* Main Footer Content */}
      <div className="footer p-10 container mx-auto lg:flex items-center justify-between flex-wrap w-full">
        
        {/* Column 1: Brand & About */}
        <aside className="max-w-xs">
          <img 
            src={logo} 
            alt={companyData.name} 
            className="h-12 mb-4" 
          />
          <p className="font-bold text-lg">{companyData.name}</p>
          <p className="text-sm opacity-70 mb-4 leading-relaxed">
            {companyData.tagline} <br/>
            Providing government-certified pest control and cleaning services across all 64 districts of Bangladesh.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a 
              href={companyData.socials.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-circle btn-sm btn-ghost hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href={companyData.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-circle btn-sm btn-ghost hover:bg-blue-700 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={companyData.socials.youtube} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-circle btn-sm btn-ghost hover:bg-red-600 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </aside>

        {/* Column 2: Quick Services */}
        <nav>
          <h6 className="footer-title text-primary opacity-100">Services</h6>
          <Link to="/services/pest-control" className="link link-hover hover:text-primary">Pest Control</Link>
          <Link to="/services/cleaning" className="link link-hover hover:text-primary">Professional Cleaning</Link>
          <Link to="/services/termite-control" className="link link-hover hover:text-primary">Termite Treatment</Link>
          <Link to="/services/water-tank" className="link link-hover hover:text-primary">Water Tank Cleaning</Link>
          <Link to="/supplies" className="link link-hover hover:text-primary">Buy Supplies</Link>
        </nav>

        {/* Column 3: Company Links */}
        <nav>
          <h6 className="footer-title text-primary opacity-100">Company</h6>
          <Link to="/" className="link link-hover hover:text-primary">Home</Link>
          <Link to="/about" className="link link-hover hover:text-primary">About Us</Link>
          <Link to="/contact" className="link link-hover hover:text-primary">Contact</Link>
          <Link to="/career" className="link link-hover hover:text-primary">Careers</Link>
          <Link to="/privacy" className="link link-hover hover:text-primary">Privacy Policy</Link>
        </nav>

        {/* Column 4: Contact Info */}
        <nav>
          <h6 className="footer-title text-primary opacity-100">Contact Us</h6>
          
          <div className="flex items-start gap-3 mb-2">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="opacity-80 max-w-[200px]">{companyData.address}</span>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            <a href={`tel:${companyData.phone}`} className="link link-hover opacity-80 font-medium">
              {companyData.phone}
            </a>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <a href={`mailto:${companyData.email}`} className="link link-hover opacity-80">
              {companyData.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="opacity-80 text-sm">{companyData.workingHours}</span>
          </div>
        </nav>
      </div>

      {/* Copyright Bar - Uses base-300 for slight contrast against the main footer */}
      <div className="footer footer-center p-4 bg-base-300 text-base-content border-t border-base-content/10">
        <aside>
          <p className="opacity-60 text-sm">
            Copyright © {currentYear} - All rights reserved by <span className="text-primary font-bold">{companyData.name}</span>
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;