import React from 'react';
import Icon from '@/components/ui/Icon';

const ClinicalContext: React.FC = () => {
  return (
    <aside className="w-[40%] hidden lg:flex flex-col border-l border-[#e5e7eb] dark:border-[#283039] bg-[#f8fafc] dark:bg-[#0d1218] overflow-y-auto">
      <div className="p-6 flex flex-col gap-6">
        {/* Trend Analysis Card */}
        <div className="rounded-2xl border border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-sm flex items-center gap-2">
              <Icon name="ssid_chart" className="text-primary text-lg" />
              Hemoglobin Trend
            </h4>
            <select className="bg-[#f5f7f8] dark:bg-[#1b2127] border-none text-xs rounded-full py-1 px-3 text-[#637588] dark:text-[#9cabba] focus:ring-1 focus:ring-primary cursor-pointer">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          {/* Faux Chart Visualization */}
          <div className="relative h-48 w-full">
            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] text-[#637588] dark:text-[#586776] text-right pr-2">
              <span>16.0</span>
              <span>14.0</span>
              <span>12.0</span>
              <span>10.0</span>
            </div>
            {/* Chart Area */}
            <div className="absolute left-8 right-0 top-2 bottom-6 border-l border-b border-[#e5e7eb] dark:border-[#283039]">
              {/* Grid lines */}
              <div className="absolute top-1/4 w-full h-px bg-[#e5e7eb] dark:bg-[#283039] border-dashed border-t border-gray-700/20"></div>
              <div className="absolute top-2/4 w-full h-px bg-[#e5e7eb] dark:bg-[#283039] border-dashed border-t border-gray-700/20"></div>
              <div className="absolute top-3/4 w-full h-px bg-[#e5e7eb] dark:bg-[#283039] border-dashed border-t border-gray-700/20"></div>
              {/* Reference Range Band (12.0 - 15.5) - approx placement */}
              <div className="absolute top-[10%] bottom-[30%] w-full bg-green-500/5 dark:bg-green-500/10"></div>
              {/* Trend Line (CSS drawing) */}
              <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                <path
                  d="M0,40 L60,50 L120,65 L180,80 L240,110 L300,130"
                  fill="none"
                  stroke="#258cf4"
                  strokeLinecap="round"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                ></path>
                {/* Data Points */}
                <circle className="fill-white dark:fill-[#111418] stroke-primary stroke-2" cx="0%" cy="30%" r="4"></circle>
                <circle className="fill-white dark:fill-[#111418] stroke-primary stroke-2" cx="20%" cy="38%" r="4"></circle>
                <circle className="fill-white dark:fill-[#111418] stroke-primary stroke-2" cx="40%" cy="50%" r="4"></circle>
                <circle className="fill-white dark:fill-[#111418] stroke-primary stroke-2" cx="60%" cy="60%" r="4"></circle>
                <circle className="fill-white dark:fill-[#111418] stroke-primary stroke-2" cx="80%" cy="85%" r="4"></circle>
                <circle className="fill-white dark:fill-[#111418] stroke-red-500 stroke-2" cx="100%" cy="98%" r="4"></circle>
              </svg>
            </div>
            {/* X Axis Labels */}
            <div className="absolute left-8 right-0 bottom-0 h-4 flex justify-between text-[10px] text-[#637588] dark:text-[#586776]">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
          </div>
        </div>
        {/* Previous Reports List */}
        <div>
          <h4 className="font-bold text-sm mb-3 text-[#637588] dark:text-[#9cabba]">Previous Reports</h4>
          <div className="flex flex-col gap-3">
            {/* History Item 1 */}
            <div className="group flex items-center justify-between p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-primary">
                  <Icon name="description" />
                </div>
                <div>
                  <p className="text-sm font-bold dark:text-white">Biopsy Report</p>
                  <p className="text-xs text-[#637588] dark:text-[#9cabba]">Oct 12, 2023</p>
                </div>
              </div>
              <button className="size-8 rounded-full flex items-center justify-center hover:bg-[#f5f7f8] dark:hover:bg-[#283039] text-[#637588] dark:text-[#9cabba] transition-colors">
                <Icon name="visibility" className="text-[20px]" />
              </button>
            </div>
            {/* History Item 2 */}
            <div className="group flex items-center justify-between p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Icon name="bloodtype" />
                </div>
                <div>
                  <p className="text-sm font-bold dark:text-white">Blood Work Panel</p>
                  <p className="text-xs text-[#637588] dark:text-[#9cabba]">Aug 05, 2023</p>
                </div>
              </div>
              <button className="size-8 rounded-full flex items-center justify-center hover:bg-[#f5f7f8] dark:hover:bg-[#283039] text-[#637588] dark:text-[#9cabba] transition-colors">
                <Icon name="visibility" className="text-[20px]" />
              </button>
            </div>
            {/* History Item 3 */}
            <div className="group flex items-center justify-between p-4 rounded-2xl border border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#111418] hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Icon name="bloodtype" />
                </div>
                <div>
                  <p className="text-sm font-bold dark:text-white">Routine Checkup</p>
                  <p className="text-xs text-[#637588] dark:text-[#9cabba]">Feb 20, 2023</p>
                </div>
              </div>
              <button className="size-8 rounded-full flex items-center justify-center hover:bg-[#f5f7f8] dark:hover:bg-[#283039] text-[#637588] dark:text-[#9cabba] transition-colors">
                <Icon name="visibility" className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ClinicalContext;
