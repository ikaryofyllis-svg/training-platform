
import React from 'react';
import { ViewType } from '../types';

interface BottomNavProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => {
  const navItems = [
    { type: ViewType.HOME, icon: 'home', label: 'Home' },
    { type: ViewType.CALENDAR, icon: 'calendar_month', label: 'Calendar' },
    { type: ViewType.PLANS, icon: 'fitness_center', label: 'Plans' },
    { type: ViewType.PERFORMANCE, icon: 'insights', label: 'Performance' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-2 pb-8 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.type}
          onClick={() => onNavigate(item.type)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeView === item.type ? 'text-primary' : 'text-gray-400 dark:text-gray-500'
          }`}
        >
          <span className={`material-symbols-outlined ${activeView === item.type ? 'active-icon' : ''}`}>
            {item.icon}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${activeView === item.type ? '' : 'font-medium'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
