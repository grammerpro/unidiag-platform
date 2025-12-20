import React from 'react';
import Icon from './Icon';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0 transition-all duration-300">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 bg-primary flex items-center justify-center text-white">
            <Icon name="science" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 text-lg font-bold leading-normal">LabTech</h1>
            <p className="text-slate-500 text-xs font-normal leading-normal">Technician Pro v2.4</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-full hover:bg-slate-100 transition-colors group">
            <Icon name="home" className="text-slate-400 group-hover:text-primary" />
            <p className="text-slate-500 group-hover:text-slate-900 text-sm font-medium leading-normal">Home</p>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-full hover:bg-slate-100 transition-colors group">
            <Icon name="add_circle" className="text-slate-400 group-hover:text-primary" />
            <p className="text-slate-500 group-hover:text-slate-900 text-sm font-medium leading-normal">Accessioning</p>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
            <Icon name="toc" />
            <p className="text-white text-sm font-medium leading-normal">Worklist</p>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-full hover:bg-slate-100 transition-colors group">
            <Icon name="verified_user" className="text-slate-400 group-hover:text-primary" />
            <p className="text-slate-500 group-hover:text-slate-900 text-sm font-medium leading-normal">QC</p>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-full hover:bg-slate-100 transition-colors group">
            <Icon name="inventory_2" className="text-slate-400 group-hover:text-primary" />
            <p className="text-slate-500 group-hover:text-slate-900 text-sm font-medium leading-normal">Inventory</p>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-full hover:bg-slate-100 transition-colors group">
            <Icon name="bar_chart" className="text-slate-400 group-hover:text-primary" />
            <p className="text-slate-500 group-hover:text-slate-900 text-sm font-medium leading-normal">Reports</p>
          </a>
        </nav>
      </div>
      <div className="p-4">
        <button className="flex items-center gap-3 px-3 py-3 rounded-full hover:bg-slate-100 transition-colors w-full text-left text-slate-500 hover:text-slate-900">
          <Icon name="logout" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
