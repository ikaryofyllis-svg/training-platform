import React, { useState } from 'react';
import { TrainingContext, TrainingGoal, UserPreferences, VisualThemeId } from '../types';
import { getVisualTheme, TRAINING_CONTEXTS, TRAINING_GOALS, VISUAL_THEMES } from '../theme/themes';

interface Props { onComplete: (preferences: UserPreferences) => void; }

const OnboardingView: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [themeId, setThemeId] = useState<VisualThemeId>('forge');
  const [context, setContext] = useState<TrainingContext>('general');
  const [goals, setGoals] = useState<TrainingGoal[]>(['strength']);
  const theme = getVisualTheme(themeId);

  const toggleGoal = (goal: TrainingGoal) => {
    setGoals(current => current.includes(goal) ? current.filter(item => item !== goal) : [...current, goal]);
  };

  return (
    <div data-theme={themeId} className="theme-root min-h-screen font-manrope">
      <div className="relative mx-auto min-h-screen max-w-md overflow-hidden bg-background-light dark:bg-background-dark">
        <header className="relative h-72 overflow-hidden text-white">
          <img src={theme.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">Welcome to your world</p>
            <h1 className="mt-2 text-4xl font-black">Training that feels like you.</h1>
          </div>
        </header>

        <main className="px-5 pb-32 pt-6">
          <div className="mb-6 flex gap-2">{[0, 1, 2].map(index => <div key={index} className={`h-1.5 flex-1 rounded-full ${index <= step ? 'bg-primary' : 'bg-gray-200'}`} />)}</div>

          {step === 0 && (
            <section>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Step 1 · Visual world</p>
              <h2 className="mt-2 text-3xl font-black">How should the app feel?</h2>
              <p className="mt-2 text-sm text-gray-500">This changes colors, artwork and coaching energy—not workout safety.</p>
              <div className="mt-6 space-y-3">
                {VISUAL_THEMES.map(item => (
                  <button key={item.id} type="button" onClick={() => setThemeId(item.id)} className={`relative flex w-full overflow-hidden rounded-3xl border-2 p-4 text-left transition ${themeId === item.id ? 'border-primary shadow-lg' : 'border-transparent bg-white'}`}>
                    <img src={item.heroImage} alt="" className="h-24 w-20 shrink-0 rounded-2xl object-cover" />
                    <div className="ml-4"><p className="text-[9px] font-black uppercase tracking-widest text-primary">{item.eyebrow}</p><h3 className="mt-1 text-xl font-black">{item.name}</h3><p className="mt-1 text-xs leading-relaxed text-gray-500">{item.description}</p></div>
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 1 && (
            <section>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Step 2 · Training context</p>
              <h2 className="mt-2 text-3xl font-black">What fits your life now?</h2>
              <p className="mt-2 text-sm text-gray-500">This determines which training plans are appropriate.</p>
              <div className="mt-6 space-y-3">{TRAINING_CONTEXTS.map(item => (
                <button key={item.id} type="button" onClick={() => setContext(item.id)} className={`flex w-full items-center gap-4 rounded-3xl border-2 p-5 text-left ${context === item.id ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white'}`}>
                  <span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">{item.icon}</span>
                  <div><h3 className="font-black">{item.name}</h3><p className="mt-1 text-xs leading-relaxed text-gray-500">{item.description}</p></div>
                </button>
              ))}</div>
              {context !== 'general' && <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-800">Specialized plans will only appear after their safety content has been reviewed. This selection does not replace medical guidance.</p>}
            </section>
          )}

          {step === 2 && (
            <section>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Step 3 · Goals</p>
              <h2 className="mt-2 text-3xl font-black">What are we building?</h2>
              <p className="mt-2 text-sm text-gray-500">Choose one or more. You can change these later.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">{TRAINING_GOALS.map(item => (
                <button key={item.id} type="button" onClick={() => toggleGoal(item.id)} className={`rounded-3xl border-2 p-5 text-left ${goals.includes(item.id) ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white'}`}>
                  <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span><h3 className="mt-5 font-black">{item.name}</h3>
                </button>
              ))}</div>
              <div className="theme-glow mt-6 overflow-hidden rounded-3xl bg-background-dark p-5 text-white">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Your starting identity</p>
                <p className="mt-2 text-2xl font-black">{theme.name} · {TRAINING_CONTEXTS.find(item => item.id === context)?.name}</p>
                <p className="mt-2 text-sm text-white/50">{theme.coachVoice}</p>
              </div>
            </section>
          )}
        </main>

        <footer className="fixed bottom-0 left-1/2 z-20 flex w-full max-w-md -translate-x-1/2 gap-3 bg-gradient-to-t from-background-light via-background-light px-5 pb-6 pt-8">
          {step > 0 && <button type="button" onClick={() => setStep(value => value - 1)} className="rounded-2xl border border-gray-200 px-5 font-black">Back</button>}
          <button type="button" disabled={step === 2 && goals.length === 0} onClick={() => step < 2 ? setStep(value => value + 1) : onComplete({ onboardingCompleted: true, visualTheme: themeId, trainingContext: context, goals })} className="flex-1 rounded-2xl bg-primary py-4 font-black text-white shadow-lg shadow-primary/20 disabled:opacity-40">
            {step === 2 ? 'Enter my world' : 'Continue'}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default OnboardingView;
