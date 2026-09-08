import React from 'react';
import { getBlockMode } from '../../domain/workouts';
import { CardioLog, CardioLogInput, TrainingBlock, UnitSystem } from '../../types';
import CardioEntryCard from './CardioEntryCard';
import ExerciseEntryCard from './ExerciseEntryCard';

interface Props {
  block: TrainingBlock;
  blockIndex: number;
  units: UnitSystem;
  onSave: (exerciseId: string, weight: number, reps: number, sets: number) => void;
  onSaveCardio: (log: CardioLogInput) => void;
  cardioLog?: CardioLog;
}

const Heading: React.FC<{ eyebrow: string; title: string; detail?: string }> = ({ eyebrow, title, detail }) => (
  <div className="mb-4 flex items-end justify-between gap-4">
    <div><p className="text-[10px] font-black uppercase tracking-[0.25em] opacity-50">{eyebrow}</p><h2 className="mt-1 text-xl font-black">{title}</h2></div>
    {detail && <p className="text-right text-xs font-bold opacity-50">{detail}</p>}
  </div>
);

const WorkoutBlockRenderer: React.FC<Props> = ({ block, blockIndex, units, onSave, onSaveCardio, cardioLog }) => {
  const mode = getBlockMode(block);

  if (mode === 'cardio') {
    const isInterval = block.cardio?.mode === 'interval';
    return (
      <section className="overflow-hidden rounded-[32px] bg-sky-950 p-6 text-white shadow-xl shadow-sky-950/15">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-300">Cardio session</p>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div><span className="material-symbols-outlined text-4xl text-sky-300">{isInterval ? 'timer' : 'directions_run'}</span><h2 className="mt-3 text-2xl font-black">{isInterval ? 'Intervals' : 'Steady effort'}</h2></div>
          {block.cardio?.durationMinutes && <p className="text-4xl font-black">{block.cardio.durationMinutes}<span className="ml-1 text-xs text-sky-300">MIN</span></p>}
        </div>
        <p className="mt-5 rounded-2xl bg-white/10 p-4 text-sm font-bold text-sky-100">{block.cardio?.intervals || block.cardio?.intensity || 'Keep a sustainable, controlled pace.'}</p>
        <CardioEntryCard cardio={block.cardio} existingLog={cardioLog} onSave={onSaveCardio} />
      </section>
    );
  }

  if (mode === 'superset' || mode === 'giant_set') {
    return (
      <section className="rounded-[32px] border-2 border-primary/25 bg-primary/5 p-5">
        <Heading eyebrow={`Block ${block.label || blockIndex + 1}`} title={mode === 'giant_set' ? 'Giant set' : 'Superset'} detail={`${block.rounds || block.exercises?.[0]?.sets || 0} rounds · no rest`} />
        <div className="space-y-3">{block.exercises?.map((exercise, index) => <ExerciseEntryCard key={`${exercise.exerciseId}-${index}`} prescription={exercise} units={units} accent="red" index={index} onSave={onSave} />)}</div>
      </section>
    );
  }

  if (mode === 'pyramid') {
    return (
      <section className="rounded-[32px] bg-gradient-to-br from-amber-100 to-orange-50 p-5 dark:from-amber-950/50 dark:to-card-dark">
        <Heading eyebrow={`Block ${block.label || blockIndex + 1}`} title="Pyramid sets" detail="Adjust load each step" />
        <div className="space-y-3">{block.exercises?.map((exercise, index) => <ExerciseEntryCard key={`${exercise.exerciseId}-${index}`} prescription={exercise} units={units} accent="amber" index={index} showSetSteps onSave={onSave} />)}</div>
      </section>
    );
  }

  return (
    <section>
      {block.exercises && block.exercises.length > 1 && <Heading eyebrow={`Block ${block.label || blockIndex + 1}`} title="Strength work" />}
      <div className="space-y-3">{block.exercises?.map((exercise, index) => <ExerciseEntryCard key={`${exercise.exerciseId}-${index}`} prescription={exercise} units={units} index={block.exercises && block.exercises.length > 1 ? index : undefined} onSave={onSave} />)}</div>
    </section>
  );
};

export default WorkoutBlockRenderer;
