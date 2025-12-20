import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '@/components/ui/Table';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';

const worklistData = [
  { id: 1, priority: 'High', sampleId: '88239', patientName: 'John Doe', testName: 'Electrolytes (Na/K/Cl)', status: 'Validation Pending', result: '6.2 (High)', alert: true },
  { id: 2, priority: 'Normal', sampleId: '88240', patientName: 'Jane Smith', testName: 'CBC w/ Diff', status: 'Analyzing', result: '--' },
  { id: 3, priority: 'Normal', sampleId: '88241', patientName: 'Alice Brown', testName: 'Lipid Panel', status: 'Released', result: 'Normal' },
  { id: 4, priority: 'High', sampleId: '88242', patientName: 'Bob White', testName: 'TSH (Thyroid)', status: 'Analyzing', result: '--' },
  { id: 5, priority: 'Normal', sampleId: '88243', patientName: 'Charlie Green', testName: 'HgbA1c', status: 'Validation Pending', result: '5.7 (Prediabetic)', alert: true },
  { id: 6, priority: 'Normal', sampleId: '88244', patientName: 'David Miller', testName: 'Vit D, 25-Hydroxy', status: 'Released', result: '32.0 (Sufficiency)' },
];

const PriorityIcon: React.FC<{ priority: string }> = ({ priority }) => {
  if (priority === 'High') {
    return <div className="flex items-center justify-center size-8 rounded-full bg-red-100 text-red-600" title="High Priority"><Icon name="priority_high" className="text-[20px]" /></div>;
  }
  return <div className="flex items-center justify-center size-8 rounded-full bg-slate-100 text-slate-500" title="Normal Priority"><Icon name="remove" className="text-[20px]" /></div>;
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const baseClasses = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold";
  if (status === 'Validation Pending') {
    return <span className={`${baseClasses} bg-orange-100 text-orange-700 border border-orange-200`}><span className="size-1.5 rounded-full bg-orange-500"></span>{status}</span>;
  }
  if (status === 'Analyzing') {
    return <span className={`${baseClasses} bg-blue-50 text-primary border border-blue-100`}><span className="size-1.5 rounded-full bg-primary animate-pulse"></span>{status}</span>;
  }
  if (status === 'Released') {
    return <span className={`${baseClasses} bg-green-50 text-green-600 border border-green-200`}><span className="size-1.5 rounded-full bg-green-500"></span>{status}</span>;
  }
  return null;
};

const WorklistTable: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-slate-900 text-xl font-bold leading-tight">Master Worklist</h3>
        <div className="flex gap-2">
          <Button variant="secondary" size="small">
            <Icon name="filter_list" className="text-[18px] mr-2" />
            Filter
          </Button>
          <Button size="small">
            <Icon name="refresh" className="text-[18px] mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableHeaderCell>Priority</TableHeaderCell>
          <TableHeaderCell>Sample ID</TableHeaderCell>
          <TableHeaderCell>Patient Name</TableHeaderCell>
          <TableHeaderCell>Test Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Result</TableHeaderCell>
          <TableHeaderCell className="text-right">Actions</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {worklistData.map((row) => (
            <TableRow key={row.id} className={row.alert ? "bg-red-50 border-l-4 border-l-red-500" : "border-l-4 border-l-transparent"}>
              <TableCell><PriorityIcon priority={row.priority} /></TableCell>
              <TableCell className="font-mono text-slate-900">{row.sampleId}</TableCell>
              <TableCell className="font-medium text-slate-900">{row.patientName}</TableCell>
              <TableCell className="text-slate-600">{row.testName}</TableCell>
              <TableCell><StatusBadge status={row.status} /></TableCell>
              <TableCell className={row.alert ? "font-bold text-red-600" : ""}>{row.result}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity" title="View History">
                    <Icon name="history" className="text-[20px]" />
                  </button>
                  {row.status === 'Validation Pending' ? (
                    <Button variant="danger" size="small">
                      <Icon name="check_circle" className="text-[16px] mr-1" />
                      Validate
                    </Button>
                  ) : (
                    <button className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100" title="View Details">
                      <Icon name="visibility" className="text-[20px]" />
                    </button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorklistTable;
