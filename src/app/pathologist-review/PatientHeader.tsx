import React from 'react';
import Icon from '@/components/ui/Icon';

const PatientHeader: React.FC = () => {
  return (
    <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] px-6 py-3 z-20 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
          <Icon name="person" />
        </div>
        <div>
          <h2 className="text-base dark:text-white font-bold leading-tight tracking-[-0.015em]">Jane Doe</h2>
          <div className="flex items-center gap-2 text-xs text-[#637588] dark:text-[#9cabba]">
            <span>F</span>
            <span className="size-1 rounded-full bg-[#637588] dark:bg-[#9cabba]"></span>
            <span>45yo</span>
            <span className="size-1 rounded-full bg-[#637588] dark:bg-[#9cabba]"></span>
            <span>MRN: #839201</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full border border-yellow-500/20">
          <Icon name="schedule" className="text-sm" />
          <span className="text-xs font-bold uppercase tracking-wide">Pending Review</span>
        </div>
      </div>
    </header>
  );
};

export default PatientHeader;
