import React from 'react';

const NotesSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 mt-2">
      <h3 className="text-lg font-bold mb-4">Technician Notes / Remarks</h3>
      <textarea
        className="w-full min-h-[100px] rounded-2xl bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white p-4 focus:ring-2 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-[#5a6b7c] resize-y"
        placeholder="Enter any additional observations here..."
      ></textarea>
    </section>
  );
};

export default NotesSection;
