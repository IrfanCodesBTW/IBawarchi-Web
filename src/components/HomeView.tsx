/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HOTLINKS, CATEGORIES, CATEGORY_IMAGES } from '../data';
import { ChefHat, Flame, Award, ChevronRight, Phone, MessageSquare, Star, ArrowRight, Check, Heart, Shield, Users, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OptimizedImage } from './OptimizedImage';

interface HomeViewProps {
  onNavigateToCategory: (category: string) => void;
  onNavigateToView: (view: 'home' | 'menu' | 'story') => void;
  savedFeastIds: string[];
  onToggleFeastItem: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToCategory,
  onNavigateToView,
  savedFeastIds,
  onToggleFeastItem,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleToggleFeed = (id: string) => {
    onToggleFeastItem(id);
    setCopiedIndex(id);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  // 1. Signature items data
  const signatureItems = [
    {
      id: 'cb1',
      name: 'Chicken Biryani',
      price: 250,
      description: 'The supreme classic. Tender marinated farm chicken slow dum-cooked with premium aged basmati rice, pure saffron threads, and hand-ground Mughlai spices.',
      image: '/images/dishes/chicken_biryani.png',
      isVeg: false,
      category: 'chicken-biryani',
    },
    {
      id: 'cb5',
      name: 'Chicken Fry Piece Biryani',
      price: 300,
      description: 'An aromatic layering of classic basmati biryani rice crowned with golden, fiery spices-fried tender chicken chunks and crisp curry leaves.',
      image: '/images/dishes/chicken_fry_piece_biryani.png',
      isVeg: false,
      category: 'chicken-biryani',
    },
    {
      id: 'cb6',
      name: 'Special Boneless Chicken Biryani',
      price: 350,
      description: 'Gourmet layering of delicate saffron-infused basmati rice paired with richly spiced, tender, boneless pan-charred chicken breast medallions.',
      image: '/images/dishes/special_boneless_chicken_biryani.png',
      isVeg: false,
      category: 'chicken-biryani',
    },
    {
      id: 'mb1',
      name: 'Mutton Biryani',
      price: 350,
      description: 'Traditional Kachhe Gosht ki Biryani. Select slow-cooked spring lamb pieces marinated inside raw papaya paste and steam-baked under giant iron weight.',
      image: '/images/dishes/mutton_biryani.png',
      isVeg: false,
      category: 'mutton-biryani',
    },
    {
      id: 'cb3',
      name: 'Chicken Family Pack',
      price: 580,
      description: 'A grand imperial serving of our famous Nizami Chicken Dum Biryani, hand-packed inside authentic vessels to serve 3-4 hungry family members.',
      image: '/images/dishes/chicken_family_pack.png',
      isVeg: false,
      category: 'chicken-biryani',
    },
    {
      id: 'mb3',
      name: 'Mutton Family Pack',
      price: 680,
      description: 'Rich, celebratory feast pack of our royal wood-fired Mutton Dum Biryani, generously portioned for a traditional family gathering of 3-4 diners.',
      image: '/images/dishes/mutton_family_pack.png',
      isVeg: false,
      category: 'mutton-biryani',
    },
  ];

  // 2. Popular Secondary items
  const popularDishes = [
    {
      id: 'vc12',
      name: 'Paneer Butter Masala',
      price: 320,
      description: 'Rich cream and cashews tomato gravy cooked with thick malai paneer blocks.',
      image: '/images/dishes/paneer_butter_masala.png',
      isVeg: true,
    },
    {
      id: 'icc11',
      name: 'Butter Chicken',
      price: 320,
      description: 'Our traditional smoky tandoori chicken shreds folded in velvet butter cream.',
      image: '/images/dishes/butter_chicken.png',
      isVeg: false,
    },
    {
      id: 'cs1',
      name: 'Chicken 65',
      price: 320,
      description: 'Crimson-red deep-fried chicken cubes dry-tossed in yogurt chili slurry and curry twigs.',
      image: '/images/dishes/chicken_65.png',
      isVeg: false,
    },
    {
      id: 'ck2',
      name: 'Tandoori Chicken',
      price: 480,
      description: 'Full spring chicken dry skewered with yogurt and Kashmiri red pepper in clay kiln.',
      image: '/images/dishes/tandoori_chicken.png',
      isVeg: false,
    },
  ];

  // 3. Multi-generational reviews list
  const clientReviews = [
    {
      name: 'Khaja Mohiuddin',
      role: 'Family Dinner Guest',
      rating: 5,
      comment: 'Indian Bawarchis Biryani takes me straight back to the old city heritage. The spice consistency is pristine, meat is extremely tender, and the A/C family room is incredibly comfortable for my parents and children.',
    },
    {
      name: 'Shravani Reddy',
      role: 'IT Professional & Food Lover',
      rating: 5,
      comment: 'Best Chicken Fry Piece Biryani in Hyderabad! It has that perfect spicy punch and rich aroma of pure ghee. They use great premium long basmati grains which are light and dry-cooked beautifully.',
    },
    {
      name: 'Syed Adil',
      role: 'Regular Patron',
      rating: 5,
      comment: 'Their Mutton Special Handi cooked on wood coals is a masterpiece. I have been bringing my family here for years. Warm hospitality, spotless hygiene, and very reasonable pricing.',
    },
  ];

  return (
    <div className="w-full flex flex-col pt-16">
      
      {/* 1. Cinematic Hero Section with Elite Liquid Luxury Tone */}
      <section className="relative w-full h-[85vh] min-h-[640px] md:h-[95vh] flex items-center justify-center overflow-hidden text-left py-16">
        {/* Background photo of biryani with steam */}
        <motion.div 
          className="absolute inset-0 z-0 select-none pointer-events-none"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <OptimizedImage
            alt="Authentic Indian Bawarchi premium Hyderabadi Dum Biryani cooked inside dynamic clay copper vessels"
            className="w-full h-full object-cover object-center filter saturate-[1.1]"
            src={HOTLINKS.heroBiryani}
            referrerPolicy="no-referrer"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/75 to-[#0B0705]/50"></div>
          <div className="absolute inset-0 bg-[#0B0705]/40 backdrop-blur-[1px]"></div>
        </motion.div>

        {/* Dynamic rising steam effects mimicking warm kitchen vessel */}
        <div className="absolute inset-y-0 right-[10%] md:right-[20%] z-15 pointer-events-none flex items-center justify-center">
          <div className="relative w-56 h-56 mt-[20%]">
            <div className="steam-particle steam-1"></div>
            <div className="steam-particle steam-2"></div>
            <div className="steam-particle steam-3"></div>
          </div>
        </div>

        {/* Central visual text container */}
        <div className="relative z-20 w-full max-w-[1240px] mx-auto px-6 flex flex-col items-start select-none">
          <span className="inline-flex items-center gap-2 text-antique-gold font-subheader text-xs font-extrabold tracking-[0.4em] uppercase mb-6 bg-antique-gold/10 px-4.5 py-2 border border-antique-gold/20 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold animate-pulse"></span>
            ROYAL HYDERABADI CULINARY ART
          </span>
          
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold text-warm-ivory leading-[1.02] tracking-tight max-w-4xl mb-6">
            The Indian <br />
            <span className="font-serif italic font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-antique-gold via-brand-secondary to-[#ffeecc] animate-gradient-shift bg-[size:200%_200%]">Bawarchi</span>
          </h1>
          
          <p className="font-sans text-base md:text-xl text-[#D9CDB8] leading-relaxed font-light max-w-2xl mb-12">
            Experience rich flavors, aromatic hand-ground spices, and traditional heritage recipes curated painstakingly across generations. Elevating Hyderabad's fine dining tapestry.
          </p>

          <div className="flex flex-wrap gap-5 w-full sm:w-auto">
            <button
              onClick={() => onNavigateToView('menu')}
              className="group relative overflow-hidden bg-antique-gold text-deep-charcoal font-bold font-subheader text-xs tracking-[0.25em] px-10 py-5 transition-all duration-500 rounded-none uppercase cursor-pointer flex items-center gap-3 shadow-[0_15px_30px_rgba(199,154,82,0.2)] hover:shadow-[0_20px_45px_rgba(199,154,82,0.35)] hover:bg-[#dca959] active:scale-[0.98] gold-reflection"
              id="hero-menu-cta"
            >
              EXPLORE OUR MENU
              <ArrowRight size={13} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <a
              href="tel:9848832654"
              className="bg-transparent border border-white/20 hover:border-antique-gold text-stone-200 hover:text-antique-gold font-bold font-subheader text-xs tracking-[0.25em] px-10 py-5 transition-all duration-500 rounded-none uppercase cursor-pointer flex items-center gap-3 backdrop-blur-sm hover:bg-white/5 active:scale-[0.98]"
              id="hero-call-cta"
            >
              <Phone size={13} className="text-antique-gold" />
              HOTLINE DESK
            </a>
          </div>

          {/* Quick tagline badges overlay with custom styled spacer bullets */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-16 text-[#A09381] font-subheader text-[10px] tracking-[0.25em] uppercase font-bold">
            <span className="hover:text-antique-gold transition-colors cursor-default">Mughlai Heritage</span>
            <span className="text-antique-gold/40 select-none">•</span>
            <span className="hover:text-antique-gold transition-colors cursor-default">Indian Dum Specials</span>
            <span className="text-antique-gold/40 select-none">•</span>
            <span className="hover:text-antique-gold transition-colors cursor-default">Charcoal Skewered Kababs</span>
            <span className="text-antique-gold/40 select-none">•</span>
            <span className="hover:text-antique-gold transition-colors cursor-default">Authentic Southern treats</span>
          </div>
        </div>
      </section>

      {/* 2. Signature Dum Biryanis Section with bespoke glowing cards */}
      <section className="px-6 md:px-12 max-w-[1240px] mx-auto py-24 md:py-32 w-full text-left relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 select-none">
          <div className="max-w-2xl">
            <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-antique-gold"></span>
              REVERED CULINARY MASTERPIECES
            </span>
            <h2 className="font-serif text-4xl md:text-[56px] font-bold text-warm-ivory leading-none tracking-tight">
              Signature Dum Biryanis
            </h2>
            <div className="w-16 h-[2.5px] bg-antique-gold mt-6 opacity-90 rounded-full"></div>
          </div>
          <p className="font-sans text-sm md:text-base text-stone-400 font-light max-w-md mt-6 lg:mt-0 leading-relaxed">
            Slow-cooked step-by-step under heavy bronze weights using pure mountain ghee, fresh hand-picked mint sprigs, and our signature heritage Mughal spice formulas.
          </p>
        </div>

        {/* 2x3 Luxury Grid of Signatures with gold reflection aura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.map((item) => {
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-[#110B07]/45 border border-white/[0.04] hover:border-antique-gold/25 hover:bg-[#16100B]/60 transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl relative gold-reflection"
              >
                {/* Visual Dish Image Area */}
                <div className="h-56 overflow-hidden relative select-none">
                  <OptimizedImage
                    alt={item.name}
                    src={item.image}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-all duration-700 ease-out filter saturate-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0705] via-transparent to-transparent"></div>
                  
                  {/* Price Tag badge */}
                  <span className="absolute top-4 right-4 bg-[#0a0a0add]/90 backdrop-blur border border-antique-gold/30 text-antique-gold font-bold font-subheader text-xs tracking-widest px-4 py-2 rounded-full shadow-lg">
                    ₹{item.price}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-100 group-hover:text-antique-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-sans text-[13px] text-[#A09381] font-light leading-relaxed my-5 flex-grow">
                    {item.description}
                  </p>

                  <div className="h-[1px] bg-white/[0.04] my-4"></div>

                  <button
                    onClick={() => onNavigateToCategory(item.category)}
                    className="w-full group/btn font-subheader text-[10px] tracking-[0.25em] py-4 px-4 font-extrabold rounded-none uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-antique-gold/5 border border-antique-gold/25 hover:border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-deep-charcoal"
                  >
                    DISCOVER IN MENU
                    <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Popular Culinary Treats section with highly polished cards */}
      <section className="bg-gradient-to-b from-[#16100B]/30 to-[#0e0a07]/10 w-full py-28 border-y border-white/[0.03] text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C79A52]/[0.01] pointer-events-none"></div>
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-20 select-none">
            <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold flex items-center justify-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-antique-gold animate-ping"></span>
              HOUSE MASTERPIECES
            </span>
            <h2 className="font-serif text-4xl md:text-[52px] font-bold text-warm-ivory mt-2">
              Popular Culinary Treats
            </h2>
            <div className="w-16 h-[2px] bg-antique-gold mx-auto mt-6 opacity-90 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDishes.map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="bg-[#0e0a07]/80 border border-white/[0.04] rounded-2xl p-6 flex flex-col justify-between hover:border-antique-gold/20 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)] hover:bg-[#120D09] transition-all duration-500 relative group"
                >
                  <div className="w-full">
                    <div className="w-full h-40 overflow-hidden rounded-xl mb-6 relative select-none">
                      <OptimizedImage
                        alt={dish.name}
                        src={dish.image}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a07] via-[#0e0a07]/10 to-transparent"></div>
                    </div>
                    
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-serif text-lg font-bold text-stone-100 leading-tight group-hover:text-antique-gold transition-colors duration-300">
                        {dish.name}
                      </h4>
                      <span className="font-subheader text-base text-antique-gold font-extrabold shrink-0">
                        ₹{dish.price}
                      </span>
                    </div>
                    <p className="font-sans text-[12px] text-[#908472] mt-3 font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const categoryMap: Record<string, string> = {
                        'vc12': 'veg-curries',
                        'icc11': 'indian-chicken-curries',
                        'cs1': 'chicken-starters',
                        'ck2': 'chicken-kababs'
                      };
                      onNavigateToCategory(categoryMap[dish.id] || 'all');
                    }}
                    className="w-full font-subheader text-[9px] tracking-[0.25em] py-3.5 px-3 mt-6 text-center rounded-none font-bold uppercase transition-all duration-300 cursor-pointer bg-antique-gold/5 border border-antique-gold/15 hover:border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-deep-charcoal flex items-center justify-center gap-1.5"
                  >
                    VIEW COURSE
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Full Menu category shortcuts */}
      <section className="px-6 md:px-12 max-w-[1240px] mx-auto py-28 md:py-36 w-full text-left relative z-10">
        <div className="text-center mb-20 select-none">
          <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold">
            EXPANSIVE CRAFT
          </span>
          <h2 className="font-serif text-4xl md:text-[52px] font-bold text-warm-ivory mt-2">
            Explore Full Cuisine
          </h2>
          <div className="w-16 h-[2px] bg-antique-gold mx-auto mt-6 opacity-90 rounded-full"></div>
          <p className="font-sans text-sm md:text-base text-stone-400 mt-6 leading-relaxed max-w-xl mx-auto font-light">
            Skip directly into any individual course category inside our master menu by pressing its custom aesthetic shortcut link.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.filter((c) => c.id !== 'all').slice(0, 8).map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigateToCategory(cat.id)}
              className="relative rounded-2xl overflow-hidden h-36 group cursor-pointer border border-white/[0.04] hover:border-antique-gold/40 transition-all duration-500 shadow-2xl bg-black"
            >
              <OptimizedImage
                alt={cat.label}
                src={CATEGORY_IMAGES[cat.id] || HOTLINKS.heroBiryani}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 filters saturate-[1.1] brightness-[0.7] group-hover:brightness-[0.8]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-5">
                <span className="font-subheader text-xs md:text-sm tracking-[0.2em] text-stone-200 font-bold uppercase group-hover:text-antique-gold transition-colors duration-300">
                  {cat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Indian Bawarchi */}
      <section className="bg-gradient-to-b from-[#16100B]/10 to-[#16100B]/20 w-full py-28 border-t border-white/[0.03] text-left">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-24 select-none">
            <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold">
              OUR SERVICE VALUES
            </span>
            <h2 className="font-serif text-4xl md:text-[52px] font-bold text-warm-ivory mt-2">
              Why Indian Bawarchi
            </h2>
            <div className="w-16 h-[2px] bg-antique-gold mx-auto mt-6 opacity-90 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start bg-deep-charcoal border border-white/[0.04] rounded-2xl p-8 hover:border-antique-gold/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 relative group">
              <div className="w-12 h-12 rounded-full bg-antique-gold/10 border border-antique-gold/20 flex items-center justify-center text-antique-gold mb-8 shrink-0 group-hover:bg-antique-gold group-hover:text-deep-charcoal transition-all duration-300">
                <ChefHat size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-3 group-hover:text-antique-gold transition-colors duration-300">
                Heritage Taste
              </h3>
              <p className="font-sans text-[13px] text-[#908472] leading-relaxed font-light">
                Centuries-old kitchen hand-ground spice blends formulated carefully to provide deep, unforgettable warmth.
              </p>
            </div>

