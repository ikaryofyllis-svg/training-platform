import React, { useState, useEffect } from 'react';
import { CardioLog, CardioLogInput, ViewType, UnitSystem, Session, WorkoutPlan } from './types';
import { WORKOUT_PLANS } from "./data/programs";
import HomeView from './components/HomeView';
import CalendarView from './components/CalendarView';
import BottomNav from './components/BottomNav';
import AICoachView from './components/AICoachView';
import PlansView from './components/PlansView';
import SettingsModal from './components/SettingsModal';
import PerformanceView from './components/PerformanceView';
import DailyWorkoutView from './components/DailyWorkoutView';
import LoginView from './components/LoginView';
import ProgramIntroView from './components/ProgramIntroView';
import { normalizeWorkoutDay } from './domain/workouts';
import { loadCloudState, saveCloudState } from './services/cloudState';
import { signInWithGoogle, supabase } from './services/supabase';
const STORAGE_KEY = "fitnessAppData_v2";
interface AppData {
  activePlanId: string;
  programs: {
    [programId: string]: {
      currentDay: number;
      sessions: Session[];
    };
  };
  exerciseLogs: {
    [exerciseId: string]: {
      date: string;
      bestWeight: number;
      programId: string;
      reps: number;
      sets: number;
    }[];
  };
  cardioLogs: CardioLog[];
}

const emptyAppData = (): AppData => ({
  activePlanId: 'femme-fatale',
  programs: {},
  exerciseLogs: {},
  cardioLogs: []
});

const normalizeAppData = (data: Partial<AppData>): AppData => ({
  activePlanId: data.activePlanId || 'femme-fatale',
  programs: data.programs || {},
  exerciseLogs: data.exerciseLogs || {},
  cardioLogs: data.cardioLogs || []
});

const App: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<{ name: string; email: string; avatar?: string } | null>(null);
  const [cloudReady, setCloudReady] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);
  const [units, setUnits] = useState<UnitSystem>(UnitSystem.METRIC);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);
  const [viewingProgramId, setViewingProgramId] = useState<string | null>(null);

  

const loadInitialData = (): AppData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return emptyAppData();
    }

    const parsed = JSON.parse(stored) as Partial<AppData>;
    return normalizeAppData(parsed);
  } catch (error) {
    console.error("Storage corrupted. Resetting...");
    localStorage.removeItem(STORAGE_KEY);

    return emptyAppData();
  }
};

  const handleSaveCardio = (log: CardioLogInput) => {
    if (selectedSessionId === null || !activeSession) return;

    const savedLog: CardioLog = {
      ...log,
      date: new Date().toISOString().split('T')[0],
      programId: activePlanId,
      sessionDay: selectedSessionId,
      mode: activeSession.blocks.find(block => block.type === 'cardio')?.cardio?.mode || 'steady'
    };

    setAppData(prev => ({
      ...prev,
      cardioLogs: [
        ...prev.cardioLogs.filter(item => !(item.programId === activePlanId && item.sessionDay === selectedSessionId)),
        savedLog
      ]
    }));
  };


  // ✅ Persist everything
  const [appData, setAppData] = useState<AppData>(loadInitialData);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const session = data.session;
      setUserId(session?.user.id || null);
      setUserProfile(session ? {
        name: session.user.user_metadata.full_name || session.user.user_metadata.name || 'Athlete',
        email: session.user.email || '',
        avatar: session.user.user_metadata.avatar_url
      } : null);
      setIsAuthenticated(Boolean(session));
      setAuthLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user.id || null);
      setUserProfile(session ? {
        name: session.user.user_metadata.full_name || session.user.user_metadata.name || 'Athlete',
        email: session.user.email || '',
        avatar: session.user.user_metadata.avatar_url
      } : null);
      setIsAuthenticated(Boolean(session));
      setAuthLoading(false);
      setCloudReady(false);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;

    const initializeCloud = async () => {
      const result = await loadCloudState<AppData>(userId);
      if (cancelled) return;

      if (result.status === 'found') {
        setAppData(normalizeAppData(result.data));
      } else if (result.status === 'empty') {
        await saveCloudState(userId, appData);
      } else {
        console.warn('Cloud sync unavailable; continuing with local data:', result.message);
      }
      if (!cancelled) setCloudReady(true);
    };

    initializeCloud();
    return () => { cancelled = true; };
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  }, [appData]);

  useEffect(() => {
    if (!userId || !cloudReady) return;
    const timeout = window.setTimeout(() => {
      saveCloudState(userId, appData).catch(error => {
        console.warn('Cloud backup failed; local data is still safe:', error);
      });
    }, 700);
    return () => window.clearTimeout(timeout);
  }, [appData, cloudReady, userId]);
  const activePlanId = appData.activePlanId;
