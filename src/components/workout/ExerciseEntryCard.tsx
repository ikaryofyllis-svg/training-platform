import React, { useState } from 'react';
import { EXERCISE_LIBRARY } from '../../data/exercises/exerciseLibrary';
import { getNumericRepTarget, getSetTargets } from '../../domain/workouts';
import { ExerciseSet, UnitSystem } from '../../types';

interface Props {
  prescription: ExerciseSet;
  units: UnitSystem;
  accent?: 'neutral' | 'red' | 'amber';
  index?: number;
  showSetSteps?: boolean;
  onSave: (exerciseId: string, weight: number, reps: number, sets: number) => void;
}

const accents = {
  neutral: 'bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-300',
  red: 'bg-primary/10 text-primary',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300'
};

const ExerciseEntryCard: React.FC<Props> = ({
  prescription, units, accent = 'neutral', index, showSetSteps = false, onSave
}) => {
  const [weight, setWeight] = useState('');
  const [saved, setSaved] = useState(false);
  const exercise = EXERCISE_LIBRARY.find(item => item.id === prescription.exerciseId);

  if (!exercise) {
    return <div className="rounded-2xl border border-dashed border-red-300 p-4 text-sm text-red-600">Missing exercise: {prescription.exerciseId}</div>;
  }

  const save = () => {
    const parsedWeight = Number.parseFloat(weight);
    if (!Number.isFinite(parsedWeight) || parsedWeight < 0) return;
    onSave(exercise.id, parsedWeight, getNumericRepTarget(prescription), prescription.sets);
    setSaved(true);
  };

  return (
    <article className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 dark:bg-card-dark dark:ring-white/10">
      <div className="flex items-start gap-3">
        {index !== undefined && <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black ${accents[accent]}`}>{index + 1}</span>}
        <div className="min-w-0 flex-1">
          <h3 className="font-black leading-tight">{exercise.name}</h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-400">
            {prescription.sets} sets · {prescription.repScheme ? 'pyramid' : prescription.reps || 'open target'}
          </p>
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-black uppercase text-gray-500 dark:bg-white/5">
          {exercise.muscleGroup.replace('_', ' ')}
        </span>
      </div>

      {showSetSteps && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {getSetTargets(prescription).map((target, targetIndex) => (
            <div key={`${target}-${targetIndex}`} className="rounded-2xl bg-amber-50 p-3 text-center dark:bg-amber-400/5">
              <p className="text-[9px] font-black uppercase tracking-widest text-amber-600">Set {targetIndex + 1}</p>
              <p className="mt-1 font-black">{target}</p>
            </div>
          ))}
        </div>
      )}

      {exercise.tips.length > 0 && <p className="mt-4 text-xs leading-relaxed text-gray-500">{exercise.tips[0]}</p>}

      <div className="mt-4 flex gap-2">
        <input
          aria-label={`Top working weight in ${units}`}
          type="number"
          min="0"
          inputMode="decimal"
          value={weight}
          onChange={event => { setWeight(event.target.value); setSaved(false); }}
          placeholder={`Weight (${units})`}
          className="min-w-0 flex-1 rounded-2xl bg-gray-100 px-4 py-3 font-bold outline-none ring-primary transition focus:ring-2 dark:bg-white/5"
        />
        <button
          type="button"
          onClick={save}
          disabled={weight === ''}
          className={`rounded-2xl px-5 text-xs font-black uppercase tracking-wider transition ${saved ? 'bg-emerald-500 text-white' : 'bg-black text-white disabled:cursor-not-allowed disabled:opacity-30 dark:bg-white dark:text-black'}`}
        >
          {saved ? 'Saved' : 'Log'}
        </button>
      </div>
    </article>
  );
};

export default ExerciseEntryCard;
