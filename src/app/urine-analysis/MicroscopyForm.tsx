import React from 'react';

const MicroscopyForm: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 h-fit">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20 text-primary">
          <span className="material-symbols-outlined">biotech</span>
        </div>
        <h3 className="text-lg font-bold">Microscopy</h3>
      </div>
      <div className="flex flex-col gap-4">
        {/* Input Row */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-sm font-medium text-slate-600 dark:text-[#9cabba] flex-1">RBCs (/hpf)</label>
          <div className="flex items-center bg-slate-50 dark:bg-[#283039] rounded-full px-2 w-32 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <input
              className="w-full bg-transparent border-none text-center text-slate-900 dark:text-white font-medium focus:ring-0 p-0"
              type="text"
              value="0-2"
            />
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
        </div>
        {/* Input Row */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-sm font-medium text-slate-600 dark:text-[#9cabba] flex-1">Pus Cells (/hpf)</label>
          <div className="flex items-center bg-slate-50 dark:bg-[#283039] rounded-full px-2 w-32 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <input
              className="w-full bg-transparent border-none text-center text-slate-900 dark:text-white font-medium focus:ring-0 p-0"
              type="text"
              value="2-4"
            />
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
        </div>
        {/* Input Row */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-sm font-medium text-slate-600 dark:text-[#9cabba] flex-1">Epithelial Cells</label>
          <div className="flex items-center bg-slate-50 dark:bg-[#283039] rounded-full px-2 w-32 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <input
              className="w-full bg-transparent border-none text-center text-slate-900 dark:text-white font-medium focus:ring-0 p-0"
              type="text"
              value="Few"
            />
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
        </div>
        {/* Input Row */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-sm font-medium text-slate-600 dark:text-[#9cabba] flex-1">Casts</label>
          <div className="flex items-center bg-slate-50 dark:bg-[#283039] rounded-full px-2 w-32 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <input
              className="w-full bg-transparent border-none text-center text-slate-900 dark:text-white font-medium focus:ring-0 p-0"
              type="text"
              value="Nil"
            />
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
        </div>
        {/* Input Row */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-sm font-medium text-slate-600 dark:text-[#9cabba] flex-1">Crystals</label>
          <div className="flex items-center bg-slate-50 dark:bg-[#283039] rounded-full px-2 w-32 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <input
              className="w-full bg-transparent border-none text-center text-slate-900 dark:text-white font-medium focus:ring-0 p-0"
              type="text"
              value="Nil"
            />
            <button className="text-[#9cabba] hover:text-white p-2">
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroscopyForm;
