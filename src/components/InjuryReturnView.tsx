import React, { useMemo, useState } from 'react';
import {
  INJURY_GROUPS,
  REHAB_EQUIPMENT,
  REHAB_EXERCISE_LIBRARY,
  REHAB_FUNCTIONS,
  REHAB_STAGES
} from '../data/exercises/rehabExerciseLibrary';
import { InjuryGroup, MuscleGroup, RehabEquipment, RehabExercise, RehabFunction, RehabStage } from '../types';

interface InjuryReturnViewProps {
  selectedExerciseIds: string[];
  customExercises: RehabExercise[];
  onToggleExercise: (id: string) => void;
  onAddCustomExercise: (exercise: Omit<RehabExercise, 'id' | 'custom'>) => void;
  onDeleteCustomExercise: (id: string) => void;
}

const muscleOptions: { id: MuscleGroup; label: string }[] = [
  { id: 'recovery', label: 'Recovery / general' }, { id: 'quads', label: 'Quadriceps' },
  { id: 'hamstrings', label: 'Hamstrings' }, { id: 'glutes', label: 'Glutes' },
  { id: 'calves', label: 'Calves' }, { id: 'core', label: 'Core' },
  { id: 'shoulders', label: 'Shoulders' }, { id: 'back', label: 'Back' },
  { id: 'biceps', label: 'Biceps' }, { id: 'triceps', label: 'Triceps' }
];

const pretty = (value: string) => value.replaceAll('_', ' ');

