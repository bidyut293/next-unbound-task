'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { 
      label: 'Home', 
      hasDropdown: true,
      subItems: ['Homepage', 'About Us', 'Our Story']
    },
    { 
      label: 'Clients', 
      hasDropdown: true,
      subItems: ['Client Portal', 'Case Studies', 'Testimonials']
    },
    { 
      label: 'Services', 
      hasDropdown: true,
      subItems: ['Web Development', 'Mobile Apps', 'Consulting']
    },
    { 
      label: 'Projects', 
      hasDropdown: true,
      subItems: ['Recent Work', 'Portfolio', 'Success Stories']
    },
    { 
      label: 'About', 
      hasDropdown: true,
      subItems: ['Our Team', 'Company History', 'Mission']
    },
    { 
      label: 'Contact', 
      hasDropdown: false,
      subItems: []
    }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className={`w-full absolute max-w-[1811px] px-4 sm:px-6 lg:px-[166px] py-4 sm:py-6 lg:py-[64px] ${className}`}>
      <div className="flex justify-between items-start w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/img_logo_lift_2022_b_png.png"
            alt="ATSU Business Solutions"
            width={124}
            height={48}
            className="w-20 h-8 sm:w-28 sm:h-10 lg:w-[124px] lg:h-[48px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-[44px]">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.hasDropdown ? (
                <button
                  className="flex items-center gap-1 text-global-4 text-lg xl:text-[20px] font-jost font-medium leading-[29px] hover:text-global-3 transition-colors duration-200"
                  onClick={() => toggleDropdown(item.label)}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <Image
                    src="/images/img_arrow.svg"
                    alt=""
                    width={8}
                    height={24}
                    className="w-2 h-6 transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>
              ) : (
                <button className="text-global-4 text-lg xl:text-[20px] font-jost font-medium leading-[29px] hover:text-global-3 transition-colors duration-200">
                  {item.label}
                </button>
              )}
              
              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 bg-global-3 rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem}
                      className="block w-full text-left px-4 py-2 text-global-4 hover:bg-global-2 transition-colors duration-200"
                      role="menuitem"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search/Link Icon */}
        <div className="hidden lg:block">
          <Image
            src="/images/img_vector.svg"
            alt="Search"
            width={28}
            height={22}
            className="w-6 h-5 xl:w-[28px] xl:h-[22px] cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-global-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden mt-4 bg-global-3 rounded-lg p-4">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-global-2 last:border-b-0">
              {item.hasDropdown ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full py-3 text-global-4 font-jost font-medium"
                    onClick={() => toggleDropdown(item.label)}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <Image
                      src="/images/img_arrow.svg"
                      alt=""
                      width={8}
                      height={24}
                      className={`w-2 h-6 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-4 pb-2">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem}
                          className="block w-full text-left py-2 text-global-4 hover:text-global-3 transition-colors duration-200"
                          role="menuitem"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button className="w-full text-left py-3 text-global-4 font-jost font-medium hover:text-global-3 transition-colors duration-200">
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;