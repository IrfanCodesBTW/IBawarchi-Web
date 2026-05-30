/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { MenuView } from './components/MenuView';
import { StoryView } from './components/StoryView';
import { Logo } from './components/Logo';
import { MenuItem } from './types';
import { Home, UtensilsCrossed, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'menu' | 'story'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [savedFeastIds, setSavedFeastIds] = useState<string[]>([]);
  const [activeItemForModal, setActiveItemForModal] = useState<MenuItem | null>(null);

  // Custom Cursor tracking coordinates and states
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice(true);
      window.removeEventListener('touchstart', detectTouch);
    };
    window.addEventListener('touchstart', detectTouch);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('clickable') ||
          window.getComputedStyle(target).cursor === 'pointer';
        setCursorHovered(!!isClickable);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('touchstart', detectTouch);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Sync Feast entries with LocalStorage on init
  useEffect(() => {
    const saved = localStorage.getItem('bawarchi_feast');
    if (saved) {
      try {
        setSavedFeastIds(JSON.parse(saved));
      } catch (err) {
        console.error('Failed reading feast localstorage', err);
      }
    }
  }, []);

  // Set the top scroll on view change to maintain high quality feel
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  // Feast pre-select mechanics
  const handleToggleFeastItem = (id: string) => {
    let updated;
    if (savedFeastIds.includes(id)) {
      updated = savedFeastIds.filter((item) => item !== id);
    } else {
      updated = [...savedFeastIds, id];
    }
    setSavedFeastIds(updated);
    localStorage.setItem('bawarchi_feast', JSON.stringify(updated));
  };

  // Category routing trigger from homepage cards
  const handleNavigateToCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('menu');
  };

  // Nav trigger for standard switches
  const handleNavigateToView = (view: 'home' | 'menu' | 'story') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-deep-charcoal text-warm-ivory font-sans antialiased flex flex-col justify-between overflow-x-hidden leading-relaxed relative selection:bg-antique-gold/30 selection:text-white">
      
      {/* Liquid Luxury Aurora Mesh Glow Orbs Floating silently behind main panels */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-antique-gold/[0.03] blur-[120px] animate-float-slow" />
        <div className="absolute top-[45%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-antique-gold/[0.02] blur-[140px] animate-float-reverse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-[#dfaf65]/[0.02] blur-[100px] animate-pulse-slow" />
      </div>

      {/* Luxury Desk Custom Cursor follower */}
      {!isTouchDevice && (
        <>
          <div
            className="custom-cursor hidden md:block"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`
            }}
          />
          <div
            className="custom-cursor-follower hidden md:block"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              width: cursorHovered ? '54px' : '32px',
              height: cursorHovered ? '54px' : '32px',
              backgroundColor: cursorHovered ? 'rgba(199, 154, 82, 0.05)' : 'transparent',
              borderColor: cursorHovered ? '#C79A52' : 'rgba(199, 154, 82, 0.35)'
            }}
          />
        </>
      )}

      {/* Dynamic Top Sticky Header Navigation */}
      <Navbar
        currentView={currentView}
        onViewChange={handleNavigateToView}
      />

      {/* Main Dynamic Workspace Panel Area */}
      <main className="flex-grow w-full relative z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center"
          >
            {currentView === 'home' && (
              <HomeView
                onNavigateToCategory={handleNavigateToCategory}
                onNavigateToView={handleNavigateToView}
                savedFeastIds={savedFeastIds}
                onToggleFeastItem={handleToggleFeastItem}
              />
            )}
            {currentView === 'menu' && (
              <MenuView
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                savedFeastIds={savedFeastIds}
                onToggleFeastItem={handleToggleFeastItem}
                activeItemForModal={activeItemForModal}
                onSetActiveItemForModal={setActiveItemForModal}
              />
            )}
            {currentView === 'story' && (
              <StoryView
                onNavigateToView={handleNavigateToView}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Primary Shared Footer */}
      <footer className="w-full bg-[#030303] border-t border-white/[0.04] relative z-10 py-16 px-6 select-none flex flex-col items-center text-center pb-28 md:pb-16 mt-auto">
        <div className="mb-10 transform scale-95 md:scale-100 hover:scale-102 transition-transform duration-500">
          <Logo variant="full" size="md" />
        </div>

        {/* Global links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
          {[
            { label: 'Our Story', action: () => setCurrentView('story') },
            { label: 'Full Menu', action: () => setCurrentView('menu') },
            { label: 'Privacy Policy', action: () => {} }
          ].map((link, idx) => (
            <button
              key={idx}
              onClick={link.action}
              className="font-subheader text-xs tracking-[0.2em] text-stone-400 hover:text-antique-gold transition-colors duration-300 uppercase font-semibold cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <p className="font-subheader text-[10px] tracking-[0.25em] text-stone-600 uppercase font-medium">
          © 2026 INDIAN BAWARCHI RESTAURANT. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {/* Interactive Bottom Nav Bar (Mobile-Only Floating Cluster) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-deep-charcoal/80 border-t border-white/[0.04] backdrop-blur-2xl flex justify-around items-center h-20 px-3 pb-3 rounded-t-2xl select-none shadow-[0_-15px_40px_rgba(0,0,0,0.7)] animate-slide-up">
        {[
          { id: 'home', label: 'Home', icon: <Home size={18} /> },
          { id: 'menu', label: 'Menu', icon: <UtensilsCrossed size={18} /> },
          { id: 'story', label: 'Story', icon: <BookOpen size={18} /> }
        ].map((tab) => {
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.id === 'menu') setSelectedCategory('all');
                setCurrentView(tab.id as any);
              }}
              className={`flex flex-col items-center justify-center py-2 shrink-0 transition-all cursor-pointer w-1/3 ${
                isActive
                  ? 'text-antique-gold font-bold scale-105'
                  : 'text-stone-400 hover:text-warm-ivory opacity-85'
              }`}
            >
              <div className={`p-1 rounded-full transition-transform duration-300 ${isActive ? 'translate-y-[-2px]' : ''}`}>
                {tab.icon}
              </div>
              <span className="font-subheader text-[9px] tracking-[0.15em] uppercase font-semibold mt-1">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

    </div>
  );
}
