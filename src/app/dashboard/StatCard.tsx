import React from 'react';
import { Card } from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: string;
  isAlert?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
  isAlert,
}) => {
  const alertClasses = isAlert ? 'bg-red-50 border border-red-200' : 'bg-white border border-gray-200';
  const valueClasses = isAlert ? 'text-red-900' : 'text-slate-900';
  const titleClasses = isAlert ? 'text-red-700' : 'text-slate-500';
  const iconClasses = isAlert ? 'text-red-500' : 'text-slate-400';

  const changeClasses =
    changeType === 'increase'
      ? 'text-[#0bda5b]'
      : changeType === 'decrease'
      ? 'text-[#fa6238]'
      : '';

  return (
    <Card className={`${alertClasses} hover:border-primary/50 hover:shadow-md transition-all`}>
      <div className="flex items-center justify-between mb-2">
        <p className={`${titleClasses} text-sm font-medium`}>{title}</p>
        <Icon name={icon} className={iconClasses} />
      </div>
      <div className="flex items-end gap-3">
        <p className={`${valueClasses} text-3xl font-bold leading-none`}>{value}</p>
        {change && (
          <p className={`${changeClasses} text-sm font-medium mb-1 flex items-center`}>
            {changeType === 'increase' && <Icon name="trending_up" className="text-[16px]" />}
            {changeType === 'decrease' && <Icon name="trending_down" className="text-[16px]" />}
            {change}
          </p>
        )}
        {isAlert && <div className="bg-red-500 px-2 py-0.5 rounded text-white text-xs font-bold">ACTION REQ</div>}
      </div>
    </Card>
  );
};

export default StatCard;
