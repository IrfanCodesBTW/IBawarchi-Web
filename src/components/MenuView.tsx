/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MENU_ITEMS, CATEGORIES, HOTLINKS, CATEGORY_IMAGES, getFoodItemImage } from '../data';
import { MenuItem } from '../types';
import { Search, Sparkles, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuViewProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  savedFeastIds: string[];
  onToggleFeastItem: (id: string) => void;
  activeItemForModal: MenuItem | null;
  onSetActiveItemForModal: (item: MenuItem | null) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({
  selectedCategory,
  onSelectCategory,
  savedFeastIds,
  onToggleFeastItem,
  activeItemForModal,
  onSetActiveItemForModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  // Sync category scroll bar if a different visual trigger selects it
  useEffect(() => {
    const activeBtn = document.getElementById(`nav-chip-${selectedCategory}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedCategory]);

  // Handle global search + category filter + veg filter
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesVeg = !vegOnly || item.isVeg;

    return matchesSearch && matchesCategory && matchesVeg;
  });

  // Group elements for section rendering if 'all' is selected
  const categoriesToRender =
    selectedCategory === 'all'
      ? CATEGORIES.filter((c) => c.id !== 'all')
      : CATEGORIES.filter((c) => c.id === selectedCategory);

  // Return specific category images
  const getCategoryImage = (catId: string) => {
    return CATEGORY_IMAGES[catId] || HOTLINKS.heroBiryani;
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 py-36 relative">
      <div className="fixed inset-0 bg-[radial-gradient(#C79A52_0.3px,transparent_0.3px)] bg-[size:32px_32px] opacity-[0.03] pointer-events-none"></div>
      
      {/* 1. Header Banner & Search Widget */}
      <section className="flex flex-col gap-8 mb-20 text-center">
        <div className="select-none flex flex-col items-center">
          <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold"></span>
            EXPERIENCE THE FLAVORS
          </span>
          <h1 className="font-serif text-4xl md:text-[56px] tracking-tight text-warm-ivory uppercase leading-none font-bold mt-2">
            The Royal Menu
          </h1>
          <div className="w-16 h-[2px] bg-antique-gold mx-auto mt-6 opacity-95 rounded-full"></div>
        </div>

        {/* Search Field & Veg Toggle Wrapper */}
        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 items-stretch mt-6">
          <div className="relative w-full group flex-1">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-antique-gold/50 group-focus-within:text-antique-gold transition-colors duration-300" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search master dishes (e.g. Tandoori, Biryani, Naan)..."
              className="w-full bg-[#0a0a0a]/80 border-b border-antique-gold/20 focus:border-antique-gold text-warm-ivory py-5 pl-14 pr-4 text-sm font-sans focus:outline-none focus:ring-0 placeholder-stone-600 transition-colors"
            />
          </div>

          {/* Vegetarian Mode Toggle - Clean Elegant border design */}
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`px-8 py-4 border font-subheader text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2.5 select-none cursor-pointer rounded-none transition-all duration-300 ${
              vegOnly
                ? 'border-green-600/80 bg-green-950/20 text-green-400 font-extrabold shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                : 'border-white/10 text-stone-400 hover:border-white/20 hover:text-warm-ivory'
            }`}
          >
            <Filter size={11} className="stroke-[2.5px]" />
            VEG ONLY
            {vegOnly && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-0.5" />}
          </button>
        </div>
      </section>

      {/* 2. Sticky Horizontal Category Rail */}
      <section className="border-b border-white/[0.04] sticky top-20 z-40 bg-[#0B0705]/95 backdrop-blur-3xl pb-4 pt-3 -mx-6 px-6 overflow-x-auto scrollbar-hide flex gap-4 w-[100vw] md:w-[100%] md:mx-0 select-none shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex gap-4 min-w-max pb-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`nav-chip-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-6 py-3 border text-[10px] md:text-xs font-subheader tracking-[0.2em] transition-all duration-300 cursor-pointer rounded-none font-bold uppercase ${
                  isActive
                    ? 'border-antique-gold bg-antique-gold/10 text-antique-gold font-black shadow-[0_0_15px_rgba(199,154,82,0.15)]'
                    : 'border-white/[0.04] text-stone-400 hover:border-white/15 hover:text-warm-ivory'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Sort Options - Placed exactly in the circled area */}
      <div className="w-full flex justify-end mt-6 md:mt-8 -mb-10 md:-mb-14 select-none relative z-10">
        <div className="flex items-center gap-3 bg-[#0B0705]/40 border border-white/[0.03] px-4 py-2.5 rounded-xl shadow-lg backdrop-blur-md">
          <span className="text-[10px] font-subheader text-stone-500 uppercase tracking-widest font-bold self-center mr-1">
            Sort:
          </span>
          <button
            onClick={() => setSortBy(sortBy === 'price-asc' ? 'default' : 'price-asc')}
            className={`px-4 py-2 border text-[10px] font-subheader tracking-[0.15em] transition-all duration-300 cursor-pointer rounded-none font-bold uppercase ${
              sortBy === 'price-asc'
                ? 'border-antique-gold bg-antique-gold/10 text-antique-gold font-black shadow-[0_0_10px_rgba(199,154,82,0.15)]'
                : 'border-white/[0.04] text-stone-450 hover:border-white/15 hover:text-warm-ivory'
            }`}
          >
            Low to High
          </button>
          <button
            onClick={() => setSortBy(sortBy === 'price-desc' ? 'default' : 'price-desc')}
            className={`px-4 py-2 border text-[10px] font-subheader tracking-[0.15em] transition-all duration-300 cursor-pointer rounded-none font-bold uppercase ${
              sortBy === 'price-desc'
                ? 'border-antique-gold bg-antique-gold/10 text-antique-gold font-black shadow-[0_0_10px_rgba(199,154,82,0.15)]'
                : 'border-white/[0.04] text-stone-450 hover:border-white/15 hover:text-warm-ivory'
            }`}
          >
            High to Low
          </button>
        </div>
      </div>

      {/* 3. Render Food Course Sections */}
      <div className="flex flex-col gap-20 md:gap-28 mt-20 w-full">
        {selectedCategory === 'all' && sortBy !== 'default' ? (
          // Render a single globally-sorted list when sorting is active under "All"
          <section className="w-full flex flex-col pt-4">
            
            {/* Flat List Head Banner */}
            <div className="flex items-center gap-6 mb-14 select-none">
              <h2 className="font-serif text-xl md:text-3xl font-bold uppercase tracking-[0.25em] text-antique-gold">
                {sortBy === 'price-asc' ? 'All Dishes (Cheapest First)' : 'All Dishes (Premium First)'}
              </h2>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-antique-gold/15 to-transparent"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
              
              {/* Visual Featured Image Column */}
              <div className="lg:col-span-5 w-full h-[220px] md:h-[320px] lg:h-[520px] overflow-hidden relative pointed-arch-box border border-antique-gold/20 shadow-[0_20px_45px_rgba(0,0,0,0.85)] group">
                <img
                  alt="All Bawarchi Delicacies"
                  className="w-full h-full object-cover origin-center scale-100 group-hover:scale-105 transition-transform duration-[2.5s] ease-out select-none"
                  src={HOTLINKS.heroBiryani}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0705] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-10 left-10 z-10 flex flex-col select-none">
                  <span className="font-subheader text-[10px] text-antique-gold uppercase tracking-[0.25em] font-extrabold">
                    Sorted Menu Selection
                  </span>
                  <h4 className="font-serif text-xl md:text-3xl text-warm-ivory font-bold mt-2">
                    {sortBy === 'price-asc' ? 'Cheapest Delicacies' : 'Premium Nizami Feast'}
                  </h4>
                </div>
              </div>

              {/* Items Description Panel */}
              <div className="lg:col-span-7 flex flex-col gap-6 w-full">
                {[...filteredItems]
                  .sort((a, b) => {
                    if (sortBy === 'price-asc') return a.price - b.price;
                    if (sortBy === 'price-desc') return b.price - a.price;
                    return 0;
                  })
                  .map((item) => {
                    return (
                      <motion.div
                        key={item.id}
                        whileHover={{ x: 6, transition: { duration: 0.2 } }}
                        className="group bg-[#0e0a07]/80 border border-white/[0.04] p-7 cursor-pointer hover:border-antique-gold/20 hover:bg-[#120D09] hover:shadow-[0_15px_35px_rgba(0,0,0,0.85)] rounded-2xl flex justify-between items-start gap-6 transition-all duration-300 select-none relative gold-reflection"
                        onClick={() => onSetActiveItemForModal(item)}
                        id={`dish-${item.id}`}
                      >
                        <div className="flex-1 flex flex-col text-left">
                          <div className="flex items-center gap-3 mb-3 flex-wrap">
                            <div
                              className={`w-3.5 h-3.5 border flex items-center justify-center rounded-none select-none ${
                                item.isVeg ? 'border-green-600/60 bg-green-950/20' : 'border-red-650/60 bg-red-950/20'
                              }`}
                              title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                            </div>

                            <h3 className="font-serif text-lg text-stone-100 group-hover:text-antique-gold transition-colors duration-300 font-bold leading-snug">
                              {item.name}
                            </h3>

                            {item.isChefSpecial && (
                              <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-antique-gold font-subheader tracking-[0.2em] ml-1.5 animate-pulse bg-antique-gold/10 px-2 py-0.5 rounded-none">
                                <Sparkles size={9} className="w-2.5 h-2.5" /> REVERED
                              </span>
                            )}
                          </div>

                          <p className="font-sans text-[13px] text-stone-400 leading-relaxed mt-2.5 line-clamp-2 md:line-clamp-none">
                            {item.description}
                          </p>

                          <span className="text-[9px] font-subheader text-[#8E8272] group-hover:text-antique-gold font-bold tracking-widest uppercase mt-5 block group-hover:translate-x-1 transition-all duration-300">
                            EXPLORE THE CRAFT & ORIGINS · READ MORE
                          </span>
                        </div>

                        <div className="flex flex-col items-end gap-5 select-none self-stretch justify-between">
                          <span className="font-subheader text-base md:text-lg font-black text-stone-100 whitespace-nowrap leading-none mt-1">
                            ₹{item.price}
                            {item.priceFull && (
                              <span className="text-[#8E8272] font-normal md:text-[11px] text-[10px] ml-1 bg-[#16100B] px-1.5 py-0.5 ml-1.5">
                                Full F{item.priceFull}
                              </span>
                            )}
                          </span>

                          <button
                            className="px-4 py-2 text-[9px] font-bold font-subheader tracking-[0.2em] uppercase cursor-pointer select-none border border-antique-gold/25 text-antique-gold bg-antique-gold/5 group-hover:bg-antique-gold group-hover:text-deep-charcoal group-hover:border-antique-gold transition-all duration-300 rounded-none shrink-0"
                          >
                            DETAILS
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>

            </div>
          </section>
        ) : (
          categoriesToRender.map((cat) => {
            // Filter items matching section category and sort by price if selected
            const sectionItems = filteredItems
              .filter((item) => item.category === cat.id)
              .sort((a, b) => {
                if (sortBy === 'price-asc') return a.price - b.price;
                if (sortBy === 'price-desc') return b.price - a.price;
                return 0;
              });
            
            if (sectionItems.length === 0) return null;

            return (
              <section key={cat.id} className="w-full flex flex-col pt-4">
                
                {/* Category Head Banner */}
                <div className="flex items-center gap-6 mb-14 select-none">
                  <h2 className="font-serif text-xl md:text-3xl font-bold uppercase tracking-[0.25em] text-antique-gold">
                    {cat.label}
                  </h2>
                  <div className="flex-grow h-[1px] bg-gradient-to-r from-antique-gold/15 to-transparent"></div>
                </div>

                {/* Grid content columns (Featured image panel + Wish menu list panel) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
                  
                  {/* Visual Featured Image Column */}
                  <div className="lg:col-span-5 w-full h-[220px] md:h-[320px] lg:h-[520px] overflow-hidden relative pointed-arch-box border border-antique-gold/20 shadow-[0_20px_45px_rgba(0,0,0,0.85)] group">
                    <img
                      alt={`Chef special selection visual for ${cat.label}`}
                      className="w-full h-full object-cover origin-center scale-100 group-hover:scale-105 transition-transform duration-[2.5s] ease-out select-none"
                      src={getCategoryImage(cat.id)}
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle vignette blending with background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0705] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-10 left-10 z-10 flex flex-col select-none">
                      <span className="font-subheader text-[10px] text-antique-gold uppercase tracking-[0.25em] font-extrabold">
                        Bawarchi Signature
                      </span>
                      <h4 className="font-serif text-xl md:text-3xl text-warm-ivory font-bold mt-2">
                        Chef's Traditional Platters
                      </h4>
                    </div>
                  </div>

                  {/* Items Description Panel (List cards layout grid) */}
                  <div className="lg:col-span-7 flex flex-col gap-6 w-full">
                    {sectionItems.map((item) => {
                      return (
                        <motion.div
                          key={item.id}
                          whileHover={{ x: 6, transition: { duration: 0.2 } }}
                          className="group bg-[#0e0a07]/80 border border-white/[0.04] p-7 cursor-pointer hover:border-antique-gold/20 hover:bg-[#120D09] hover:shadow-[0_15px_35px_rgba(0,0,0,0.85)] rounded-2xl flex justify-between items-start gap-6 transition-all duration-300 select-none relative gold-reflection"
                          onClick={() => onSetActiveItemForModal(item)}
                          id={`dish-${item.id}`}
                        >
                          <div className="flex-1 flex flex-col text-left">
                            {/* Title + Icons line */}
                            <div className="flex items-center gap-3 mb-3 flex-wrap">
                              {/* Veg / Non-Veg Border Square Dot Marker Indicator */}
                              <div
                                className={`w-3.5 h-3.5 border flex items-center justify-center rounded-none select-none ${
                                  item.isVeg ? 'border-green-600/60 bg-green-950/20' : 'border-red-650/60 bg-red-950/20'
                                }`}
                                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                              </div>

                              <h3 className="font-serif text-lg text-stone-100 group-hover:text-antique-gold transition-colors duration-300 font-bold leading-snug">
                                {item.name}
                              </h3>

                              {item.isChefSpecial && (
                                <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-antique-gold font-subheader tracking-[0.2em] ml-1.5 animate-pulse bg-antique-gold/10 px-2 py-0.5 rounded-none">
                                  <Sparkles size={9} className="w-2.5 h-2.5" /> REVERED
                                </span>
                              )}
                            </div>

                            <p className="font-sans text-[13px] text-stone-400 leading-relaxed mt-2.5 line-clamp-2 md:line-clamp-none">
                              {item.description}
                            </p>

                            <span className="text-[9px] font-subheader text-[#8E8272] group-hover:text-antique-gold font-bold tracking-widest uppercase mt-5 block group-hover:translate-x-1 transition-all duration-300">
                              EXPLORE THE CRAFT & ORIGINS · READ MORE
                            </span>
                          </div>

                          {/* Portion Pricing Layout column */}
                          <div className="flex flex-col items-end gap-5 select-none self-stretch justify-between">
                            <span className="font-subheader text-base md:text-lg font-black text-stone-100 whitespace-nowrap leading-none mt-1">
                              ₹{item.price}
                              {item.priceFull && (
                                <span className="text-[#8E8272] font-normal md:text-[11px] text-[10px] ml-1 bg-[#16100B] px-1.5 py-0.5 ml-1.5">
                                  Full F{item.priceFull}
                                </span>
                              )}
                            </span>

                            <button
                              className="px-4 py-2 text-[9px] font-bold font-subheader tracking-[0.2em] uppercase cursor-pointer select-none border border-antique-gold/25 text-antique-gold bg-antique-gold/5 group-hover:bg-antique-gold group-hover:text-deep-charcoal group-hover:border-antique-gold transition-all duration-300 rounded-none shrink-0"
                            >
                              DETAILS
                            </button>
                          </div>

                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              </section>
            );
          })
        )}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-24 w-full select-none">
          <p className="font-serif text-xl text-stone-500">
            No culinary masterpieces match your search criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setVegOnly(false);
              setSortBy('default');
              onSelectCategory('all');
            }}
            className="mt-8 border border-antique-gold/40 text-antique-gold font-bold font-subheader text-[10px] tracking-widest uppercase px-10 py-5 cursor-pointer hover:bg-antique-gold hover:text-deep-charcoal transition-all duration-300 rounded-none bg-transparent"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 4. MODAL: Detailed Culinary Masterpiece Visualizer Explorer */}
      <AnimatePresence>
        {activeItemForModal && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-4 bg-black/95 backdrop-blur-md cursor-pointer"
            onClick={() => onSetActiveItemForModal(null)}
          >
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[92%] max-w-2xl bg-[#0B0705] border border-white/10 p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] rounded-2xl flex flex-col md:flex-row gap-6 md:gap-8 relative max-h-[85vh] md:max-h-[95vh] overflow-y-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Cross Trigger */}
              <button
                onClick={() => onSetActiveItemForModal(null)}
                className="absolute top-4 right-4 md:top-5 md:right-5 text-stone-300 hover:text-antique-gold hover:rotate-90 transition-all p-3 md:p-2.5 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer z-20"
                title="Close modal"
              >
                <X size={18} />
              </button>

              {/* Left side: Golden Mask Nizami Arch image container */}
              <div className="w-full md:w-1/2 aspect-[3/4.5] md:h-auto overflow-hidden relative border border-antique-gold/20 rounded-xl bg-[#0a0a0a] mt-4 md:mt-0 select-none shadow-lg">
                <img
                  alt={activeItemForModal.name}
                  className="w-full h-full object-cover opacity-85 select-none"
                  src={getFoodItemImage(activeItemForModal.name, activeItemForModal.category)}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
              </div>

              {/* Right side: Editorial text descriptive panels */}
              <div className="w-full md:w-1/2 flex flex-col justify-between pt-2 text-left">
                <div className="flex flex-col">
                  {/* Category metadata + Veg label */}
                  <div className="flex items-center gap-2 mb-3.5 select-none">
                    {/* Veg Indicator Dot */}
                    <div
                      className={`w-3.5 h-3.5 border flex items-center justify-center ${
                        activeItemForModal.isVeg ? 'border-green-600/80 bg-green-950/20' : 'border-red-650/80 bg-red-950/20'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${activeItemForModal.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>
                    <span className="text-[10px] font-bold font-subheader tracking-widest text-antique-gold uppercase">
                      {activeItemForModal.categoryLabel}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-stone-100 mb-4 leading-snug">
                    {activeItemForModal.name}
                  </h2>
                  <div className="w-10 h-[2px] bg-antique-gold mb-5 opacity-90 rounded-full"></div>

                  <p className="font-sans text-[13.5px] text-stone-400 leading-relaxed mb-6">
                    {activeItemForModal.description}
                  </p>

                  {/* Crafting Note */}
                  <div className="border-l-2 border-antique-gold/30 pl-4 py-2.5 bg-antique-gold/[0.01]">
                    <p className="font-sans text-[11.5px] italic text-[#908472] leading-relaxed">
                      Spiciness level: Medium {activeItemForModal.category === 'tandoori-snacks' ? 'with smoky oak nodes' : 'with rich cashew oil nodes'}. Hand-prepared to order and serves 1-2 patrons.
                    </p>
                  </div>
                </div>

                {/* Bottom Portion Pricing and reservation feast button */}
                <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-white/[0.04] w-full">
                  <div className="flex justify-between items-center select-none">
                    <span className="text-[10.5px] font-subheader text-stone-500 uppercase tracking-widest font-bold">
                      FINE PRICE
                    </span>
                    <span className="font-subheader text-base md:text-lg font-black text-stone-100">
                      ₹{activeItemForModal.price}
                      {activeItemForModal.priceFull && (
                        <span className="text-xs font-normal text-stone-500 ml-2">
                          / Full portion ₹{activeItemForModal.priceFull}
                        </span>
                      )}
                    </span>
                  </div>

                  <a
                    href="tel:9848832654"
                    className="w-full py-4.5 rounded-none font-subheader text-xs tracking-widest uppercase font-black text-center bg-antique-gold text-deep-charcoal border border-antique-gold cursor-pointer transition-all hover:bg-[#dca959] block shadow-md"
                  >
                    Call to Order: 98488 32654
                  </a>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
