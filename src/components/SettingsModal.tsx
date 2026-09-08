
import React from 'react';
import { TrainingContext, TrainingGoal, UnitSystem, VisualThemeId } from '../types';
import { TRAINING_CONTEXTS, TRAINING_GOALS, VISUAL_THEMES } from '../theme/themes';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  units: UnitSystem;
  onUnitChange: (units: UnitSystem) => void;
  onLogout?: () => void;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  visualTheme: VisualThemeId;
  trainingContext: TrainingContext;
  goals: TrainingGoal[];
  onVisualThemeChange: (theme: VisualThemeId) => void;
  onTrainingContextChange: (context: TrainingContext) => void;
  onGoalsChange: (goals: TrainingGoal[]) => void;
  mode?: 'modal' | 'page';
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, units, onUnitChange, onLogout, userName = 'Athlete', userEmail = '', userAvatar, visualTheme, trainingContext, goals, onVisualThemeChange, onTrainingContextChange, onGoalsChange, mode = 'modal' }) => {
  if (!isOpen) return null;
  const isPage = mode === 'page';

  return (
    <div className={isPage ? 'animate-in fade-in px-5 pb-32 pt-7 duration-500' : 'fixed inset-0 z-[100] flex items-end justify-center'}>
      {!isPage && <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>}
      <div className={isPage
        ? 'relative w-full rounded-[36px] border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-card-dark/80'
        : 'relative max-h-[92vh] w-full max-w-md overflow-y-auto bg-white dark:bg-card-dark rounded-t-[48px] p-8 animate-in slide-in-from-bottom duration-500 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] border-t border-white/5'}>
        {isPage ? (
          <div className="mb-10 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">settings</span>
            <h2 className="text-2xl font-black uppercase tracking-tight italic">Settings</h2>
          </div>
        ) : <div className="w-16 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full mx-auto mb-10"></div>}
        
        <div className="flex items-center gap-6 mb-12">
          <div className="w-20 h-20 rounded-[28px] bg-primary flex items-center justify-center overflow-hidden text-white text-2xl font-black border-4 border-primary/20 italic shadow-2xl shadow-primary/30">
            {userAvatar ? <img src={userAvatar} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" /> : userName.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight italic leading-none mb-1">{userName}</h3>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">Cloud sync active</p>
            <p className="text-xs font-bold opacity-30 lowercase tracking-tight">{userEmail}</p>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">Visual world</h4>
            <div className="grid grid-cols-3 gap-2">
              {VISUAL_THEMES.map(theme => (
                <button key={theme.id} type="button" onClick={() => onVisualThemeChange(theme.id)} className={`overflow-hidden rounded-2xl border-2 text-left ${visualTheme === theme.id ? 'border-primary' : 'border-transparent'}`}>
                  <img src={theme.heroImage} alt="" className="h-20 w-full object-cover" />
                  <span className="block px-2 py-2 text-center text-[9px] font-black uppercase">{theme.name}</span>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">Training profile</h4>
            <div className="space-y-2">{TRAINING_CONTEXTS.map(item => (
              <button key={item.id} type="button" onClick={() => onTrainingContextChange(item.id)} className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left ${trainingContext === item.id ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>
                <span className="material-symbols-outlined text-primary">{item.icon}</span><span className="text-xs font-black">{item.name}</span>
              </button>
            ))}</div>
          </section>

          <section>
            <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">Goals</h4>
            <div className="flex flex-wrap gap-2">{TRAINING_GOALS.map(item => {
              const selected = goals.includes(item.id);
              return <button key={item.id} type="button" onClick={() => onGoalsChange(selected ? goals.filter(goal => goal !== item.id) : [...goals, item.id])} className={`rounded-full px-4 py-2 text-[10px] font-black ${selected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>{item.name}</button>;
            })}</div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">Biometric Units</h4>
              <span className="material-symbols-outlined text-xs text-primary/40">settings_accessibility</span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-100 dark:bg-black/30 rounded-[24px] border border-gray-200 dark:border-white/5">
              <button 
                onClick={() => onUnitChange(UnitSystem.METRIC)}
                className={`py-4 rounded-[20px] text-[10px] font-black uppercase tracking-widest transition-all ${
                  units === UnitSystem.METRIC 
                    ? 'bg-white dark:bg-primary shadow-2xl text-primary dark:text-white scale-[1.02]' 
                    : 'text-gray-400'
                }`}
              >
                METRIC (KG)
              </button>
              <button 
                onClick={() => onUnitChange(UnitSystem.IMPERIAL)}
                className={`py-4 rounded-[20px] text-[10px] font-black uppercase tracking-widest transition-all ${
                  units === UnitSystem.IMPERIAL 
                    ? 'bg-white dark:bg-primary shadow-2xl text-primary dark:text-white scale-[1.02]' 
                    : 'text-gray-400'
                }`}
              >
                IMPERIAL (LB)
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">System Overrides</h4>
            
            <button className="w-full flex items-center justify-between p-6 rounded-[32px] border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 font-black text-[11px] uppercase tracking-widest group">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">notifications_active</span>
                Neural Notifications
              </div>
              <div className="w-12 h-6 bg-primary rounded-full p-1 relative shadow-inner">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg"></div>
              </div>
            </button>
            
            <button 
              onClick={onLogout}
              className="w-full flex items-center justify-between p-6 rounded-[32px] border border-red-500/10 bg-red-500/5 text-red-500 hover:bg-red-500/10 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">logout</span>
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-black uppercase tracking-widest italic">Change Account</p>
                  <p className="text-[8px] font-bold opacity-50 uppercase tracking-tighter mt-0.5">Disconnect Neural Link</p>
                </div>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
          </section>
        </div>

        {!isPage && <button
          onClick={onClose}
          className="w-full mt-12 bg-gray-900 dark:bg-white text-white dark:text-black font-black py-6 rounded-[28px] uppercase tracking-[0.4em] text-xs shadow-2xl active:scale-95 transition-all"
        >
          Return to Deck
        </button>}
      </div>
    </div>
  );
};

export default SettingsModal;
