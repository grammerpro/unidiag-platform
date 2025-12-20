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

const resultsData = [
  { id: 1, testName: 'Hemoglobin', result: '11.2 (L)', units: 'g/dL', refRange: '12.0 - 15.5', status: 'Low', abnormal: true },
  { id: 2, testName: 'WBC', result: '6.5', units: 'K/uL', refRange: '4.5 - 11.0', status: 'Normal' },
  { id: 3, testName: 'Platelets', result: '250', units: 'K/uL', refRange: '150 - 450', status: 'Normal' },
  { id: 4, testName: 'RBC', result: '4.1', units: 'M/uL', refRange: '3.8 - 5.1', status: 'Normal' },
  { id: 5, testName: 'Neutrophils %', result: '75.2 (H)', units: '%', refRange: '40.0 - 70.0', status: 'High', abnormal: true },
  { id: 6, testName: 'Lymphocytes %', result: '20.1', units: '%', refRange: '20.0 - 45.0', status: 'Normal' },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const baseClasses = "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold";
  if (status === 'Low') {
    return <span className={`${baseClasses} bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20`}><Icon name="warning" className="text-[16px]" />{status}</span>;
  }
  if (status === 'High') {
    return <span className={`${baseClasses} bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20`}><Icon name="arrow_upward" className="text-[16px]" />{status}</span>;
  }
  if (status === 'Normal') {
    return <span className={`${baseClasses} bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20`}>{status}</span>;
  }
  return null;
};


const ResultsTable: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e5e7eb] dark:border-[#3b4754] bg-white dark:bg-[#161c22]">
      <Table>
        <TableHeader>
          <TableHeaderCell>Test Name</TableHeaderCell>
          <TableHeaderCell>Result</TableHeaderCell>
          <TableHeaderCell>Units</TableHeaderCell>
          <TableHeaderCell>Ref. Range</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {resultsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.testName}</TableCell>
              <TableCell className={row.abnormal ? 'font-bold text-red-500 dark:text-red-400' : ''}>{row.result}</TableCell>
              <TableCell className="text-[#637588] dark:text-[#9cabba]">{row.units}</TableCell>
              <TableCell className="text-[#637588] dark:text-[#9cabba]">{row.refRange}</TableCell>
              <TableCell><StatusBadge status={row.status} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultsTable;
