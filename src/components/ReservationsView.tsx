/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Reservation, MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { Calendar, Users, Copy, Check, Clock, Trash2, Heart, Coins } from 'lucide-react';

interface ReservationsViewProps {
  savedFeastIds: string[];
  onToggleFeastItem: (id: string) => void;
  onNavigateToView: (view: 'home' | 'menu' | 'story' | 'reservations') => void;
}

export const ReservationsView: React.FC<ReservationsViewProps> = ({
  savedFeastIds,
  onToggleFeastItem,
  onNavigateToView,
}) => {
  // Local active reservations state sync'd with localStorage
  const [activeReservations, setActiveReservations] = useState<Reservation[]>([]);
  
  // Tab fields form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [bookingConfirmedCode, setBookingConfirmedCode] = useState<string | null>(null);

  // Initialize and load reservations on mount
  useEffect(() => {
    const saved = localStorage.getItem('bawarchi_bookings');
    if (saved) {
      try {
        setActiveReservations(JSON.parse(saved));
      } catch (err) {
        console.error('Failed reading bookings', err);
      }
    }
  }, []);

  // Compute total selected feast dishes
  const selectedFeastItems = MENU_ITEMS.filter((item) => savedFeastIds.includes(item.id));
  const feastTotalMultiplier = selectedFeastItems.reduce((acc, item) => acc + item.price, 0);

  // Handle new booking
  const handleCreateReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;

    const randomID = `BWR-${Math.floor(1000 + Math.random() * 9000)}`;

    const newReservation: Reservation = {
      id: randomID,
      name,
      email,
      phone,
      date,
      time,
      guests,
      specialRequests: specialRequests + (selectedFeastItems.length > 0 
        ? ` | Pre-selected feast items: ${selectedFeastItems.map((i) => i.name).join(', ')}` 
        : ''),
      createdAt: new Date().toISOString(),
    };

    const updatedList = [newReservation, ...activeReservations];
    setActiveReservations(updatedList);
    localStorage.setItem('bawarchi_bookings', JSON.stringify(updatedList));

    // Clear inputs
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setSpecialRequests('');
    
    // Set active receipt number
    setBookingConfirmedCode(randomID);
  };

  // Cancel reservation
  const handleCancelReservation = (bookingId: string) => {
    const updated = activeReservations.filter((res) => res.id !== bookingId);
    setActiveReservations(updated);
    localStorage.setItem('bawarchi_bookings', JSON.stringify(updated));
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 py-28 relative z-10">
      
      {/* Header section */}
      <section className="reveal text-center mb-16 select-none">
        <span className="text-xs font-semibold text-brand-primary font-subheader tracking-[0.25em] uppercase">
          Nizami Hospitality
        </span>
        <h1 className="font-serif text-3xl md:text-5.5xl font-bold tracking-widest text-text-primary uppercase mt-2">
          Table Reservations
        </h1>
        <div className="w-12 h-[1px] bg-brand-primary mx-auto mt-5 opacity-80"></div>
      </section>

      {/* Booking Layout bento split */}
      <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Reservation form block (LHS) */}
        <div className="lg:col-span-7 bg-bg-secondary/40 border border-border backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
          <div className="mb-8 select-none text-left">
            <h2 className="font-serif text-2xl font-medium text-text-primary mb-2">
              Secure a Fine Dining Table
            </h2>
            <p className="font-sans text-xs text-text-muted leading-relaxed">
              Book your chamber instantly. All tables are reserved for up to 2 hours of seamless Mughal sensory dining.
            </p>
          </div>

          <form onSubmit={handleCreateReservation} className="flex flex-col gap-6">
            
            {/* Split row: Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  id="book-name"
                  className="w-full bg-transparent border-none border-b border-border focus:border-brand-primary text-text-primary text-sm font-sans pt-6 pb-2 px-0 focus:outline-none focus:ring-0 placeholder-transparent peer transition-colors"
                />
                <label
                  htmlFor="book-name"
                  className="absolute left-0 top-5 text-xs font-subheader tracking-widest text-text-muted uppercase pointer-events-none transition-all duration-300 peer-focus:text-[10px] peer-focus:top-0 peer-focus:text-brand-primary peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:top-0"
                >
                  Full Name *
                </label>
              </div>

              <div className="relative w-full">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  id="book-phone"
                  className="w-full bg-transparent border-none border-b border-border focus:border-brand-primary text-text-primary text-sm font-sans pt-6 pb-2 px-0 focus:outline-none focus:ring-0 placeholder-transparent peer transition-colors"
                />
                <label
                  htmlFor="book-phone"
                  className="absolute left-0 top-5 text-xs font-subheader tracking-widest text-text-muted uppercase pointer-events-none transition-all duration-300 peer-focus:text-[10px] peer-focus:top-0 peer-focus:text-brand-primary peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:top-0"
                >
                  Phone Number *
                </label>
              </div>
            </div>

            {/* Split row: Email + Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  id="book-email"
                  className="w-full bg-transparent border-none border-b border-border focus:border-brand-primary text-text-primary text-sm font-sans pt-6 pb-2 px-0 focus:outline-none focus:ring-0 placeholder-transparent peer transition-colors"
                />
                <label
                  htmlFor="book-email"
                  className="absolute left-0 top-5 text-xs font-subheader tracking-widest text-text-muted uppercase pointer-events-none transition-all duration-300 peer-focus:text-[10px] peer-focus:top-0 peer-focus:text-brand-primary peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:top-0"
                >
                  Email Address
                </label>
              </div>

              <div className="relative w-full">
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent border-none border-b border-border focus:border-brand-primary text-text-primary text-sm font-sans pt-6 pb-2 px-0 focus:outline-none focus:ring-0 peer transition-colors text-left"
                />
              </div>
            </div>

            {/* Split row: Time Slot + Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 text-left">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-subheader tracking-widest text-text-muted uppercase font-bold">
                  Preferred Hour Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-[#0c0a07] border border-border rounded-xl text-text-primary text-sm py-3.5 px-4 focus:outline-none focus:border-brand-primary focus:ring-0 cursor-pointer"
                >
                  <option value="12:00" className="bg-bg-primary">Lunch - 12:00 PM</option>
                  <option value="13:30" className="bg-bg-primary">Lunch - 01:30 PM</option>
                  <option value="15:00" className="bg-bg-primary">Afternoon - 03:00 PM</option>
                  <option value="18:00" className="bg-bg-primary">Dinner - 06:00 PM</option>
                  <option value="19:30" className="bg-bg-primary">Dinner - 07:30 PM</option>
                  <option value="21:00" className="bg-bg-primary">Late Night - 09:00 PM</option>
                  <option value="23:00" className="bg-bg-primary">Midnight - 11:00 PM</option>
                  <option value="02:00" className="bg-bg-primary font-bold text-brand-primary">Nawabi Late - 02:00 AM</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-subheader tracking-widest text-text-muted uppercase font-bold">
                  Number of Diners
                </label>
                <div className="flex items-center border border-border bg-[#0c0a07] rounded-xl overflow-hidden h-[50px]">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="flex-1 h-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/5 font-bold transition-colors cursor-pointer select-none text-lg"
                  >
                    -
                  </button>
                  <span className="px-4 text-center text-brand-primary select-none font-bold font-subheader w-12 text-sm">
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.min(12, guests + 1))}
                    className="flex-1 h-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/5 font-bold transition-colors cursor-pointer select-none text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* General optional request textarea */}
            <div className="relative w-full mt-4">
              <input
                type="text"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Special requests (e.g. Jain, high chair for baby, candle, flower petals)"
                id="book-reqs"
                className="w-full bg-transparent border-none border-b border-border focus:border-brand-primary text-text-primary text-sm font-sans pt-6 pb-2 px-0 focus:outline-none focus:ring-0 placeholder-transparent peer transition-colors"
              />
              <label
                htmlFor="book-reqs"
                className="absolute left-0 top-5 text-xs font-subheader tracking-widest text-text-muted uppercase pointer-events-none transition-all duration-300 peer-focus:text-[10px] peer-focus:top-0 peer-focus:text-brand-primary peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:top-0"
              >
                Special Requests
              </label>
            </div>

            <button
              type="submit"
              className="premium-btn-primary w-full py-4.5 rounded-xl uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-6"
              id="book-submit-btn"
            >
              <Calendar size={14} />
              CONFIRM RESERVATION
            </button>

          </form>
        </div>

        {/* Selected Feast specialties and bookings overview (RHS) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Reservation Feast Visualizer Block */}
          <div className="bg-bg-secondary/40 border border-border backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-all duration-300 text-left">
            <div className="select-none">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-serif text-lg font-medium text-text-primary flex items-center gap-2">
                  <Heart size={16} className="text-text-secondary stroke-2 fill-brand-primary/10" /> Your Selected Feast
                </h3>
                <span className="text-[10px] bg-brand-primary/10 border border-brand-primary/20 text-brand-primary px-2.5 py-1 font-subheader tracking-wider font-extrabold rounded-md select-none">
                  {selectedFeastItems.length} DISHES
                </span>
              </div>
              <p className="text-text-muted font-sans text-xs leading-relaxed mb-6">
                Dishes you choose on the Menu screen will load here as pre-ordered specialties for your table.
              </p>
            </div>

            {selectedFeastItems.length > 0 ? (
              <div className="flex flex-col gap-4 max-h-[220px] overflow-y-auto pr-2">
                {selectedFeastItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center gap-3 py-2 border-b border-border">
                    <div className="flex items-center gap-2.5 select-none text-left">
                      <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="font-sans text-[13px] text-text-secondary font-medium leading-none">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-subheader text-xs font-bold text-text-secondary">
                        ₹ {item.price}
                      </span>
                      <button
                        onClick={() => onToggleFeastItem(item.id)}
                        className="text-text-muted hover:text-red-500 hover:bg-white/5 p-1 transition-all rounded-full cursor-pointer"
                        title="Remove dish from Feast"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Subtotal Display */}
                <div className="flex justify-between items-center mt-4 border-t border-border pt-4 select-none">
                  <span className="text-[10px] font-subheader tracking-widest text-text-muted uppercase font-semibold flex items-center gap-1.5">
                    <Coins size={12} /> FEAST ESTIMATION
                  </span>
                  <span className="font-subheader text-sm font-extrabold text-brand-primary">
                    ₹ {feastTotalMultiplier}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 border border-dashed border-border rounded-xl select-none">
                <p className="font-sans text-xs text-text-muted leading-relaxed mb-4">
                  No plates pre-selected. Explore our heritage menu to build a customized dining course ahead of your arrival.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigateToView('menu')}
                  className="font-subheader text-[10px] tracking-widest text-brand-primary font-bold hover:underline uppercase cursor-pointer"
                >
                  + Add specialties to Feast
                </button>
              </div>
            )}
          </div>

          {/* Active / Current Reservations saved locally */}
          <div className="bg-bg-secondary/40 border border-border backdrop-blur-md rounded-2xl p-6 hover:shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-all duration-300 text-left">
            <h3 className="font-serif text-lg font-medium text-text-primary mb-4 select-none">
              Your Current Bookings
            </h3>

            {activeReservations.length > 0 ? (
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[220px]">
                {activeReservations.map((res) => (
                  <div key={res.id} className="border border-border bg-[#0c0a07] rounded-xl p-4 relative flex flex-col gap-2.5">
                    
                    <button
                      onClick={() => handleCancelReservation(res.id)}
                      className="absolute top-4 right-4 text-text-muted hover:text-red-500 p-1.5 hover:bg-white/5 transition-all w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                      title="Cancel seat reservation"
                    >
                      <Trash2 size={13} />
                    </button>

                    <div className="flex flex-col leading-none">
                      <span className="font-subheader text-[10.5px] text-brand-primary font-bold tracking-widest leading-none">
                        {res.id}
                      </span>
                      <span className="font-serif text-sm text-text-primary font-semibold mt-2.5 leading-none">
                        Diner: {res.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-[12px] text-text-secondary select-none mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-text-muted" /> {res.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-text-muted" /> {res.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={12} className="text-text-muted" /> {res.guests} Pax
                      </span>
                    </div>

                    {res.specialRequests && (
                      <p className="font-sans text-[11px] text-text-muted leading-relaxed italic border-t border-border pt-2.5 mt-1">
                        Note: {res.specialRequests.substring(0, 100)}...
                      </p>
                    )}

                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 border border-dashed border-border rounded-xl select-none">
                <p className="font-sans text-xs text-text-muted leading-relaxed">
                  No registered active seat reservations at this time.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 5. Booking Confirmation Sheet (Receipt view overlay) */}
      {bookingConfirmedCode && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-bg-secondary border border-border p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] rounded-2xl flex flex-col items-center text-center relative overflow-hidden">
            {/* Nizam background overlay decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-primary)_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-[0.02] pointer-events-none"></div>

            <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary mb-6 select-none animate-pulse">
              <Check size={32} />
            </div>

            <span className="font-subheader text-xs text-brand-primary tracking-[0.25em] font-bold uppercase select-none">
              RESERVATION CONFIRMED
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mt-3 select-none">
              Assalamu Alaikum
            </h2>
            <div className="w-12 h-[1.5px] bg-brand-primary my-5 opacity-80"></div>

            <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8">
              Your table and kitchen directions are locked. Share your visual secure code upon arrival.
            </p>

            {/* Receipt details */}
            <div className="w-full bg-[#0c0a07] border border-border rounded-xl p-5 mb-8 relative">
              <div className="flex justify-between items-center py-1.5 border-b border-border/40 select-none">
                <span className="text-[10px] font-subheader tracking-wider text-text-muted uppercase">Seat Reservation</span>
                <span className="text-xs font-bold text-text-primary">Table Lock</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-border/40 select-none mt-1">
                <span className="text-[10px] font-subheader tracking-wider text-text-muted uppercase">Selected Feast</span>
                <span className="text-xs font-bold text-brand-primary">{selectedFeastItems.length} Dishes</span>
              </div>

              {/* Secure booking code container */}
              <div className="mt-5 pt-3 select-all">
                <span className="font-subheader text-[11px] text-text-muted uppercase tracking-widest block leading-none">
                  Secure Booking Code
                </span>
                <span className="font-subheader text-2xl font-black text-brand-primary tracking-widest mt-2 block leading-none">
                  {bookingConfirmedCode}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setBookingConfirmedCode(null);
                onNavigateToView('reservations');
              }}
              className="premium-btn-primary w-full py-4 rounded-xl select-none cursor-pointer transition-all shadow-md"
            >
              Close ticket
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
