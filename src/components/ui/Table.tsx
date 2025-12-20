import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">{children}</table>
    </div>
  );
};

interface TableHeaderProps {
  children: React.ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return (
    <thead className="bg-slate-50 border-b border-gray-200 text-slate-500">
      <tr>{children}</tr>
    </thead>
  );
};

interface TableBodyProps {
  children: React.ReactNode;
}

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
};

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={`group hover:bg-slate-50 transition-colors ${className}`}>{children}</tr>;
};

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
  return <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>;
};

interface TableHeaderCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ children, className }) => {
  return <th className={`px-6 py-4 text-xs font-semibold uppercase tracking-wider ${className}`}>{children}</th>;
};

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell };
