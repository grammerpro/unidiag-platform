import React from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

const FooterActions: React.FC = () => {
  return (
    <footer className="flex-none border-t border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] px-6 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-30">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="secondary" size="small" className="flex-1 sm:flex-none">
            <Icon name="edit_note" className="text-[20px] mr-2" />
            Add Note
          </Button>
          <Button variant="secondary" size="small" className="flex-1 sm:flex-none">
            <Icon name="restart_alt" className="text-[20px] mr-2" />
            Request Retest
          </Button>
        </div>
        <Button size="small" className="w-full sm:w-auto">
          <Icon name="verified" className="text-[20px] mr-2" />
          Approve & Sign
        </Button>
      </div>
    </footer>
  );
};

export default FooterActions;
