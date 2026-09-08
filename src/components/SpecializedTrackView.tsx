import React from 'react';
import { TrainingContext } from '../types';
import { TRAINING_CONTEXTS } from '../theme/themes';

const SpecializedTrackView: React.FC<{ context: TrainingContext; onOpenSettings: () => void }> = ({ context, onOpenSettings }) => {
  const profile = TRAINING_CONTEXTS.find(item => item.id === context);
  return (
    <div className="px-6 pb-32 pt-12">
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Specialized track</p>
      <h1 className="mt-2 text-4xl font-black">{profile?.name}</h1>
      <div className="mt-8 rounded-[36px] bg-white p-8 shadow-sm dark:bg-card-dark">
        <span className="material-symbols-outlined text-5xl text-primary">health_and_safety</span>
        <h2 className="mt-5 text-2xl font-black">Programs in review</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">We will add this program library after its progression, exercise modifications and safety boundaries have been reviewed. General strength plans are intentionally not shown as recommendations here.</p>
        <button type="button" onClick={onOpenSettings} className="mt-6 w-full rounded-2xl bg-primary py-4 text-sm font-black text-white">Change training profile</button>
      </div>
    </div>
  );
};

export default SpecializedTrackView;
