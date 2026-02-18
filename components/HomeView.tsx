import React, { useState } from 'react';
import { WORKOUT_PLANS } from '../constants';
import { ViewType, UnitSystem, Session } from '../types';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  activePlanId: string;
  units: UnitSystem;
  sessions?: Session[]; // optional for safety
  onOpenSettings: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  activePlanId,
  units,
  sessions = [], // default to empty array
  onOpenSettings
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Programs');

  const activePlan = WORKOUT_PLANS.find(p => p.id === activePlanId);
  if (!activePlan) return null;

  // ✅ Safe completion calculation
  const totalSessions = sessions.length;
  const completedSessions = sessions.filter(s => s.completed).length;

  const completionPercentage =
    totalSessions > 0
      ? Math.round((completedSessions / totalSessions) * 100)
      : 0;

  const categories = ['All Programs', 'Strength', 'Hypertrophy', 'Conditioning', 'Mobility'];

  const filteredPrograms = WORKOUT_PLANS
    .filter(p => p.id !== activePlanId)
    .filter(p => selectedCategory === 'All Programs' || p.category === selectedCategory);

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
      <section className="px-6 mt-4">
        <div className="bg-white dark:bg-card-dark rounded-3xl p-6 shadow-lg">

          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-2xl font-black uppercase italic">
                {activePlan.name}
              </h3>
              <p className="text-sm text-primary font-bold uppercase">
                {activePlan.goalType}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xl font-black text-primary">
                {completionPercentage}%
              </p>
              <p className="text-xs opacity-40 uppercase">Completion</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>

          <div className="mt-3 text-xs opacity-50 uppercase">
            {completedSessions} / {totalSessions} Sessions Completed
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => onNavigate(ViewType.CALENDAR)}
              className="flex-1 bg-primary text-white py-3 rounded-xl font-bold"
            >
              Continue
            </button>
            <button
              onClick={() => onNavigate(ViewType.PLANS)}
              className="px-4 border rounded-xl"
            >
              Plans
            </button>
          </div>
        </div>
      </section>

      {/* Browse Programs */}
      <section className="px-6 mt-8 pb-12">
        <h2 className="text-lg font-black uppercase mb-4">
          Browse Protocols
        </h2>

        {filteredPrograms.length === 0 && (
          <div className="text-center opacity-40 py-10">
            No other programs available
          </div>
        )}

        {filteredPrograms.map(program => (
          <div
            key={program.id}
            className="bg-white dark:bg-card-dark rounded-2xl p-4 mb-4 shadow"
          >
            <h4 className="font-bold uppercase">{program.name}</h4>
            <p className="text-xs opacity-50 uppercase">
              {program.goalType}
            </p>
            <p className="text-xs opacity-40">
              {program.durationWeeks} Weeks
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeView;
