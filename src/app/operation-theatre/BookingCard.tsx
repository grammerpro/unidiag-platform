import React from 'react';
import Icon from '@/components/ui/Icon';

interface BookingCardProps {
  procedure: string;
  doctor: string;
  startTime: string;
  duration: string;
  color: 'blue' | 'indigo' | 'emerald';
}

const BookingCard: React.FC<BookingCardProps> = ({ procedure, doctor, startTime, duration, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100',
  };

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 h-12 rounded-full border transition-all cursor-pointer flex items-center px-4 gap-3 z-10 ${colorClasses[color]}`}
      style={{ left: startTime, width: duration }}
    >
      <div className={`size-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-${color}-100 text-${color}-500`}>
        <Icon name={color === 'blue' ? 'person' : color === 'indigo' ? 'science' : 'bed'} className="text-sm" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-xs font-bold truncate">{procedure}</span>
        <span className="text-[10px] opacity-80 truncate">{doctor}</span>
      </div>
    </div>
  );
};

export default BookingCard;