const InjuryReturnView: React.FC<InjuryReturnViewProps> = ({
  selectedExerciseIds,
  customExercises,
  onToggleExercise,
  onAddCustomExercise,
  onDeleteCustomExercise
}) => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<InjuryGroup | 'all'>('all');
  const [stage, setStage] = useState<RehabStage | 'all'>('all');
  const [equipment, setEquipment] = useState<RehabEquipment | 'all'>('all');
  const [functionFilter, setFunctionFilter] = useState<RehabFunction | 'all'>('all');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customInstructions, setCustomInstructions] = useState('');
  const [customKeywords, setCustomKeywords] = useState('');
  const [customMuscle, setCustomMuscle] = useState<MuscleGroup>('recovery');
  const [customRegions, setCustomRegions] = useState<InjuryGroup[]>(['other']);
  const [customStages, setCustomStages] = useState<RehabStage[]>(['protect']);
  const [customEquipment, setCustomEquipment] = useState<RehabEquipment[]>(['bodyweight']);
  const [customFunctions, setCustomFunctions] = useState<RehabFunction[]>(['range_of_motion']);

  const allExercises = useMemo(() => [...customExercises, ...REHAB_EXERCISE_LIBRARY], [customExercises]);
  const selectedExercises = allExercises.filter(item => selectedExerciseIds.includes(item.id));

  const filteredExercises = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allExercises.filter(item => {
      const searchable = [
        item.name, item.description, ...item.muscleGroups, ...item.injuryGroups,
        ...item.stages, ...item.equipment, ...item.functions, ...item.keywords,
        item.clinicianInstructions || ''
      ].join(' ').toLowerCase();
      return (!normalizedQuery || searchable.includes(normalizedQuery))
        && (region === 'all' || item.injuryGroups.includes(region))
        && (stage === 'all' || item.stages.includes(stage))
        && (equipment === 'all' || item.equipment.includes(equipment))
        && (functionFilter === 'all' || item.functions.includes(functionFilter));
    });
  }, [allExercises, query, region, stage, equipment, functionFilter]);

  const toggleValue = <T,>(value: T, values: T[], setter: React.Dispatch<React.SetStateAction<T[]>>) => {
    setter(values.includes(value) ? values.filter(item => item !== value) : [...values, value]);
  };

  const submitCustomExercise = (event: React.FormEvent) => {
    event.preventDefault();
    if (!customName.trim() || customRegions.length === 0 || customStages.length === 0) return;
    onAddCustomExercise({
      name: customName.trim(),
      description: 'Exercise added from an individual clinician plan home program.',
      muscleGroups: [customMuscle],
      injuryGroups: customRegions,
      stages: customStages,
      equipment: customEquipment.length ? customEquipment : ['bodyweight'],
      functions: customFunctions.length ? customFunctions : ['range_of_motion'],
      keywords: customKeywords.split(',').map(item => item.trim()).filter(Boolean),
      clinicianInstructions: customInstructions.trim(),
      clinicianClearance: true
    });
    setCustomName('');
    setCustomInstructions('');
    setCustomKeywords('');
    setShowCustomForm(false);
  };

  return (
    <div className="animate-in fade-in px-5 pb-36 pt-8 duration-500">
      <p className="text-[10px] font-black uppercase tracking-[0.34em] text-primary">Clinician-guided return</p>
      <h1 className="mt-2 text-4xl font-black tracking-tight">Recovery library</h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        Find movements by body area, recovery level, equipment or purpose. Your doctor or physiotherapist decides which movements, range, resistance and dosage are appropriate.
      </p>

      <section className="mt-7 rounded-[30px] border border-amber-300/40 bg-amber-50/90 p-5 shadow-lg backdrop-blur dark:border-amber-400/20 dark:bg-amber-950/50">
        <div className="flex gap-3">
          <span className="material-symbols-outlined text-amber-600">health_and_safety</span>
          <div>
            <h2 className="text-sm font-black">Your surgical protocol always wins</h2>
            <p className="mt-1 text-xs leading-relaxed text-amber-900/70 dark:text-amber-100/70">Do not use the level labels as permission to progress. Stop and contact your clinician for sharp or increasing pain, renewed swelling, heat/redness, loss of movement or loss of strength.</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-primary">Clearance levels</p>
            <h2 className="mt-1 text-xl font-black">Where are you now?</h2>
          </div>
          <button type="button" onClick={() => setStage('all')} className="text-[9px] font-black uppercase tracking-wider text-primary">Show all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar">
          {REHAB_STAGES.map(item => (
            <button key={item.id} type="button" onClick={() => setStage(item.id)} className={`min-w-[170px] rounded-[24px] border p-4 text-left transition ${stage === item.id ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20' : 'border-white/70 bg-white/80 dark:border-white/10 dark:bg-card-dark/80'}`}>
              <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${stage === item.id ? 'text-white/70' : 'text-primary'}`}>Level {item.level}</span>
              <strong className="mt-2 block text-sm">{item.label}</strong>
              <span className={`mt-1 block text-[10px] leading-relaxed ${stage === item.id ? 'text-white/75' : 'text-gray-500'}`}>{item.description}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-7 rounded-[30px] border border-white/70 bg-white/85 p-5 shadow-xl backdrop-blur dark:border-white/10 dark:bg-card-dark/85">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-primary">My recovery list</p>
            <h2 className="mt-1 text-lg font-black">{selectedExercises.length} selected</h2>
          </div>
          <button type="button" onClick={() => setShowCustomForm(value => !value)} className="rounded-2xl bg-primary px-4 py-3 text-[10px] font-black uppercase tracking-wider text-white">
            {showCustomForm ? 'Close' : '+ Add from physio'}
          </button>
        </div>
        {selectedExercises.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">{selectedExercises.map(item => (
            <button key={item.id} type="button" onClick={() => onToggleExercise(item.id)} className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-2 text-[10px] font-bold text-primary">
              {item.name}<span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          ))}</div>
        ) : <p className="mt-4 text-xs text-gray-500">Nothing selected yet. Add only exercises approved for you.</p>}

        {showCustomForm && (
          <form onSubmit={submitCustomExercise} className="mt-6 space-y-5 border-t border-gray-200 pt-5 dark:border-white/10">
            <div>
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Exercise name *</label>
              <input value={customName} onChange={event => setCustomName(event.target.value)} placeholder="Exactly as your clinician wrote it" className="mt-2 w-full rounded-2xl border border-gray-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10" />
            </div>
            <div>
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Clinician instructions</label>
              <textarea value={customInstructions} onChange={event => setCustomInstructions(event.target.value)} placeholder="Sets, reps, range, resistance, precautions..." rows={3} className="mt-2 w-full resize-none rounded-2xl border border-gray-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10" />
            </div>
            <div>
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Primary muscle area</label>
              <select value={customMuscle} onChange={event => setCustomMuscle(event.target.value as MuscleGroup)} className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm dark:border-white/10 dark:bg-card-dark">
                {muscleOptions.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </div>
            <TagSelector label="Injury areas *" items={INJURY_GROUPS} values={customRegions} onToggle={value => toggleValue(value, customRegions, setCustomRegions)} />
            <TagSelector label="Clearance levels *" items={REHAB_STAGES} values={customStages} onToggle={value => toggleValue(value, customStages, setCustomStages)} />
            <TagSelector label="Equipment" items={REHAB_EQUIPMENT} values={customEquipment} onToggle={value => toggleValue(value, customEquipment, setCustomEquipment)} />
            <TagSelector label="Purpose" items={REHAB_FUNCTIONS} values={customFunctions} onToggle={value => toggleValue(value, customFunctions, setCustomFunctions)} />
            <div>
              <label className="text-[9px] font-black uppercase tracking-widest text-gray-500">Other search words</label>
              <input value={customKeywords} onChange={event => setCustomKeywords(event.target.value)} placeholder="brace, morning, football (comma separated)" className="mt-2 w-full rounded-2xl border border-gray-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10" />
            </div>
            <button type="submit" disabled={!customName.trim() || customRegions.length === 0 || customStages.length === 0} className="w-full rounded-2xl bg-primary py-4 text-xs font-black uppercase tracking-widest text-white disabled:opacity-40">Save to my recovery list</button>
          </form>
        )}
      </section>

      <section className="mt-8">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search name, muscle, injury, band, stability..." className="w-full rounded-[24px] border border-white/70 bg-white/90 py-4 pl-12 pr-4 text-sm shadow-lg outline-none focus:border-primary dark:border-white/10 dark:bg-card-dark/90" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <FilterSelect label="Area" value={region} onChange={value => setRegion(value as InjuryGroup | 'all')} options={INJURY_GROUPS} />
          <FilterSelect label="Equipment" value={equipment} onChange={value => setEquipment(value as RehabEquipment | 'all')} options={REHAB_EQUIPMENT} />
          <FilterSelect label="Purpose" value={functionFilter} onChange={value => setFunctionFilter(value as RehabFunction | 'all')} options={REHAB_FUNCTIONS} />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <h2 className="text-xl font-black">Exercise library</h2>
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">{filteredExercises.length} results</span>
        </div>
        <div className="mt-4 space-y-3">
          {filteredExercises.map(item => {
            const selected = selectedExerciseIds.includes(item.id);
            const stageLabels = item.stages.map(stageId => REHAB_STAGES.find(stageItem => stageItem.id === stageId)?.label).filter(Boolean);
            return (
              <article key={item.id} className="rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-md backdrop-blur dark:border-white/10 dark:bg-card-dark/90">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><span className="material-symbols-outlined">exercise</span></div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-black leading-tight">{item.name}</h3>
                      {item.custom && <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[8px] font-black uppercase text-blue-600">My clinician</span>}
                      {item.clinicianClearance && <span className="rounded-full bg-amber-500/10 px-2 py-1 text-[8px] font-black uppercase text-amber-700 dark:text-amber-300">Clearance required</span>}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.description}</p>
                    {item.clinicianInstructions && <p className="mt-2 rounded-xl bg-blue-500/5 p-3 text-xs leading-relaxed text-blue-800 dark:text-blue-200">{item.clinicianInstructions}</p>}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.injuryGroups.map(value => <span key={value} className="rounded-full bg-primary/10 px-2 py-1 text-[8px] font-black uppercase text-primary">{pretty(value)}</span>)}
                      {item.equipment.map(value => <span key={value} className="rounded-full bg-gray-100 px-2 py-1 text-[8px] font-bold uppercase text-gray-500 dark:bg-white/5">{pretty(value)}</span>)}
                    </div>
                    <p className="mt-3 text-[9px] font-bold text-gray-400">{stageLabels.join(' · ')} · {item.muscleGroups.map(pretty).join(', ')}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button type="button" onClick={() => onToggleExercise(item.id)} className={`flex-1 rounded-2xl py-3 text-[10px] font-black uppercase tracking-wider ${selected ? 'bg-primary/10 text-primary' : 'bg-primary text-white'}`}>{selected ? 'Remove from my list' : 'Add to my list'}</button>
                  {item.custom && <button type="button" onClick={() => onDeleteCustomExercise(item.id)} aria-label={`Delete ${item.name}`} className="rounded-2xl border border-red-500/20 px-4 text-red-500"><span className="material-symbols-outlined text-lg">delete</span></button>}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="mt-8 rounded-[24px] bg-black/5 p-4 text-[10px] leading-relaxed text-gray-500 dark:bg-white/5">
        <p>Educational organization only—not diagnosis or treatment. The library intentionally does not prescribe sets, repetitions, resistance, permitted range or progression dates. Copy those from your own clinician.</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-black text-primary">
          <a href="https://orthoinfo.aaos.org/globalassets/pdfs/2023-rehab_knee_10-16-23.pdf" target="_blank" rel="noreferrer">AAOS guidance</a>
          <a href="https://www.massgeneral.org/assets/MGH/pdf/orthopaedics/sports-medicine/physical-therapy/rehabilitation-protocol-for-ACL.pdf" target="_blank" rel="noreferrer">Return-to-sport criteria</a>
          <a href="https://www.choosept.com/why-physical-therapy/prepare" target="_blank" rel="noreferrer">Following your PT plan</a>
        </div>
      </footer>
    </div>
  );
};

interface TagSelectorProps<T extends string> {
  label: string;
  items: { id: T; label: string }[];
  values: T[];
  onToggle: (value: T) => void;
}

const TagSelector = <T extends string,>({ label, items, values, onToggle }: TagSelectorProps<T>) => (
  <div>
    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">{label}</p>
    <div className="mt-2 flex flex-wrap gap-2">{items.map(item => (
      <button key={item.id} type="button" onClick={() => onToggle(item.id)} className={`rounded-full px-3 py-2 text-[9px] font-bold ${values.includes(item.id) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 dark:bg-white/5'}`}>{item.label}</button>
    ))}</div>
  </div>
);

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string; label: string }[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, value, onChange, options }) => (
  <select aria-label={label} value={value} onChange={event => onChange(event.target.value)} className="min-w-0 rounded-2xl border border-white/70 bg-white/90 px-2 py-3 text-[9px] font-black uppercase text-gray-600 shadow-sm outline-none dark:border-white/10 dark:bg-card-dark dark:text-gray-300">
    <option value="all">All {label}</option>
    {options.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
  </select>
);

export default InjuryReturnView;
