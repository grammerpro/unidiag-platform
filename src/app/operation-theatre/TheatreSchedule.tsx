import React from 'react';
import BookingCard from './BookingCard';

interface Booking {
  id: number;
  location: string;
  subLocation: string;
  procedure: string;
  doctor: string;
  startTime: string;
  duration: string;
  color: 'blue' | 'indigo' | 'emerald';
  isStacked?: boolean;
}

interface TheatreScheduleProps {
  bookings: Booking[];
}

const TheatreSchedule: React.FC<TheatreScheduleProps> = ({ bookings }) => {
  const locations = Array.from(new Set(bookings.map(b => b.location)));

  return (
    <section className="flex flex-col gap-4">
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="grid grid-cols-[200px_1fr] border-b border-slate-200 bg-slate-50">
          <div className="p-4 border-r border-slate-200 flex items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</span>
          </div>
          <div className="grid grid-cols-12 divide-x divide-slate-200">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="p-3 text-center text-xs text-slate-500 font-medium">{`${String(i + 8).padStart(2, '0')}:00`}</div>
            ))}
          </div>
        </div>
        {locations.map(location => (
          <div key={location} className="grid grid-cols-[200px_1fr] border-b border-slate-200 hover:bg-slate-50 transition-colors group">
            <div className="p-4 border-r border-slate-200 flex flex-col justify-center gap-1">
              <h3 className="text-slate-900 text-sm font-bold">{location}</h3>
              <span className="text-slate-500 text-xs">{bookings.find(b => b.location === location)?.subLocation}</span>
            </div>
            <div className="relative h-20 bg-gradient-to-r from-transparent via-slate-100 to-transparent bg-[length:40px_100%]">
              <div className="absolute inset-0 grid grid-cols-12 divide-x divide-slate-100 pointer-events-none">
                {[...Array(12)].map((_, i) => <div key={i} className="h-full"></div>)}
              </div>
              {bookings.filter(b => b.location === location).map(booking => (
                <BookingCard key={booking.id} {...booking} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheatreSchedule;
