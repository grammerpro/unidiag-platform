import React from 'react';
import PatientHeader from './PatientHeader';
import ReportControls from './ReportControls';
import ResultsTable from './ResultsTable';
import SlideViewer from './SlideViewer';
import ClinicalContext from './ClinicalContext';
import FooterActions from './FooterActions';

const PathologistReviewPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-hidden h-screen flex flex-col">
      <PatientHeader />
      <main className="flex-1 flex overflow-hidden">
        <section className="flex-1 flex flex-col min-w-0 border-r border-[#e5e7eb] dark:border-[#283039] overflow-y-auto bg-white dark:bg-[#111418]">
          <ReportControls />
          <div className="p-6">
            <ResultsTable />
            <SlideViewer />
          </div>
        </section>
        <ClinicalContext />
      </main>
      <FooterActions />
    </div>
  );
};

export default PathologistReviewPage;
