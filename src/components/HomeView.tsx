import React, { useState } from 'react';
import { WORKOUT_PLANS } from "../data/programs";
import { ViewType, UnitSystem, Session } from '../types';

interface HomeViewProps {
  onNavigate: (view: ViewType, payload?: string) => void;
  onViewIntro: (id: string) => void;
  activePlanId: string;
  units: UnitSystem;
  sessions?: Session[]; // optional for safety
  onOpenSettings: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onViewIntro, 
  activePlanId,
  units,
  sessions = [], // default to empty array
  onOpenSettings
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const activePlan = WORKOUT_PLANS.find(p => p.id === activePlanId);
  if (!activePlan) return null;

  // ✅ Safe completion calculation
  const totalSessions = sessions.length;
  const completedSessions = sessions.filter(s => s.completed).length;

  const completionPercentage =
    totalSessions > 0
      ? Math.round((completedSessions / totalSessions) * 100)
      : 0;

  const categories = [
  'all',
  'strength',
  'conditioning',
  'hypertrophy',
  'mobility'
];


  const filteredPrograms = WORKOUT_PLANS
  .filter(p => p.id !== activePlanId)
  .filter(p =>
    selectedCategory === 'all' ||
    p.category.includes(selectedCategory)
  );


  return (
    <div className="animate-in fade-in duration-500">

      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tighter italic">
            Active Protocol
          </h1>
        </div>
        <button
          onClick={onOpenSettings}
          className="w-10 h-10 flex items-center justify-center rounded-xl border"
        >
          ⚙
        </button>
      </header>

    {/* Active Plan Card */}
<section className="px-6 mt-6">
  <div className="relative rounded-[36px] overflow-hidden shadow-2xl min-h-[300px]">

    {/* Background Image */}
    <img
      src={activePlan.image}
      alt={activePlan.name}
      className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="relative z-10 p-8 text-white">

      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-black uppercase italic tracking-tight">
            {activePlan.name}
          </h3>
          <p className="text-sm font-bold uppercase tracking-widest text-red-400 mt-1">
            {activePlan.goalType}
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-black">
            {completionPercentage}%
          </p>
          <p className="text-[10px] uppercase opacity-70">
            Completion
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
        <div
          className="bg-red-500 h-full transition-all duration-500"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>

      <div className="mt-3 text-xs uppercase opacity-80">
        {completedSessions} / {totalSessions} Sessions Completed
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => onNavigate(ViewType.CALENDAR)}
          className="flex-1 bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-black uppercase tracking-wide"
        >
          Continue
        </button>

        <button
          onClick={() => onNavigate(ViewType.PLANS)}
          className="px-6 border border-white/40 rounded-2xl font-bold uppercase text-sm"
        >
          Plans
        </button>
      </div>

    </div>
  </div>
</section>

      {/* Browse Programs */}
      <section className="px-6 mt-8 pb-12">
  <div className="flex items-center gap-4 mb-6">
  <h2 className="text-lg font-black uppercase tracking-tight whitespace-nowrap">
    Browse Protocols
  </h2>

  <div className="flex-1 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full" />
</div>

  <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar">
  {categories.map(cat => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`
        px-5 py-2 rounded-full text-xs font-bold capitalize transition-all
        ${
          selectedCategory === cat
            ? 'bg-primary text-white shadow-md'
            : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300'
        }
      `}
    >
      {cat === 'all' ? 'All Programs' : cat}
    </button>
  ))}
</div>


  {filteredPrograms.length === 0 && (
    <div className="text-center opacity-40 py-10">
      No other programs available
    </div>
  )}

  {filteredPrograms.map(program => (
    <div
      key={program.id}
      onClick={() => onViewIntro(program.id)}
      className="cursor-pointer bg-white dark:bg-card-dark rounded-2xl p-4 mb-4 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800"
    >
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h4 className="font-black uppercase text-sm tracking-tight">
            {program.name}
          </h4>

          <p className="text-[10px] opacity-50 uppercase tracking-widest">
            {program.category}
          </p>

          <p className="text-[10px] opacity-40">
            {program.durationWeeks} Weeks
          </p>
        </div>
      </div>
    </div>
  ))}


      </section>
    </div>
  );
};

export default HomeView;
