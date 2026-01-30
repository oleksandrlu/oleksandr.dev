'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'portfolio', href: '#portfolio', label: 'Portfolio' },
  { id: 'capabilities', href: '#capabilities', label: 'Capabilities' },
  { id: 'testimonials', href: '#testimonials', label: 'Testimonials' },
  { id: 'contact', href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container-content container-padding">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wider text-white hover:text-primary transition-colors">
              OLEKSANDR.DEV
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen 
                    ? 'rotate-45 translate-y-2 bg-black' 
                    : 'bg-white group-hover:bg-primary'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen 
                    ? 'opacity-0 bg-black' 
                    : 'bg-white group-hover:bg-primary'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen 
                    ? '-rotate-45 -translate-y-2 bg-black' 
                    : 'bg-white group-hover:bg-primary'
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="h-full flex flex-col items-center justify-center">
          <ul className="space-y-6 sm:space-y-8 text-center">
            {NAV_LINKS.map((link, index) => (
              <li 
                key={link.id}
                className={`transform transition-all duration-500 ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

