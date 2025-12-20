import React from 'react';

const PhysicalExaminationForm: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20 text-primary">
          <span className="material-symbols-outlined">visibility</span>
        </div>
        <h3 className="text-lg font-bold">Physical Examination</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Color</span>
          <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
            <option disabled value="">Select color</option>
            <option selected value="pale-yellow">Pale Yellow</option>
            <option value="yellow">Yellow</option>
            <option value="dark-yellow">Dark Yellow</option>
            <option value="amber">Amber</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Transparency</span>
          <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
            <option disabled value="">Select transparency</option>
            <option selected value="clear">Clear</option>
            <option value="hazy">Hazy</option>
            <option value="cloudy">Cloudy</option>
            <option value="turbid">Turbid</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Specific Gravity</span>
          <input
            className="w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-[#5a6b7c]"
            placeholder="1.000"
            step="0.005"
            type="number"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Volume (ml)</span>
          <input
            className="w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-[#5a6b7c]"
            placeholder="e.g. 50"
            type="number"
          />
        </label>
      </div>
    </section>
  );
};

export default PhysicalExaminationForm;
