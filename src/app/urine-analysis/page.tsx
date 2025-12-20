import React from 'react';
import PatientHeader from './PatientHeader';
import PhysicalExaminationForm from './PhysicalExaminationForm';
import ChemicalExaminationForm from './ChemicalExaminationForm';
import MicroscopyForm from './MicroscopyForm';
import MicrographUpload from './MicrographUpload';
import NotesSection from './NotesSection';
import FooterActions from './FooterActions';
import Icon from '@/components/ui/Icon';

const UrineAnalysisPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white overflow-x-hidden">
      <PatientHeader />
      <main className="flex-1 flex flex-col items-center py-6 md:py-10 px-4 md:px-10 w-full">
        <div className="w-full max-w-5xl flex flex-col gap-6">
          <div className="flex flex-wrap justify-between items-end gap-4 border-b border-gray-200 dark:border-[#283039] pb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                <Icon name="arrow_back" className="text-lg" />
                <span>Back to Patient List</span>
              </div>
              <h1 className="text-3xl md:text-[32px] font-bold leading-tight">Urine Analysis Report</h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#9cabba] text-sm">
                <span className="flex items-center gap-1"><Icon name="badge" className="text-[16px]" /> Patient: John Doe</span>
                <span className="flex items-center gap-1"><Icon name="fingerprint" className="text-[16px]" /> ID: 482910</span>
                <span className="flex items-center gap-1"><Icon name="lab_panel" className="text-[16px]" /> Sample: #UA-2023-8492</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold border border-yellow-500/20 uppercase tracking-wider">In Progress</span>
              <span className="text-[#9cabba] text-xs self-center">Last auto-save: 2 min ago</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <PhysicalExaminationForm />
              <ChemicalExaminationForm />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <MicroscopyForm />
              <MicrographUpload />
            </div>
          </div>
          <NotesSection />
        </div>
      </main>
      <FooterActions />
    </div>
  );
};

export default UrineAnalysisPage;
