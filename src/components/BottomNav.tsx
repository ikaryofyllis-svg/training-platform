
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
    { type: ViewType.SETTINGS, icon: 'settings', label: 'Settings' },
  ];

  return (
    <nav
      className="fixed left-4 right-4 z-50 mx-auto flex max-w-[26rem] items-center justify-between rounded-[28px] border border-white/70 bg-white/85 px-2 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-card-dark/85"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {navItems.map((item) => (
        <button
          key={item.type}
          onClick={() => onNavigate(item.type)}
          className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 transition-all ${
            activeView === item.type ? 'bg-primary/10 text-primary' : 'text-gray-400 dark:text-gray-500'
          }`}
        >
          <span className={`material-symbols-outlined text-[21px] ${activeView === item.type ? 'active-icon' : ''}`}>
            {item.icon}
          </span>
          <span className={`max-w-full truncate text-[7px] font-bold uppercase tracking-[0.08em] ${activeView === item.type ? '' : 'font-medium'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