            <div className="flex flex-col items-start bg-deep-charcoal border border-white/[0.04] rounded-2xl p-8 hover:border-antique-gold/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 relative group">
              <div className="w-12 h-12 rounded-full bg-antique-gold/10 border border-antique-gold/20 flex items-center justify-center text-antique-gold mb-8 shrink-0 group-hover:bg-antique-gold group-hover:text-deep-charcoal transition-all duration-300">
                <Users size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-3 group-hover:text-antique-gold transition-colors duration-300">
                Sleek A/C Family Cabin
              </h3>
              <p className="font-sans text-[13px] text-[#908472] leading-relaxed font-light">
                Spacious private air-conditioned sections tailored perfectly for peaceful, multi-generational family banquets.
              </p>
            </div>

            <div className="flex flex-col items-start bg-deep-charcoal border border-white/[0.04] rounded-2xl p-8 hover:border-antique-gold/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 relative group">
              <div className="w-12 h-12 rounded-full bg-antique-gold/10 border border-antique-gold/20 flex items-center justify-center text-antique-gold mb-8 shrink-0 group-hover:bg-antique-gold group-hover:text-deep-charcoal transition-all duration-300">
                <Shield size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-3 group-hover:text-antique-gold transition-colors duration-300">
                Hygienic Sourcing
              </h3>
              <p className="font-sans text-[13px] text-[#908472] leading-relaxed font-light">
                Absolutely fresh raw poultry and meats sourced from premium local vendors under stringent food safety checks.
              </p>
            </div>

