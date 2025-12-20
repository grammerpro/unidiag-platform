import React from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

const FooterActions: React.FC = () => {
  return (
    <footer className="sticky bottom-0 z-50 bg-white dark:bg-[#111418] border-t border-[#e5e7eb] dark:border-[#283039] py-4 px-6 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <button className="flex items-center gap-2 text-[#9cabba] hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium px-4 py-2">
          <Icon name="print" className="text-[20px]" />
          <span>Print Preview</span>
        </button>
        <div className="flex items-center gap-4 ml-auto">
          <Button variant="secondary" size="small">
            Save Draft
          </Button>
          <Button size="small">
            <Icon name="check_circle" className="text-[18px] mr-2" />
            Finalize Report
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default FooterActions;
