import React from 'react';

const ChemicalExaminationForm: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20 text-primary">
          <span className="material-symbols-outlined">science</span>
        </div>
        <h3 className="text-lg font-bold">Chemical Examination (Dipstick)</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
        {/* Helper function to generate standardized dropdowns */}
        <div className="contents">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">pH</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option value="5.0">5.0</option>
              <option value="5.5">5.5</option>
              <option selected value="6.0">6.0</option>
              <option value="6.5">6.5</option>
              <option value="7.0">7.0</option>
              <option value="7.5">7.5</option>
              <option value="8.0">8.0</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Glucose</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option selected value="negative">Negative</option>
              <option value="trace">Trace</option>
              <option value="1+">1+</option>
              <option value="2+">2+</option>
              <option value="3+">3+</option>
              <option value="4+">4+</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Protein</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary border-transparent focus:border-orange-500">
              <option value="negative">Negative</option>
              <option value="trace">Trace</option>
              <option selected value="1+">1+</option>
              <option value="2+">2+</option>
              <option value="3+">3+</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Ketones</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option selected value="negative">Negative</option>
              <option value="trace">Trace</option>
              <option value="small">Small</option>
              <option value="moderate">Moderate</option>
              <option value="large">Large</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Bilirubin</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option selected value="negative">Negative</option>
              <option value="1+">1+</option>
              <option value="2+">2+</option>
              <option value="3+">3+</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Urobilinogen</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option selected value="normal">Normal</option>
              <option value="2">2 mg/dL</option>
              <option value="4">4 mg/dL</option>
              <option value="8">8 mg/dL</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Nitrite</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option selected value="negative">Negative</option>
              <option value="positive">Positive</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Leukocytes</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option selected value="negative">Negative</option>
              <option value="trace">Trace</option>
              <option value="small">Small</option>
              <option value="moderate">Moderate</option>
              <option value="large">Large</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-600 dark:text-[#9cabba]">Blood</span>
            <select className="select-chevron w-full h-12 rounded-full bg-slate-50 dark:bg-[#283039] border-none text-slate-900 dark:text-white px-5 focus:ring-2 focus:ring-primary">
              <option selected value="negative">Negative</option>
              <option value="trace-hemolyzed">Trace-Hemolyzed</option>
              <option value="moderate">Moderate</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
};

export default ChemicalExaminationForm;
