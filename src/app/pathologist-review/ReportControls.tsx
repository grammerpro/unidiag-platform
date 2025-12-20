import React from 'react';

const ReportControls: React.FC = () => {
  return (
    <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#111418]/95 backdrop-blur-sm border-b border-[#e5e7eb] dark:border-[#283039] px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold leading-tight">Hematology Panel</h3>
          <p className="text-sm text-[#637588] dark:text-[#9cabba]">Collection Date: Oct 24, 2023 • 08:30 AM</p>
        </div>
        <div className="flex items-center gap-3 bg-[#f5f7f8] dark:bg-[#1b2127] p-2 pr-4 rounded-full border border-[#e5e7eb] dark:border-[#283039]">
          <label className="relative flex h-[24px] w-[44px] cursor-pointer items-center rounded-full border-none bg-[#cbd5e1] dark:bg-[#3b4754] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors">
            <div className="h-full aspect-square rounded-full bg-white shadow-sm"></div>
            <input className="invisible absolute" type="checkbox" />
          </label>
          <span className="text-sm font-medium text-[#111418] dark:text-white">Highlight Abnormal</span>
        </div>
      </div>
    </div>
  );
};

export default ReportControls;