console.log("WORKOUT_PLANS:", WORKOUT_PLANS);
console.log("Active Plan ID:", activePlanId);
  const activePlan = WORKOUT_PLANS.find(p => p.id === activePlanId);
  if (!activePlan) return null;

  const programData = appData.programs[activePlanId];
  const sessions = programData?.sessions ?? [];
  const currentDay = programData?.currentDay ?? 1;

  // ✅ Generate sessions with absolute day numbers
 const generateSessionsFromPlan = (plan: WorkoutPlan): Session[] => {
  const generated: Session[] = [];
  let absoluteDay = 1;

  plan.phases.forEach((phase) => {
    const weeksInPhase = phase.endWeek - phase.startWeek + 1;

    for (let week = 0; week < weeksInPhase; week++) {

      // 🔥 SORT DAYS BY dayIndex
      const sortedDays = [...phase.weeklyStructure].sort(
        (a, b) => a.dayIndex - b.dayIndex
      );

      sortedDays.forEach((day) => {
        generated.push({
          day: absoluteDay,
          title: day.title,
          blocks: normalizeWorkoutDay(day)
        });
        absoluteDay++;
      });

    }
  });

  return generated;
};

  // ✅ Ensure program exists in storage
  useEffect(() => {
    if (!appData.programs[activePlanId]) {
      const newSessions = generateSessionsFromPlan(activePlan);

      setAppData(prev => ({
        ...prev,
        programs: {
          ...prev.programs,
          [activePlanId]: {
            currentDay: 1,
            sessions: newSessions,
          },
        },
      }));
    }
  }, [activePlanId]);

  // ========================
  // WORKOUT HANDLERS
  // ========================

  const handleSaveLog = (
  exerciseId: string,
  weight: number,
  reps: number,
  sets: number
) => {
  const today = new Date().toISOString().split("T")[0];

  setAppData(prev => ({
    ...prev,
    exerciseLogs: {
      ...prev.exerciseLogs,
      [exerciseId]: [
        ...(prev.exerciseLogs[exerciseId] || []),
        {
          date: today,
          bestWeight: weight,
          programId: activePlanId,
          reps,
          sets
        }
      ]
    }
  }));
};


  const handleOpenWorkout = (session: Session) => {
    setSelectedSessionId(session.day);
    setCurrentView(ViewType.WORKOUT_DETAIL);
  };

  const handleUpdateSession = (updatedSession: Session) => {
    if (!programData) return;

    const updatedSessions = programData.sessions.map(s =>
      s.day === updatedSession.day ? updatedSession : s
    );

    setAppData(prev => ({
      ...prev,
      programs: {
        ...prev.programs,
        [activePlanId]: {
          ...programData,
          sessions: updatedSessions,
        },
      },
    }));
  };

  const handleCompleteWorkout = () => {
  if (!programData || selectedSessionId === null) return;

  const sessionToComplete = programData.sessions.find(
    s => s.day === selectedSessionId
  );

  // 🛑 Stop if already completed
  if (!sessionToComplete || sessionToComplete.completed) {
    return;
  }

  const updatedSessions = programData.sessions.map(session =>
    session.day === selectedSessionId
      ? { ...session, completed: true }
      : session
  );

  // ✅ Only advance currentDay if completing the actual current day
  const shouldAdvance = selectedSessionId === programData.currentDay;

  setAppData(prev => ({
    ...prev,
    programs: {
      ...prev.programs,
      [activePlanId]: {
        currentDay: shouldAdvance
          ? programData.currentDay + 1
          : programData.currentDay,
        sessions: updatedSessions,
      },
    },
  }));

  setSelectedSessionId(null);
  setCurrentView(ViewType.CALENDAR);
};

  // ========================
  // RESET
  // ========================

  const handleFullReset = () => {
    const resetSessions = generateSessionsFromPlan(activePlan);

    setAppData(prev => ({
      ...prev,
      programs: {
        ...prev.programs,
        [activePlanId]: {
          currentDay: 1,
          sessions: resetSessions,
        },
      },
    }));
  };

  const handlePhaseReset = () => {
    if (!programData) return;

    const currentWeek = Math.ceil(programData.currentDay / 7);

    const currentPhase = activePlan.phases.find(
      phase =>
        currentWeek >= phase.startWeek &&
        currentWeek <= phase.endWeek
    );

    if (!currentPhase) return;

    const updatedSessions = programData.sessions.map(session =>
      currentPhase.weeklyStructure.some(
        day => day.dayIndex === ((session.day - 1) % 7) + 1
      )
        ? { ...session, completed: false }
        : session
    );

    setAppData(prev => ({
      ...prev,
      programs: {
        ...prev.programs,
        [activePlanId]: {
          ...programData,
          sessions: updatedSessions,
        },
      },
    }));
  };

  // ========================
  // PLAN SWITCHING
  // ========================

  const handleActivatePlan = (id: string) => {
    setAppData(prev => ({
      ...prev,
      activePlanId: id,
    }));

    setCurrentView(ViewType.HOME);
    setViewingProgramId(null);
  };

  const handleViewIntro = (id: string) => {
    setViewingProgramId(id);
    setCurrentView(ViewType.PROGRAM_INTRO);
  };

  const handleGoogleLogin = async () => {
    setAuthError('');
    try {
      await signInWithGoogle();
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Google sign-in could not start.');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserId(null);
    setUserProfile(null);
    setIsAuthenticated(false);
    setCloudReady(false);
    setIsSettingsOpen(false);
    setCurrentView(ViewType.HOME);
  };

  const activeSession = sessions.find(s => s.day === selectedSessionId);
  const activeCardioLog = appData.cardioLogs.find(
    log => log.programId === activePlanId && log.sessionDay === selectedSessionId
  );
  const introProgram = WORKOUT_PLANS.find(p => p.id === viewingProgramId);

  if (authLoading) {
    return <div className="flex min-h-screen items-center justify-center bg-background-dark text-xs font-black uppercase tracking-[0.3em] text-white/50">Loading account…</div>;
  }

  if (!isAuthenticated) {
    return <LoginView onGoogleLogin={handleGoogleLogin} error={authError} />;
  }

  // ========================
  // RENDER
  // ========================

  const renderView = () => {
    switch (currentView) {
      case ViewType.HOME:
        return (
          <HomeView
            onNavigate={setCurrentView}
            onViewIntro={handleViewIntro}
            activePlanId={activePlanId}
            units={units}
            sessions={sessions}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        );

      case ViewType.CALENDAR:
        return (
          <CalendarView
            onOpenWorkout={handleOpenWorkout}
            currentDay={currentDay}
            sessions={sessions}
            activePlan={activePlan}
            onFullReset={handleFullReset}
            onPhaseReset={handlePhaseReset}
          />
        );

      case ViewType.PLANS:
        return (
          <PlansView
            activePlanId={activePlanId}
            onActivate={handleActivatePlan}
            onViewIntro={handleViewIntro}
            units={units}
          />
        );

      case ViewType.PERFORMANCE:
        return (
          <PerformanceView
            units={units}
            activePlanId={activePlanId}
            currentDay={currentDay}
            exerciseLogs={appData.exerciseLogs}
          />
        );

      case ViewType.WORKOUT_DETAIL:
        return activeSession ? (
          <DailyWorkoutView
            session={activeSession}
            units={units}
            onBack={() => setCurrentView(ViewType.CALENDAR)}
            onComplete={handleCompleteWorkout}
            currentDay={currentDay}
            onSaveLog={handleSaveLog}   // ✅ THIS LINE IS REQUIRED
            onSaveCardio={handleSaveCardio}
            cardioLog={activeCardioLog}
          />
        ) : null;

      case ViewType.COACH:
        return <AICoachView />;

      case ViewType.PROGRAM_INTRO:
        return introProgram ? (
          <ProgramIntroView
            program={introProgram}
            units={units}
            onBack={() => setCurrentView(ViewType.PLANS)}
            onActivate={handleActivatePlan}
          />
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto">
      <main className="flex-1 overflow-y-auto pb-24">
        {renderView()}
      </main>

      {currentView !== ViewType.WORKOUT_DETAIL &&
        currentView !== ViewType.PROGRAM_INTRO && (
          <BottomNav activeView={currentView} onNavigate={setCurrentView} />
        )}

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        units={units}
        onUnitChange={setUnits}
        onLogout={handleLogout}
        userName={userProfile?.name}
        userEmail={userProfile?.email}
        userAvatar={userProfile?.avatar}
      />
    </div>
  );
};

export default App;
