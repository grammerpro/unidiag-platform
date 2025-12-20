import React from 'react';
import Icon from '@/components/ui/Icon';

interface ResourceCardProps {
  name: string;
  serialNumber: string;
  location: string;
  status: 'In Use' | 'Sterile' | 'CSSD/Cleaning';
  progress?: number;
  eta?: string;
  icon: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  name,
  serialNumber,
  location,
  status,
  progress,
  eta,
  icon,
}) => {
  const statusClasses = {
    'In Use': 'bg-blue-50 text-blue-700 border-blue-200',
    Sterile: 'bg-green-50 text-green-700 border-green-200',
    'CSSD/Cleaning': 'bg-red-50 text-red-700 border-red-200',
  };

  const iconColorClasses = {
    'In Use': 'text-primary',
    Sterile: 'text-green-600',
    'CSSD/Cleaning': 'text-red-500',
  };

  return (
    <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col justify-between gap-4 hover:border-primary/50 hover:shadow-md transition-all group">
      <div className="flex justify-between items-start">
        <div className={`size-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center ${iconColorClasses[status]}`}>
          <Icon name={icon} style={{ fontSize: '28px' }} />
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${statusClasses[status]}`}>
          {status === 'In Use' && <span className="size-2 rounded-full bg-primary animate-pulse"></span>}
          {status === 'Sterile' && <span className="size-2 rounded-full bg-green-500"></span>}
          {status === 'CSSD/Cleaning' && <Icon name="autorenew" className="text-[14px]" />}
          {status}
        </span>
      </div>
      <div>
        <h4 className="text-slate-900 font-bold text-lg">{name}</h4>
        <p className="text-slate-500 text-xs">{serialNumber} • {location}</p>
      </div>
      {progress && (
        <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
          <div className="bg-primary h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      {eta && <p className="text-[10px] text-slate-400 text-right">{eta}</p>}
    </div>
  );
};

export default ResourceCard;
