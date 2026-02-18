
import React, { useState, useEffect } from 'react';
import { Session, Program } from '../types';

interface CalendarViewProps {
  onOpenWorkout: (session: Session) => void;
  currentDay: number;
  sessions: Session[];
  activePlan: WorkoutPlan;
  onFullReset: () => void;
  onPhaseReset: () => void;
}


const CalendarView: React.FC<CalendarViewProps> = ({ onOpenWorkout, currentDay, sessions, activePlan, onFullReset, onPhaseReset }) => {
  console.log("THIS IS THE CORRECT CALENDAR FILE");
  console.log("FullReset:", typeof onFullReset);
  console.log("PhaseReset:", typeof onPhaseReset);
  // Parse duration string e.g., "12 Weeks" -> 12
  const totalWeeks = activePlan.durationWeeks;
  const totalDays = totalWeeks * 7;
  const totalBlocks = Math.ceil(totalWeeks / 4);
// 👇 ADD THESE TWO LINES RIGHT HERE
  const currentWeek = Math.ceil(currentDay / 7);

  const currentPhase = activePlan.phases.find(
    phase =>
      currentWeek >= phase.startWeek &&
      currentWeek <= phase.endWeek
);

  // Determine which 4-week block the currentDay belongs to
  const initialBlock = Math.floor((currentDay - 1) / 28);
  const [blockIndex, setBlockIndex] = useState(initialBlock);

  // Sync blockIndex if currentDay moves past the current block
  useEffect(() => {
    const targetBlock = Math.floor((currentDay - 1) / 28);
    if (targetBlock < totalBlocks) {
      setBlockIndex(targetBlock);
    }
  }, [currentDay, totalBlocks]);

  const startDay = (blockIndex * 28) + 1;
  // End day is either the end of the 28-day block or the end of the program
  const endDay = Math.min(startDay + 27, totalDays);

  const generateWeeksInBlock = () => {
    const weeksArr = [];
    // Only generate up to 4 weeks, and don't exceed the total program length
    for (let i = 0; i < 4; i++) {
      const weekStart = startDay + (i * 7);
      if (weekStart > totalDays) break;
      
      const weekNumber = Math.ceil(weekStart / 7);
      weeksArr.push({
        label: `Week ${weekNumber}`,
        days: Array.from({ length: 7 }, (_, idx) => {
          const day = weekStart + idx;
          return day <= totalDays ? day : null;
        })
      });
    }
    return weeksArr;
  };

  const weeks = generateWeeksInBlock();

  const handlePrev = () => setBlockIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setBlockIndex(prev => Math.min(totalBlocks - 1, prev + 1));

  const getSessionForDay = (day: number) => sessions.find(s => s.day === day);

  return (
    <div className="animate-in slide-in-from-right duration-500 font-manrope pb-32">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between px-6 py-8 bg-white/90 dark:bg-background-dark/90 sticky top-0 z-40 backdrop-blur-xl border-b border-gray-100 dark:border-white/5">
        <button 
          onClick={handlePrev}
          disabled={blockIndex === 0}
          className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-card-dark rounded-2xl hover:text-primary transition-all active:scale-90 disabled:opacity-30"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        
        <div className="flex flex-col items-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-1">
            {activePlan.name}
          </h2>
          <p className="text-xl font-black uppercase tracking-tighter italic">
            Days {startDay} – {endDay}
          </p>
        </div>

        <button 
          onClick={handleNext}
          disabled={blockIndex >= totalBlocks - 1}
          className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-card-dark rounded-2xl hover:text-primary transition-all active:scale-90 disabled:opacity-30"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Grid Overview (Macro) */}
      <section className="px-6 mt-6">
        <div className="bg-white dark:bg-card-dark p-6 rounded-[32px] shadow-2xl border border-gray-100 dark:border-white/5">
          <div className="grid grid-cols-8 gap-2 text-center">
            <div className="text-[8px] font-black text-primary/30 uppercase flex items-center justify-center">Wk</div>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
 	      <div
   		key={i}
                 className="text-[9px] font-black text-gray-400 dark:text-gray-600 uppercase pb-2"
              >
   		{d}
 	      </div>
            ))}

            {weeks.map((week) => (
              <React.Fragment key={week.label}>
                <div className="flex items-center justify-center">
                  <span className="text-[9px] font-black text-primary/40 uppercase tracking-tighter italic">
                    {week.label.split(' ')[1]}
                  </span>
                </div>
                {week.days.map((day, idx) => {
                  if (day === null) return <div key={`empty-${idx}`} />;
                  
                  const session = getSessionForDay(day);
                  const isCompleted = session?.completed;
                  const isActive = day === currentDay;
                  
                  
                  return (
                    <div 
                      key={day} 
                      onClick={() => session && onOpenWorkout?.(session)}
                      className={`aspect-square flex flex-col items-center justify-center text-[11px] font-black rounded-xl transition-all duration-300 relative ${
                        isActive 
                          ? 'bg-primary text-white shadow-xl shadow-primary/30 ring-2 ring-primary/20 scale-105 z-10' 
                          : isCompleted 
                            ? 'text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-white/5 border border-transparent' 
                            : 'border border-gray-100 dark:border-white/5 text-gray-400 dark:text-gray-700'
                      } ${session ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      {day}
                     
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Breakdown (Full Day-by-Day List for the Block) */}
<section className="px-6 mt-12 space-y-12">
  {weeks.map((week) => {
    const weekNumber = parseInt(week.label.replace('Week ', ''));

    const phaseForWeek = activePlan.phases.find(
      phase =>
        weekNumber >= phase.startWeek &&
        weekNumber <= phase.endWeek
    );

    return (
      <div key={week.label} className="space-y-4">
        <div className="space-y-2 mb-2">

          {/* PHASE HEADER */}
          {phaseForWeek && (
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
                Phase {activePlan.phases.indexOf(phaseForWeek) + 1}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                {phaseForWeek.name}
              </p>
            </div>
          )}

  {/* WEEK HEADER */}
  <div className="flex items-center gap-4">
    <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em]">
      {week.label}
    </h3>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
  </div>

</div>

             
            <div className="space-y-3">
              {week.days.map((day) => {
                if (day === null) return null;
                const session = getSessionForDay(day);
                const isCompleted = session?.completed === true;
                const isActive = day === currentDay;

                return (
                  <div 
                    key={day}
                    onClick={() => session && onOpenWorkout?.(session)}
                    className={`group flex items-center gap-4 p-4 rounded-[24px] border transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-white shadow-2xl shadow-primary/40 border-primary scale-[1.02] cursor-pointer' 
                        : isCompleted
                          ? 'bg-white dark:bg-card-dark border-gray-100 dark:border-white/5 opacity-50 grayscale cursor-pointer'
                          : session
                            ? 'bg-white dark:bg-card-dark border-gray-100 dark:border-white/5 shadow-sm cursor-pointer hover:border-primary/30'
                            : 'bg-transparent border-dashed border-gray-200 dark:border-white/5 opacity-40'
                    }`}
                  >
                    <div className="flex flex-col items-center shrink-0 w-8">
                      <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? 'text-white/60' : 'text-gray-400'}`}>D</span>
                      <span className={`text-lg font-black italic ${isActive ? 'text-white' : 'text-primary'}`}>{day}</span>
                    </div>

                    <div className="flex-1">
                      {session ? (
                        <>
                          <h4 className={`text-xs font-black uppercase tracking-tight leading-none mb-1 ${isActive ? 'text-white' : 'text-gray-800 dark:text-gray-100'}`}>
                            {session.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className={`text-[8px] font-black uppercase tracking-[0.1em] ${isActive ? 'text-white/70' : 'text-gray-500'}`}>
                              {session.exercises?.length || 0} Exercises
                            </span>
                            {isCompleted && (
                              <span className="text-[8px] font-black text-green-500 uppercase flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[10px]">verified</span>
                                Synced
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center gap-2">
                           <span className="material-symbols-outlined text-sm opacity-50">bedtime</span>
                           <h4 className="text-[10px] font-black uppercase tracking-[0.1em] opacity-50 italic">Rest & Recovery Cycle</h4>
                        </div>
                      )}
                    </div>

                    {session && (
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-white text-primary shadow-lg' 
                          : isCompleted 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-gray-50 dark:bg-white/5 text-gray-300 group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        <span className="material-symbols-outlined text-xl active-icon">
                          {isCompleted ? 'history' : isActive ? 'play_arrow' : 'lock_open'}
                        </span>
                      </div>
                    )}
                  </div>	
                );
              })}
            </div>
          </div>
          );
        })}
      </section>

      {/* RESET SECTION */}
      <section className="px-6 pb-24 mt-12">
        <div className="border-t border-gray-200 dark:border-white/10 pt-6">

          <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">
            Program Controls
          </h3>

          <div className="space-y-3">
            <button
              onClick={() => {
                if (confirm("Reset current phase?")) {
                  onPhaseReset();
                }
              }}
              className="w-full py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-white/10 transition"
            >
              Reset Current Phase
            </button>

            <button
              onClick={() => {
                if (confirm("Reset entire program?")) {
                  onFullReset();
                }
              }}
              className="w-full py-3 rounded-xl bg-red-50 text-red-600 text-sm font-bold uppercase tracking-widest hover:bg-red-100 transition"
            >
              Reset Entire Program
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};


export default CalendarView;
