import React from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4 shrink-0 z-10">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
          <div className="p-2 bg-slate-100 rounded-full text-primary">
            <Icon name="domain" className="text-[20px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Current Branch</span>
            <div className="flex items-center gap-1">
              <h2 className="text-slate-900 text-sm font-bold leading-tight">Main Lab - Downtown</h2>
              <Icon name="expand_more" className="text-slate-400 text-[16px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-xl px-8">
        <label className="flex flex-col w-full h-12">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-slate-100 border border-transparent focus-within:border-primary focus-within:bg-white transition-all">
            <div className="text-slate-400 flex items-center justify-center pl-4 rounded-l-full">
              <Icon name="search" />
            </div>
            <input
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-slate-900 focus:outline-0 bg-transparent h-full placeholder:text-slate-400 px-3 text-sm font-normal leading-normal"
              placeholder="Scan Barcode or Enter Patient ID..."
            />
            <div className="text-slate-400 flex items-center justify-center pr-4 rounded-r-full cursor-pointer hover:text-primary">
              <Icon name="qr_code_scanner" />
            </div>
          </div>
        </label>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative flex items-center justify-center size-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
          <Icon name="notifications" className="text-[20px]" />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className="flex items-center justify-center size-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
          <Icon name="help" className="text-[20px]" />
        </button>
        <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-slate-900">Sarah Jenkins</span>
            <span className="text-xs text-slate-500">Senior Tech</span>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF_srw8zoLTMrpoL9By29zzlxyxWlzXJnpgoato5Hp4J02eAIFynHuR4BU5XtpUbiCtx25X1soUtvxtvzxeTZxf9fR4lLSArQibM3aDu-TwlByhqdv8KJ_UIMAnAvsWsM5_sMu9hZJYqbnt5xgjheYMH0aq4PGJVr4_892-7lXlrHcWXoyUkngAW3vtoaIUM5aKd7JitJnTpWWbEVV3X8F7ScJG2fuLii5dFToBspEl1-_ozCOb2CuW8MczZ2G468AGkI2GxA9J9w")' }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