            <div className="flex flex-col items-start bg-deep-charcoal border border-white/[0.04] rounded-2xl p-8 hover:border-antique-gold/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 relative group">
              <div className="w-12 h-12 rounded-full bg-antique-gold/10 border border-antique-gold/20 flex items-center justify-center text-antique-gold mb-8 shrink-0 group-hover:bg-antique-gold group-hover:text-deep-charcoal transition-all duration-300">
                <Clock size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-3 group-hover:text-antique-gold transition-colors duration-300">
                Royal Nizami Hospitality
              </h3>
              <p className="font-sans text-[13px] text-[#908472] leading-relaxed font-light">
                Generous, respect-driven table attendance dedicated to making every singular meal feel like a royal feast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Family Dining Experience Story Section */}
      <section className="px-6 md:px-12 max-w-[1240px] mx-auto py-28 md:py-36 w-full text-left grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 select-none relative h-[420px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
          <OptimizedImage
            alt="Family dining experience interior at Indian Bawarchi"
            src={HOTLINKS.ourStory}
            className="w-full h-full object-cover filtering saturate-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div className="absolute bottom-8 left-8 z-20 bg-deep-charcoal/95 backdrop-blur border border-antique-gold/20 p-5 rounded-2xl">
            <span className="font-serif text-stone-100 text-xl font-bold block leading-none">A/C Family Sanctuary</span>
            <span className="text-[10px] text-antique-gold font-subheader tracking-widest uppercase block mt-1.5 font-bold">Refined comfort styling</span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-antique-gold font-subheader text-xs tracking-[0.25em] font-extrabold uppercase">
            A PLACE FOR CELEBRATIONS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-ivory leading-tight">
            Created for Multi Cuisine Loving Families
          </h2>
          <div className="h-[1px] w-20 bg-antique-gold/30"></div>

          <p className="font-sans text-base text-[#C9BCA8] font-light leading-relaxed">
            At <span className="text-warm-ivory font-bold">Indian Bawarchi Restaurant</span>, we appreciate that dining is a meaningful family anchor. Hence, we build distinct culinary universes—ranging from classic tandoori starters and spicy Mughlai curries to modern, high-heat tossed Chinese noodles and refreshing seafood plates.
          </p>

          <p className="font-sans text-sm text-stone-400 font-light leading-relaxed">
            Our specialized air-conditioned family room protects your comfort. Bring your kids, parents, and friends together to share a legendary Chicken and Mutton Family Pack inside of a quiet, premium sanctuary of Hyderabad heritage.
          </p>

          <button
            onClick={() => onNavigateToView('menu')}
            className="group relative overflow-hidden bg-transparent border border-antique-gold/40 hover:border-antique-gold text-antique-gold hover:text-deep-charcoal font-bold font-subheader text-xs tracking-[0.25em] px-10 py-5 transition-all duration-500 rounded-none uppercase select-none cursor-pointer mt-4 w-fit"
          >
            <span className="absolute inset-0 bg-antique-gold transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 origin-right -z-10" />
            Discover the Master Menu
          </button>
        </div>
      </section>

      {/* 7. Guest Reviews Section */}
      <section className="bg-gradient-to-b from-[#16100B]/15 to-[#0b0805]/20 w-full py-28 border-t border-white/[0.03] text-left">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-20 select-none">
            <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold">
              TRUSTED BY GENERATIONS
            </span>
            <h2 className="font-serif text-4xl md:text-[52px] font-bold text-warm-ivory mt-2">
              Our Patron Reviews
            </h2>
            <div className="w-16 h-[2px] bg-antique-gold mx-auto mt-6 opacity-90 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientReviews.map((rev, index) => (
              <div
                key={index}
                className="bg-[#0e0a07]/80 border border-white/[0.04] p-8 rounded-2xl flex flex-col justify-between hover:border-antique-gold/20 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 relative gold-reflection"
              >
                <div>
                  <div className="flex gap-1 text-antique-gold mb-6 select-none animate-pulse">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="font-sans text-[14px] text-[#A09381] leading-relaxed italic font-light">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex gap-4 items-center mt-8 pt-6 border-t border-white/[0.04]">
                  <div className="w-10 h-10 rounded-full bg-antique-gold/15 flex items-center justify-center font-subheader text-sm text-antique-gold font-bold">
                    {rev.name[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-semibold text-stone-100 leading-none">{rev.name}</span>
                    <span className="font-subheader text-[10px] tracking-widest text-[#8E8272] uppercase mt-1.5 block font-bold">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact & Map Section */}
      <section className="px-6 md:px-12 max-w-[1240px] mx-auto py-28 w-full text-left relative z-10">
        <div className="text-center mb-20 select-none">
          <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold">
            VISIT THE SANCTUARY
          </span>
          <h2 className="font-serif text-4xl md:text-[52px] font-bold text-warm-ivory mt-2">
            Reach Indian Bawarchi
          </h2>
          <div className="w-16 h-[2px] bg-antique-gold mx-auto mt-6 opacity-90 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 w-full">
          {/* Symmetrical interactive google maps placeholder mock or dynamic embed */}
          <div className="lg:col-span-7 bg-[#090909]/60 border border-white/[0.04] rounded-2xl flex flex-col justify-between overflow-hidden min-h-[420px] relative group p-1 shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            <div className="absolute top-6 left-6 z-20 bg-[#0B0705]/95 backdrop-blur border border-white/10 p-5 rounded-xl max-w-xs pointer-events-none text-left">
              <span className="font-subheader text-[10px] text-antique-gold uppercase tracking-widest font-bold flex items-center gap-1.5 mb-1.5">
                <MapPin size={12} className="animate-bounce" /> GHATKESAR HIGHWAY
              </span>
              <p className="font-sans text-xs text-stone-300 leading-relaxed font-light">
                Near Bharat Petrol Pump, Warangal Highway. Aushapur, Ghatkesar Mandal, Hyderabad, Telangana 501301.
              </p>
            </div>
            
            {/* Native google map iframe loaded with generic address coords */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8115668101416!2d78.7183063!3d17.46825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb77df50000001%3A0xe726be6dfbb6edee!2sIndian%20Bawarchi%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-700 rounded-2xl"
              title="Indian Bawarchi location map on Warangal highway"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick action boxes */}
            <div className="bg-[#16100B]/40 border border-white/[0.04] rounded-2xl p-8 flex flex-col gap-7 hover:shadow-2xl transition-all h-full justify-center text-left">
              <h3 className="font-serif text-2xl font-bold text-stone-100 flex items-center gap-2 mb-2">
                <Phone size={18} className="text-antique-gold" /> Direct Hotlines
              </h3>
              
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-300 bg-[#16100B] shrink-0 shadow-inner">
                  <Phone size={15} className="text-antique-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-subheader text-[10px] tracking-widest text-[#8E8272] uppercase font-bold">Primary Order Desk</span>
                  <a href="tel:9848832654" className="font-serif text-lg md:text-xl font-semibold text-stone-100 hover:text-antique-gold transition-colors block mt-0.5">
                    98488 32654
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-300 bg-[#16100B] shrink-0 shadow-inner">
                  <Phone size={15} className="text-antique-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-subheader text-[10px] tracking-widest text-[#8E8272] uppercase font-bold">A/C Cabin Booking</span>
                  <a href="tel:9391237225" className="font-serif text-lg md:text-xl font-semibold text-stone-100 hover:text-antique-gold transition-colors block mt-0.5">
                    93912 37225
                  </a>
                </div>
              </div>

              <div className="h-[1px] bg-white/[0.04] my-2"></div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-300 bg-[#16100B] shrink-0 shadow-inner">
                  <Clock size={15} className="text-antique-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-subheader text-[10px] tracking-widest text-[#8E8272] uppercase font-bold">Daily Hours</span>
                  <span className="font-serif text-base md:text-lg text-stone-100 font-semibold mt-0.5">
                    11:30 AM – 11:00 PM <span className="text-[10px] text-antique-gold tracking-widest uppercase ml-1.5 inline-block font-subheader font-medium">Daily Service</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
