/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HOTLINKS } from '../data';
import { Phone, Clock, Instagram, Facebook, Send, MapPin, CheckCircle } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface StoryViewProps {
  onNavigateToView: (view: 'home' | 'menu' | 'story') => void;
}

export const StoryView: React.FC<StoryViewProps> = ({ onNavigateToView }) => {
  const [fullName, setFullName] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form handle trigger
  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !feedbackText) return;

    // Trigger golden notification
    setIsSubmitted(true);
    
    // Clear fields
    setFullName('');
    setEmailText('');
    setFeedbackText('');

    // Reset notification after few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 py-36 relative">
      <div className="fixed inset-0 bg-[radial-gradient(#C79A52_0.3px,transparent_0.3px)] bg-[size:32px_32px] opacity-[0.03] pointer-events-none"></div>

      {/* 1. Our Story Editorial Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32 relative z-10">
        
        {/* Story Text Box (LHS) */}
        <div className="lg:col-span-7 flex flex-col gap-6 select-none text-left">
          <span className="text-antique-gold font-subheader text-xs tracking-[0.3em] uppercase font-extrabold flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold animate-pulse"></span>
            MUGHLAI CULINARY SANCTUARY
          </span>
          <h1 className="font-serif text-4xl md:text-[56px] font-bold text-warm-ivory uppercase leading-none tracking-tight">
            Our Legacy
          </h1>
          <div className="h-[2px] w-16 bg-antique-gold opacity-90 rounded-full mt-2"></div>
          
          <p className="font-sans text-base md:text-lg text-[#C9BCA8] leading-relaxed font-light mt-4">
            Rooted in the royal, grand kitchens of the Mughal era,{' '}
            <span className="text-warm-ivory font-bold">The Indian Bawarchi</span> stands as a contemporary digital sanctuary of historical, heritage cuisine. We reject the ordinary to cultivate a sensory, multi-cuisine dining experience of{' '}
            <span className="text-antique-gold font-bold">luxurious minimalism</span>.
          </p>
          <p className="font-sans text-sm md:text-base text-stone-400 leading-relaxed font-light mb-2">
            Every master spice blend is grounded in stories of empire, and every plated dish serves as an expansive canvas of culinary mastery. Our culinary strategy represents quiet confidence—allowing the profound depths of dry-marinated, smoky clay-pot kebabs and slow-simmered, saffron-infused biryanis to speak volumes in an atmosphere of curated, family-friendly excellence.
          </p>

          <button
            onClick={() => onNavigateToView('menu')}
            className="group relative overflow-hidden bg-transparent border border-antique-gold/40 hover:border-antique-gold text-antique-gold hover:text-deep-charcoal font-bold font-subheader text-xs tracking-[0.25em] px-10 py-5 transition-all duration-500 rounded-none uppercase select-none cursor-pointer mt-4 w-fit"
          >
            <span className="absolute inset-0 bg-antique-gold transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 origin-right -z-10" />
            Discover the Menu
          </button>
        </div>

        {/* Story pointed arch container frame (RHS) */}
        <div className="lg:col-span-5 flex justify-center relative select-none">
          <div className="w-full max-w-sm p-4 border border-antique-gold/20 pointed-arch-box relative bg-deep-charcoal/50">
            {/* Shadows and layers offset */}
            <div className="absolute inset-0 bg-antique-gold/[0.04] rounded-none pointed-arch-box translate-x-3.5 translate-y-3.5 -z-10"></div>
            
            <div className="aspect-[3/4.5] w-full overflow-hidden pointed-arch-box bg-stone-950 relative">
              <OptimizedImage
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 select-none"
                alt="Cinematic brass plate served with Mughlai cuisine and gold candle reflections"
                src={HOTLINKS.ourStory}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. Contact & Location Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 w-full mb-12">
        
        {/* Interactive Google Map embed bento piece */}
        <div className="lg:col-span-7 bg-[#090909]/60 border border-white/[0.04] rounded-2xl flex flex-col justify-between overflow-hidden min-h-[440px] relative group p-1 shadow-[0_15px_35px_rgba(0,0,0,0.85)]">
          <div className="absolute top-6 left-6 top-[24px] left-[24px] z-20 bg-[#0B0705]/95 backdrop-blur border border-white/10 p-5 rounded-xl max-w-xs pointer-events-none max-xs:right-6 shadow-[0_10px_25px_rgba(0,0,0,0.9)] text-left font-light">
            <span className="font-subheader text-[10px] text-antique-gold uppercase tracking-widest font-bold flex items-center gap-1.5 mb-1.5">
              <MapPin size={12} className="animate-bounce" /> RESTAURANT ADDRESS
            </span>
            <p className="font-sans text-xs md:text-sm text-stone-300 leading-relaxed">
              Near Bharat Petrol Pump, Warangal Highway. Aushapur, Ghatkesar Mandal, Hyderabad, Telangana 501301.
            </p>
          </div>

          {/* Actual Google Maps Interactive IFrame tuned precisely around the Aushapur site */}
          <div className="w-full h-full min-h-[340px] flex-grow">
            <iframe
              title="The Indian Bawarchi Aushapur Map View"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8115668101416!2d78.7183063!3d17.46825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb77df50000001%3A0xe726be6dfbb6edee!2sIndian%20Bawarchi%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
              className="w-full h-full border-none grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700 rounded-2xl"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contacts details & direct feedback messaging Form bento pieces */}
        <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:flex xl:flex-col gap-8 h-full">
          
          {/* Contact Details Card */}
          <div className="bg-[#0e0a07]/80 border border-white/[0.04] rounded-2xl p-8 flex flex-col gap-6 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 text-left relative gold-reflection">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-300 bg-[#16100B] shrink-0 shadow-inner">
                <Phone size={15} strokeWidth={1.5} className="text-antique-gold" />
              </div>
              <div className="flex flex-col select-none">
                <span className="font-subheader text-[10px] tracking-widest text-[#8E8272] uppercase font-bold">
                  Order Desk Primary
                </span>
                <a href="tel:9848832654" className="font-serif text-lg md:text-xl text-stone-100 font-semibold hover:text-antique-gold transition-colors mt-0.5">
                  98488 32654
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-300 bg-[#16100B] shrink-0 shadow-inner">
                <Phone size={15} strokeWidth={1.5} className="text-antique-gold" />
              </div>
              <div className="flex flex-col select-none">
                <span className="font-subheader text-[10px] tracking-widest text-[#8E8272] uppercase font-bold">
                  A/C Cabinet Booking Desk
                </span>
                <a href="tel:9391237225" className="font-serif text-lg md:text-xl text-stone-100 font-semibold hover:text-antique-gold transition-colors mt-0.5">
                  93912 37225
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-300 bg-[#16100B] shrink-0 shadow-inner">
                <Clock size={15} strokeWidth={1.5} className="text-antique-gold" />
              </div>
              <div className="flex flex-col select-none">
                <span className="font-subheader text-[10px] tracking-widest text-[#8E8272] uppercase font-bold">
                  Restaurant Hours
                </span>
                <span className="font-serif text-base md:text-lg text-stone-100 font-semibold mt-0.5">
                  11:30 AM – 11:00 PM <span className="text-[10px] text-antique-gold tracking-widest uppercase ml-1 block font-subheader font-medium mt-1">Daily Service</span>
                </span>
              </div>
            </div>

            {/* Social handles with fine borders */}
            <div className="pt-6 border-t border-white/[0.04] flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-stone-300 hover:text-antique-gold transition-colors flex items-center gap-2 font-subheader text-[10px] tracking-widest uppercase font-bold"
              >
                <Instagram size={13} className="text-antique-gold animate-pulse" />
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-stone-300 hover:text-antique-gold transition-colors flex items-center gap-2 font-subheader text-[10px] tracking-widest uppercase font-bold"
              >
                <Facebook size={13} className="text-antique-gold" />
                Facebook
              </a>
            </div>
          </div>

          {/* Feedbacks Send Message Form Card */}
          <div className="bg-[#0e0a07]/80 border border-white/[0.04] rounded-2xl p-8 flex-grow flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 text-left">
            <div className="w-full select-none">
              <span className="text-antique-gold font-subheader text-[9px] tracking-widest uppercase font-bold block mb-1">CONNECT</span>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-2">
                Send a Message
              </h3>
              <p className="text-[#908472] font-sans text-xs leading-relaxed mb-6 font-light">
                Tell us about your catering needs, family reservation packets, feedback, or general queries. We respond immediately.
              </p>
            </div>

            <form onSubmit={handleSubmitFeedback} className="flex flex-col gap-6 w-full">
              {/* Floating Name input */}
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  id="form-full-name"
                  className="w-full bg-transparent border-none border-b border-stone-800 focus:border-antique-gold/50 text-stone-100 text-sm font-sans pt-5 pb-2 px-0 focus:outline-none focus:ring-0 placeholder-transparent peer transition-colors"
                />
                <label
                  htmlFor="form-full-name"
                  className="absolute left-0 top-4 text-xs font-subheader tracking-widest text-stone-500 uppercase pointer-events-none transition-all duration-300 peer-focus:text-[10px] peer-focus:top-0 peer-focus:text-antique-gold peer-[not(:placeholder-shown)]:text-[10px] peer-[not(:placeholder-shown)]:top-0 font-bold"
                >
                  Full Name
                </label>
              </div>

              {/* Floating Email input */}
              <div className="relative w-full">
                <input
                  type="email"
                  value={emailText}
                  onChange={(e) => setEmailText(e.target.value)}
                  placeholder="Email Address"
                  id="form-email"
                  className="w-full bg-transparent border-none border-b border-stone-800 focus:border-antique-gold/50 text-stone-100 text-sm font-sans pt-5 pb-2 px-0 focus:outline-none focus:ring-0 placeholder-transparent peer transition-colors"
                />
                <label
                  htmlFor="form-email"
                  className="absolute left-0 top-4 text-xs font-subheader tracking-widest text-stone-500 uppercase pointer-events-none transition-all duration-300 peer-focus:text-[10px] peer-focus:top-0 peer-focus:text-antique-gold peer-[not(:placeholder-shown)]:text-[10px] peer-[not(:placeholder-shown)]:top-0 font-bold"
                >
                  Email Address
                </label>
              </div>

              {/* Message inputs box */}
              <div className="relative w-full">
                <textarea
                  required
                  rows={2}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Your Message"
                  id="form-msg"
                  className="w-full bg-transparent border-none border-b border-stone-800 focus:border-antique-gold/50 text-stone-100 text-sm font-sans pt-5 pb-2 px-0 focus:outline-none focus:ring-0 placeholder-transparent resize-none peer transition-colors"
                ></textarea>
                <label
                  htmlFor="form-msg"
                  className="absolute left-0 top-4 text-[11px] font-subheader tracking-widest text-stone-500 uppercase pointer-events-none transition-all duration-300 peer-focus:text-[9px] peer-focus:top-0 peer-focus:text-antique-gold peer-[not(:placeholder-shown)]:text-[10px] peer-[not(:placeholder-shown)]:top-0 font-bold"
                >
                  Your inquiry or feedback
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-antique-gold/10 border border-antique-gold/30 hover:bg-antique-gold hover:text-deep-charcoal text-antique-gold font-bold font-subheader text-[10px] tracking-[0.2em] py-4.5 rounded-none uppercase select-none transition-all duration-300 mt-2 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                id="form-submit-btn"
              >
                <Send size={11} className="stroke-[2.5px]" />
                SUBMIT MESSAGE
              </button>
            </form>
          </div>

        </div>

      </section>

      {/* Golden success floating confirmation note */}
      {isSubmitted && (
        <div className="fixed bottom-24 right-6 z-[100] bg-[#0B0705] border border-antique-gold/45 shadow-[0_20px_50px_rgba(0,0,0,0.95)] rounded-2xl px-6 py-5 flex items-center gap-4 select-none gold-reflection transition-all duration-300">
          <CheckCircle className="text-antique-gold shrink-0" size={20} />
          <div className="flex flex-col text-left">
            <span className="font-subheader text-xs text-antique-gold font-black uppercase tracking-widest">
              SHUKRIYA
            </span>
            <span className="text-[12px] font-sans text-stone-400 mt-0.5">
              Your inquiry has been formulated successfully.
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
