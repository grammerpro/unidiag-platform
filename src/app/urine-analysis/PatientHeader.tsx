import React from 'react';
import Icon from '@/components/ui/Icon';

const PatientHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-[#283039] bg-white dark:bg-[#111418] px-4 py-3 md:px-10">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <div className="size-8 flex items-center justify-center text-primary">
          <Icon name="science" className="text-3xl" />
        </div>
        <h2 className="hidden md:block text-lg font-bold leading-tight tracking-tight">LabOS</h2>
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Patient List</a>
          <a href="#" className="text-primary text-sm font-medium leading-normal">Reports</a>
          <a href="#" className="text-sm font-medium leading-normal hover:text-primary transition-colors">Settings</a>
        </div>
        <button className="flex items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold leading-normal transition-colors">
          <Icon name="person" className="text-[20px] mr-2" />
          <span className="truncate">Profile</span>
        </button>
      </div>
    </header>
  );
};

export default PatientHeader;
