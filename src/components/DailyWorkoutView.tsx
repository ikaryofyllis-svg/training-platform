import React from 'react';
import { summarizeWorkout } from '../domain/workouts';
import { Session, UnitSystem } from '../types';
import WorkoutBlockRenderer from './workout/WorkoutBlockRenderer';

interface Props {
  session: Session;
  units: UnitSystem;
  currentDay: number;
  onBack: () => void;
  onComplete?: () => void;
  onSaveLog: (exerciseId: string, weight: number, reps: number, sets: number) => void;
}

const modeLabels = { single: 'Strength', pyramid: 'Pyramid', superset: 'Superset', giant_set: 'Giant set', cardio: 'Cardio' };

const DailyWorkoutView: React.FC<Props> = ({ session, units, currentDay, onBack, onComplete, onSaveLog }) => {
  const isRestDay = session.blocks.length === 0;
  const isCompleted = session.completed || session.day < currentDay;
  const summary = summarizeWorkout(session.blocks);

  return (
    <div className="min-h-screen animate-in slide-in-from-bottom bg-background-light pb-32 duration-500 dark:bg-background-dark">
      <header className="relative overflow-hidden bg-black px-6 pb-9 pt-6 text-white">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <button type="button" onClick={onBack} aria-label="Back to calendar" className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="relative z-10 mt-10">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Day {session.day}</p>
          <h1 className="mt-2 text-4xl font-black leading-none">{session.title}</h1>
          {!isRestDay && (
            <div className="mt-6 flex flex-wrap gap-2">
              {summary.modes.map(mode => <span key={mode} className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-wider">{modeLabels[mode]}</span>)}
              {summary.exerciseCount > 0 && <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-wider">{summary.exerciseCount} exercises · {summary.workingSets} sets</span>}
            </div>
          )}
        </div>
      </header>

      <main className="space-y-6 px-5 pt-6">
        {isRestDay ? (
          <section className="rounded-[32px] bg-white p-8 text-center shadow-sm dark:bg-card-dark">
            <span className="material-symbols-outlined text-5xl text-primary">self_improvement</span>
            <h2 className="mt-4 text-2xl font-black">Rest & recovery</h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-500">Recover today. Prioritize sleep, hydration, food, and light mobility.</p>
          </section>
        ) : session.blocks.map((block, blockIndex) => (
          <WorkoutBlockRenderer key={`${block.type}-${blockIndex}`} block={block} blockIndex={blockIndex} units={units} onSave={onSaveLog} />
        ))}
      </main>

      {onComplete && (
        <div className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 bg-gradient-to-t from-background-light via-background-light px-5 pb-6 pt-8 dark:from-background-dark dark:via-background-dark">
          <button type="button" onClick={onComplete} disabled={isCompleted} className={`w-full rounded-2xl py-4 font-black uppercase tracking-wider transition ${isCompleted ? 'cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-white/10' : 'bg-primary text-white shadow-xl shadow-primary/25 hover:bg-red-700'}`}>
            {isCompleted ? 'Day completed' : isRestDay ? 'Complete recovery day' : 'Complete workout'}
          </button>
        </div>
      )}
    </div>
  );
};

export default DailyWorkoutView;
