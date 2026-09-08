import React, { useState } from 'react';

interface Props {
  onGoogleLogin: () => Promise<void>;
  error?: string;
}

const LoginView: React.FC<Props> = ({ onGoogleLogin, error }) => {
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      await onGoogleLogin();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-md flex-col justify-center overflow-hidden bg-background-dark px-8 font-manrope">
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />

      <div className="relative z-10">
        <header className="mb-12">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-1 w-8 bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Elite Performance</span>
          </div>
          <h1 className="text-6xl font-black uppercase italic leading-none tracking-tighter text-white">BEA<span className="text-primary">X</span>ST</h1>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/40">Your training, backed up securely</p>
        </header>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-black text-white">Welcome</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/50">Sign in to sync workouts between devices. Your phone still keeps a local offline copy.</p>

          {error && <p role="alert" className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-300">{error}</p>}

          <button
            type="button"
            onClick={login}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-sm font-black text-gray-900 transition active:scale-[0.98] disabled:opacity-60"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-base font-black text-blue-600">G</span>
            {loading ? 'Connecting…' : 'Continue with Google'}
          </button>
        </div>

        <p className="mt-8 text-center text-[10px] leading-relaxed text-white/30">Only your account can access your training history.</p>
      </div>
    </div>
  );
};

export default LoginView;
