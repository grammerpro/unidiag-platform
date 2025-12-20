import React from 'react';
import TheatreSchedule from './TheatreSchedule';
import ResourceStatus from './ResourceStatus';
import Icon from '@/components/ui/Icon';

const bookings = [
  { id: 1, location: 'OT-1 (General)', subLocation: 'Level 2, Wing A', procedure: 'Appendectomy', doctor: 'Dr. Smith', startTime: '8.33%', duration: '16.66%', color: 'blue' },
  { id: 2, location: 'Endoscopy Suite', subLocation: 'Level 2, Wing B', procedure: 'Colonoscopy', doctor: 'Dr. Yu', startTime: '20.83%', duration: '8.33%', color: 'indigo' },
  { id: 3, location: 'Recovery Room', subLocation: 'Level 3, Wing A', procedure: 'Post-op (Smith)', doctor: '', startTime: '25%', duration: '16.66%', color: 'emerald', isStacked: false },
  { id: 4, location: 'Recovery Room', subLocation: 'Level 3, Wing A', procedure: 'Post-op (Yu)', doctor: '', startTime: '33.33%', duration: '16.66%', color: 'emerald', isStacked: true },
];

const resources = [
  { id: 1, name: "Laparoscopy Tower A", serialNumber: "SN: LAP-2023-001", location: "OT-1", status: "In Use", progress: 65, eta: "Est. finish: 11:30", icon: "biotech" },
  { id: 2, name: "Endoscope #4", serialNumber: "SN: END-2022-094", location: "Storage B", status: "Sterile", icon: "medical_services" },
  { id: 3, name: "Surgical Tray B", serialNumber: "SN: TR-GEN-002", location: "Sterilization Unit", status: "CSSD/Cleaning", progress: 30, eta: "Ready in: 45m", icon: "cleaning_services" },
  { id: 4, name: "Anesthesia Cart C", serialNumber: "SN: AN-2023-102", location: "OT-2 Prep", status: "Sterile", icon: "monitor_heart" },
];


const OperationTheatrePage: React.FC = () => {
  return (
    <div className="bg-background-light text-slate-900 font-display overflow-hidden h-screen flex">
      <aside className="w-72 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col justify-between h-full p-4 overflow-y-auto">
        {/* Sidebar content from screen_3.html */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center px-2">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm border border-slate-200" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgEPAurXoqAwNmg8sqmzGbz4loV0Gy8QbIqbdOgo5SxlkC97iMPZwmK9cxpW91VUDLCexmHiCvKS_AQLH3SLzZQ3ZW6miQmGHxW9E4HjhGfCJlQoJUQ-lKXyWjGFu1LYIV0SKh4RQkIKnbfCz1rG2qvz8kEr2NoFkOiQXVnd4ArQl0kHwSYGrYBFfPh1bOx9feHQco7IS5QJIoy7cmKyHEsT7Pzf1VlsG_H8qvwD-04pHKG6n6lpyo9hQQqL463wdqtJmLvXlnLN8")'}}>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-base font-bold leading-normal">Dr. Admin</h1>
              <p className="text-slate-500 text-xs font-medium leading-normal">Head Surgeon</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all">
              <Icon name="calendar_month" className="fill-1" style={{ fontSize: '24px' }} />
              <p className="text-sm font-bold tracking-wide">Schedule</p>
            </a>
            {/* Other nav items */}
          </nav>
        </div>
        <div className="px-2">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-full text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
            <Icon name="logout" style={{ fontSize: '24px' }} />
            <p className="text-sm font-medium tracking-wide">Log Out</p>
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-shrink-0 border-b border-slate-200 bg-white z-20">
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 px-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2 className="text-slate-900 text-3xl font-bold tracking-tight">Theatre Schedule</h2>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-primary border border-primary/20">Live View</span>
              </div>
              <p className="text-slate-500 text-sm font-normal flex items-center gap-2">
                <Icon name="today" className="text-sm" />
                Today, Oct 24
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 rounded-full p-1 flex border border-slate-200">
                <button className="px-4 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-sm">Day</button>
                <button className="px-4 py-1.5 rounded-full text-slate-500 hover:text-slate-900 text-xs font-medium transition-colors">Week</button>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800 transition-colors rounded-full text-sm font-bold">
                <Icon name="add" style={{ fontSize: '20px' }} />
                Add Booking
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 flex flex-col gap-8 bg-slate-50">
          <TheatreSchedule bookings={bookings} />
          <ResourceStatus resources={resources} />
        </div>
      </main>
    </div>
  );
};

export default OperationTheatrePage;
