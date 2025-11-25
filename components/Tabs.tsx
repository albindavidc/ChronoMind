import React from 'react';
import { Timer, Watch } from 'lucide-react';
import { Tab } from '../types';

interface TabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center justify-center gap-2 p-1.5 mx-auto bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-full shadow-2xl shadow-black/80">
      <button
        onClick={() => onTabChange('timer')}
        className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${
          activeTab === 'timer' 
            ? 'bg-gray-800 text-orange-500 shadow-md shadow-black/20' 
            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
        }`}
      >
        <Timer size={18} strokeWidth={activeTab === 'timer' ? 2.5 : 2} />
        <span className="text-xs font-semibold tracking-wider uppercase">Timer</span>
      </button>
      
      <button
        onClick={() => onTabChange('stopwatch')}
        className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 ${
          activeTab === 'stopwatch' 
            ? 'bg-gray-800 text-blue-400 shadow-md shadow-black/20' 
            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
        }`}
      >
        <Watch size={18} strokeWidth={activeTab === 'stopwatch' ? 2.5 : 2} />
        <span className="text-xs font-semibold tracking-wider uppercase">Stopwatch</span>
      </button>
    </div>
  );
};

export default Tabs;