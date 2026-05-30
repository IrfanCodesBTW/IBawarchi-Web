/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, CalendarHeart, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'menu' | 'story';
  onViewChange: (view: 'home' | 'menu' | 'story') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'home' | 'menu' | 'story') => {
    onViewChange(view);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#0B0705]/80 backdrop-blur-2xl border-b border-antique-gold/15 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.9)]'
          : 'bg-transparent border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center">
        
        {/* Responsive Branding */}
        <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('home')}>
          <Logo
            variant="horizontal"
            size="sm"
            className="transform group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Desktop Central Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'menu', label: 'MENU' },
            { id: 'story', label: 'OUR STORY' }
          ].map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as any)}
                className={`font-subheader text-xs tracking-[0.25em] uppercase transition-all duration-300 relative py-2 cursor-pointer font-extrabold ${
                  isActive
                    ? 'text-antique-gold'
                    : 'text-stone-400 hover:text-warm-ivory'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-antique-gold/80 transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Action Widgets */}
        <div className="flex items-center gap-4">
          <a
            href="tel:9848832654"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 hover:border-antique-gold/45 text-stone-400 hover:text-antique-gold transition-all duration-300 scale-95 hover:scale-105 hover:shadow-[0_0_15px_rgba(199,154,82,0.15)] bg-black/30"
            title="Call Bawarchi"
            id="nav-call-btn"
          >
            <Phone size={15} />
          </a>
          
          <a
            href="tel:9848832654"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-antique-gold/90 to-brand-secondary hover:from-[#dca959] hover:to-[#dfaf65] text-deep-charcoal font-black font-subheader text-[11px] tracking-[0.25em] px-7 py-4 rounded-none transition-all duration-500 cursor-pointer shadow-[0_10px_25px_rgba(199,154,82,0.15)] hover:shadow-[0_15px_35px_rgba(199,154,82,0.3)] active:scale-95 gold-reflection"
            id="nav-reserve-btn"
          >
            <Phone size={12} className="stroke-[3px]" />
            CALL TO ORDER
          </a>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-stone-300 hover:text-antique-gold bg-black/25 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slidedown Panel with highly polished Liquid styling */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-[#0B0705]/98 backdrop-blur-3xl z-40 flex flex-col justify-center items-center px-6 pb-20 border-t border-white/[0.04]">
          <div className="absolute inset-0 bg-[radial-gradient(#C79A52_0.3px,transparent_0.3px)] bg-[size:24px_24px] opacity-[0.02] pointer-events-none"></div>
          
          <div className="flex flex-col gap-10 text-center relative z-10 w-full max-w-xs">
            {[
              { id: 'home', label: 'HOME' },
              { id: 'menu', label: 'MENU' },
              { id: 'story', label: 'OUR STORY' }
            ].map((item, index) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as any)}
                  className={`font-subheader text-xl tracking-[0.3em] uppercase transition-all duration-300 relative py-2.5 font-bold cursor-pointer ${
                    isActive ? 'text-antique-gold' : 'text-stone-400 hover:text-warm-ivory'
                  }`}
                  style={{ animation: `fadeInUp 0.4s ease forwards ${index * 0.15}s` }}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-antique-gold mx-auto" />
                  )}
                </button>
              );
            })}
            
            <a
              href="tel:9848832654"
              className="mt-10 bg-antique-gold text-deep-charcoal font-black font-subheader text-xs tracking-[0.2em] uppercase py-5 px-6 rounded-none transition-all duration-300 shadow-[0_10px_30px_rgba(199,154,82,0.2)] block text-center"
            >
              CALL TO ORDER
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
