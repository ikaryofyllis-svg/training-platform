
import React from 'react';
import { Program, UnitSystem } from '../types';

interface ProgramIntroViewProps {
  program: Program;
  units: UnitSystem;
  onBack: () => void;
  onActivate: (id: string) => void;
}

const ProgramIntroView: React.FC<ProgramIntroViewProps> = ({ program, units, onBack, onActivate }) => {

  // ✅ Safety guard
  if (!program) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark animate-in slide-in-from-right duration-500 font-manrope pb-20">
      {/* Immersive Header */}
      <div className="relative h-96 flex flex-col justify-end px-8 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={program.image} 
            className="w-full h-full object-cover scale-110" 
            alt={program.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 w-14 h-14 bg-white/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-white z-20 border border-white/20 shadow-2xl active:scale-90 transition-all"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>

        <div className="relative z-10 max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-primary shadow-[0_0_10px_#d02525]"></span>
            <span className="text-[12px] font-black text-primary uppercase tracking-[0.4em] drop-shadow-md">STRATEGIC DIRECTIVE</span>
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tighter leading-none text-white italic drop-shadow-2xl mb-4">{program.name}</h1>
          <div className="flex gap-3">
             <span className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest">{program.category}</span>
             <span className="bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1.5 rounded-full text-[10px] font-black text-primary uppercase tracking-widest border-primary">{program.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="px-8 -mt-8 relative z-20">
        <div className="bg-white dark:bg-card-dark rounded-[48px] p-10 shadow-2xl border border-gray-100 dark:border-white/5">
          
          <div className="grid grid-cols-2 gap-8 mb-12 border-b border-gray-100 dark:border-white/5 pb-10">
            <div>
              <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-2">Protocol Length</p>
              <div className="flex items-baseline gap-2">
                 <span className="text-4xl font-black italic tracking-tighter text-primary">{program.durationWeeks}</span>
                 <span className="text-xs font-black uppercase tracking-widest opacity-40">WEEKS</span>
              </div>
            </div>
            <div>
               <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-2">Training Level</p>
               <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black italic tracking-tighter text-primary uppercase">{program.difficulty === 'MASS' ? 'HYPER' : program.difficulty}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest opacity-40">RANK</span>
               </div>
            </div>
          </div>

          <section className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="material-symbols-outlined text-primary text-xl active-icon">terminal</span>
                 <h3 className="text-sm font-black uppercase tracking-widest italic">The Mission</h3>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-70 uppercase tracking-tight">
                {program.description} This {program.difficulty.toLowerCase()} level protocol is engineered to bypass standard plateaus using high-frequency CNS stimulation and volume accumulation. Expect high metabolic stress and rapid adaptation cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
               
               {program.features?.map((feature, index) => (
  <div
    key={index}
    className="p-6 bg-gray-50 dark:bg-black/30 rounded-3xl border border-gray-100 dark:border-white/5 flex items-center justify-between group hover:border-primary/20 transition-colors"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
        <span className="material-symbols-outlined">
          {feature.icon}
        </span>
      </div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest">
          {feature.title}
        </h4>
        <p className="text-[9px] font-bold opacity-40 uppercase tracking-tighter">
          {feature.subtitle}
        </p>
      </div>
    </div>

    <span className="material-symbols-outlined opacity-20 group-hover:opacity-100 transition-opacity">
      verified
    </span>
  </div>
))}

            </div>
          </section>

          <div className="mt-12 space-y-4">
             <button 
               onClick={() => onActivate(program.id)}
               className="w-full bg-primary hover:bg-red-600 text-white font-black py-7 rounded-[32px] uppercase tracking-[0.4em] text-xs shadow-[0_25px_50px_rgba(208,37,37,0.4)] flex items-center justify-center gap-3 active:scale-[0.97] transition-all italic group"
             >
               Activate
               <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">bolt</span>
             </button>
             <button 
               onClick={onBack}
               className="w-full bg-transparent text-gray-400 font-black py-5 rounded-[32px] uppercase tracking-[0.2em] text-[9px] hover:text-primary transition-colors"
             >
               Return to Plans
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramIntroView;
