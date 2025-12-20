import React from 'react';
import Layout from '@/components/ui/Layout';
import StatCard from './StatCard';
import WorklistTable from './WorklistTable';

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Samples Received" value="142" change="+12%" changeType="increase" icon="science" />
          <StatCard title="Pending Results" value="38" change="-5%" changeType="decrease" icon="hourglass_top" />
          <StatCard title="Critical Alerts" value="3" isAlert={true} icon="warning" />
          <StatCard title="TAT Breaches" value="1" change="+1" changeType="increase" icon="timer_off" />
        </div>
        <WorklistTable />
      </div>
    </Layout>
  );
};

export default DashboardPage;
