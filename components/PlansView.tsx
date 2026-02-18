import React from 'react';
import { WORKOUT_PLANS } from '../constants';
import { UnitSystem } from '../types';

interface PlansViewProps {
  activePlanId: string;
  onActivate: (id: string) => void;
  onViewIntro: (id: string) => void;
  units: UnitSystem;
}

const PlansView: React.FC<PlansViewProps> = ({ activePlanId, onActivate, onViewIntro, units }) => {
  const activePlan = WORKOUT_PLANS.find(p => p.id === activePlanId);
  if (!activePlan) return null;

  const availablePlans = WORKOUT_PLANS.filter(p => p.id !== activePlanId);

  const convertWeight = (kg: number) => {
    if (units === UnitSystem.METRIC) return `${kg} kg`;
    return `${Math.round(kg * 2.20462)} lbs`;
  };

  return (
    <div className="animate-in fade-in slide-in-from-right duration-500">
      
      {/* HEADER */}
      <header className="px-6 py-8">
        <h1 className="text-3xl font-black uppercase tracking-tighter italic">
          Programs
        </h1>
        <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em] mt-1">
          Select Program
        </p>
      </header>

      {/* ACTIVE PROGRAM SECTION */}
      <section className="px-6 mb-10">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">
          Active Program
        </h2>

        <div className="relative overflow-hidden rounded-[32px] bg-white dark:bg-card-dark shadow-xl border border-primary/20 p-6">
          
          <div className="absolute top-0 right-0 p-4">
            <span className="flex items-center gap-1 text-[8px] font-black bg-primary text-white px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-[10px] active-icon">
                verified
              </span>
              ACTIVE
            </span>
          </div>

          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-100 dark:border-gray-800">
              <img
                src={activePlan.image}
                className="w-full h-full object-cover"
                alt={activePlan.name}
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-1">
                {activePlan.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-[9px] font-bold text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded uppercase">
                  {activePlan.category}
                </span>

                <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
                  {activePlan.difficulty}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 dark:bg-black/20 rounded-xl border border-gray-100 dark:border-white/5">
              <p className="text-[8px] font-bold opacity-40 uppercase mb-1 tracking-widest">
                Duration
              </p>
              <p className="text-sm font-black uppercase italic">
                {activePlan.durationWeeks} Weeks
              </p>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-black/20 rounded-xl border border-gray-100 dark:border-white/5">
              <p className="text-[8px] font-bold opacity-40 uppercase mb-1 tracking-widest">
                Base Intensity
              </p>
              <p className="text-sm font-black uppercase italic">
                {convertWeight(activePlan.baseWeightGoalKg)}
              </p>
            </div>
          </div>

          <button
            onClick={() => onViewIntro(activePlan.id)}
            className="w-full mt-4 bg-primary text-white font-black py-4 rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-primary/20 active:scale-[0.98] transition-all italic"
          >
            View Program
          </button>
        </div>
      </section>

      {/* AVAILABLE PROGRAMS SECTION */}
      <section className="px-6 pb-20">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">
          Available Programs
        </h2>

        <div className="space-y-6">
          {availablePlans.map((plan) => (
            <div
              key={plan.id}
              className="group relative overflow-hidden bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-gray-800 p-5 transition-all hover:border-primary/30 shadow-sm"
            >
              <div className="flex gap-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-100 dark:border-gray-800">
                  <img
                    src={plan.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    alt={plan.name}
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-black text-base uppercase tracking-tight italic leading-tight">
                      {plan.name}
                    </h4>

                    <p className="text-[9px] font-bold opacity-40 mt-1 uppercase tracking-widest">
                      {plan.category} • {plan.durationWeeks} Weeks
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => onViewIntro(plan.id)}
                      className="flex-1 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/5 py-3 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] hover:bg-gray-100 dark:hover:bg-white/10 transition-all active:scale-95"
                    >
                      View Program
                    </button>

                    <button
                      onClick={() => onActivate(plan.id)}
                      className="flex-1 bg-primary text-white py-3 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] shadow-lg shadow-primary/20 hover:bg-red-600 transition-all active:scale-95 italic"
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlansView;
