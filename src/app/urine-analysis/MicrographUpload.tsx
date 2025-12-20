import React from 'react';

const MicrographUpload: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 flex flex-col grow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20 text-primary">
          <span className="material-symbols-outlined">add_a_photo</span>
        </div>
        <h3 className="text-lg font-bold">Micrograph</h3>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-[#283039] hover:border-primary/50 transition-colors rounded-xl p-8 cursor-pointer bg-slate-50 dark:bg-[#111418] group">
        <div className="size-16 rounded-full bg-[#283039] group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
          <span className="material-symbols-outlined text-[#9cabba] group-hover:text-primary text-3xl">upload_file</span>
        </div>
        <p className="text-slate-900 dark:text-white font-medium text-center mb-1">Upload Micrograph</p>
        <p className="text-[#9cabba] text-sm text-center">Drag image or browse</p>
      </div>
    </section>
  );
};

export default MicrographUpload;
