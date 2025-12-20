import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background-light font-display text-slate-900 overflow-hidden h-screen flex">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        <div className="flex-1 overflow-y-auto bg-background-light p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
