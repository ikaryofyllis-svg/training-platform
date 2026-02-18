
import React, { useState } from 'react';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, perform validation/auth here
    onLogin();
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-background-dark flex flex-col justify-center px-8 relative overflow-hidden font-manrope">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
      
      <div className="relative z-10">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 bg-primary"></div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Elite Performance</span>
          </div>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white leading-none">
            BEA<span className="text-primary">X</span>ST
          </h1>
          <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mt-2">Training Protocol v3.1</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-1.5 block ml-1">Email Terminal</label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-bold tracking-tight"
                placeholder="operator@beaxst.io"
              />
            </div>
            <div className="relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-1.5 block ml-1">Access Key</label>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-bold tracking-tight"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Remember Protocol</span>
            </label>
            <button type="button" className="text-[10px] font-black text-primary uppercase tracking-widest hover:text-white transition-colors">Forgot Key?</button>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-red-600 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/30 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
          >
            Initiate Protocol
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </form>

        <footer className="mt-12 text-center">
          <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.1em]">
            New Recruit? <button onClick={onLogin} className="text-primary hover:underline">Apply for membership</button>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LoginView;
