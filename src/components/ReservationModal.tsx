import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ReservationFormData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2',
    seating: 'indoor',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="relative bg-[#151518] border border-stone-800 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800 bg-stone-900/60 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-[#C28E58] uppercase">
              Table Booking
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
              Reserve at Harry's
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close reservation modal"
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#C28E58]/20 border border-[#C28E58] text-[#C28E58] flex items-center justify-center mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#FAF8F5] mb-2">
                Reservation Request Received!
              </h4>
              <p className="text-sm text-stone-300 max-w-md mb-6 leading-relaxed">
                Thank you, <span className="text-[#C28E58] font-medium">{formData.fullName || 'Guest'}</span>! We have noted your request for a table of <span className="text-white font-medium">{formData.guests} guests</span> on <span className="text-white font-medium">{formData.date}</span> at <span className="text-white font-medium">{formData.time}</span> ({formData.seating === 'patio' ? 'Patio' : 'Indoor'}).
              </p>
              <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800 text-xs text-stone-400 max-w-md w-full mb-6 text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span>Restaurant Phone:</span>
                  <a href={RESTAURANT_INFO.phoneTel} className="text-[#C28E58] font-mono font-medium">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location:</span>
                  <span className="text-stone-200">F-10 Markaz, Islamabad</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Seating preference:</span>
                  <span className="text-stone-200 capitalize">{formData.seating}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="flex-1 bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C28E58]" />
                  <span>Call to Confirm</span>
                </a>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-[#C28E58] hover:bg-[#a87442] text-stone-950 font-semibold py-3 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bilal Khan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700/80 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#C28E58] focus:ring-1 focus:ring-[#C28E58]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700/80 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#C28E58] focus:ring-1 focus:ring-[#C28E58]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C28E58]" /> Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-700/80 text-sm text-stone-100 focus:outline-none focus:border-[#C28E58]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C28E58]" /> Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-700/80 text-sm text-stone-100 focus:outline-none focus:border-[#C28E58]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="15:00">03:00 PM (Afternoon)</option>
                    <option value="17:00">05:00 PM (Tea / Coffee)</option>
                    <option value="18:30">06:30 PM (Early Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                    <option value="22:30">10:30 PM (Patio Evening)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#C28E58]" /> Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-700/80 text-sm text-stone-100 focus:outline-none focus:border-[#C28E58]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5-6">5 – 6 Persons</option>
                    <option value="7-10">7 – 10 Persons (Group)</option>
                    <option value="10+">10+ Persons (Party)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Seating Preference
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'indoor', label: 'Cozy Indoor' },
                    { id: 'patio', label: 'Open-Air Patio' },
                    { id: 'any', label: 'First Available' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, seating: option.id as any })}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                        formData.seating === option.id
                          ? 'bg-[#C28E58]/15 border-[#C28E58] text-[#C28E58] font-semibold'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C28E58]" /> Special Request / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Birthday, anniversary, high chair, dietary notes..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700/80 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#C28E58]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#C28E58] hover:bg-[#a87442] text-stone-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#C28E58]/20 cursor-pointer"
                >
                  Submit Reservation Request
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center">
                Or call directly for immediate bookings: <a href={RESTAURANT_INFO.phoneTel} className="text-[#C28E58] font-mono hover:underline">{RESTAURANT_INFO.phone}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
