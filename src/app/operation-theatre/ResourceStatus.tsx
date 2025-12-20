import React from 'react';
import ResourceCard from './ResourceCard';
import Icon from '@/components/ui/Icon';

interface Resource {
  id: number;
  name: string;
  serialNumber: string;
  location: string;
  status: 'In Use' | 'Sterile' | 'CSSD/Cleaning';
  progress?: number;
  eta?: string;
  icon: string;
}

interface ResourceStatusProps {
  resources: Resource[];
}

const ResourceStatus: React.FC<ResourceStatusProps> = ({ resources }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-0 gap-4">
        <div className="flex flex-col gap-2 pb-4">
          <h3 className="text-slate-900 text-2xl font-bold leading-tight">Real-time OT Resources</h3>
          <p className="text-slate-500 text-sm">Live status of equipment, sterilization, and consumables.</p>
        </div>
        <div className="flex gap-6 overflow-x-auto">
          <button className="relative flex items-center justify-center pb-4 text-primary">
            <span className="text-sm font-bold tracking-wide">Equipment</span>
            <span className="absolute bottom-0 h-[3px] w-full bg-primary rounded-t-full"></span>
          </button>
          <button className="flex items-center justify-center pb-4 text-slate-500 hover:text-slate-900 transition-colors relative group">
            <span className="text-sm font-bold tracking-wide">Consumables</span>
            <span className="absolute bottom-0 h-[3px] w-0 bg-slate-400 transition-all group-hover:w-full rounded-t-full"></span>
          </button>
          <button className="flex items-center justify-center pb-4 text-slate-500 hover:text-slate-900 transition-colors relative group">
            <span className="text-sm font-bold tracking-wide">Staffing</span>
            <span className="absolute bottom-0 h-[3px] w-0 bg-slate-400 transition-all group-hover:w-full rounded-t-full"></span>
          </button>
        </div>
      </div>
      <div className="w-full bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between animate-pulse">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
            <Icon name="warning" />
          </div>
          <div>
            <p className="text-red-700 font-bold text-sm">Low Stock Alert</p>
            <p className="text-slate-700 text-sm">Emergency Drug Kit - <span className="font-bold">2 units remaining</span> (Restock Required)</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-full transition-colors">
          Order Restock
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {resources.map(resource => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </section>
  );
};

export default ResourceStatus;
