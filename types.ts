export interface PlanExerciseTemplate {
  exerciseId: string;
  sets: number;
  reps: string;
}

export interface PlanDayTemplate {
  dayIndex: number;   // 1–7
  title: string;
  restPeriod?: string;
  exercises?: PlanExerciseTemplate[];
}

export interface Phase {
  id: string;
  name: string;
  startWeek: number;
  endWeek: number;
  weeklyStructure: PlanDayTemplate[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  durationWeeks: number;
  category: string;
  difficulty: string;
  phases: Phase[];
}

export enum ViewType {
  HOME = 'home',
  CALENDAR = 'calendar',
  PLANS = 'plans',
  PERFORMANCE = 'performance',
  COACH = 'coach',
  WORKOUT_DETAIL = 'workout_detail',
  PROGRAM_INTRO = 'program_intro'
}

export enum UnitSystem {
  METRIC = 'kg',
  IMPERIAL = 'lbs'
}

export interface Exercise {
  id: string;
  name: string;
  reps: string;
  sets: number;
  image: string;
  tips: string[];
  loggedWeight?: number; 
}

export interface Program {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  image: string;
  difficulty: 'BEGINNER' | 'MASS' | 'CONDITIONING' | 'ADVANCED';
  baseWeightGoalKg: number;

  features?: {
    title: string;
    subtitle: string;
    icon: string;
  }[];
}

export interface Session {
  day: number;
  title: string;
  status: 'completed' | 'active' | 'upcoming';
  eexercises?: {
  exerciseId: string;
  sets: number;
  reps: string;
}[];
  restPeriod?: string;
  globalSets?: number;
  loggedDistance?: number;
  loggedTime?: string;
  loggedPace?: string;
}

export interface LiftPoint {
  date: string;
  weightKg: number;
}

export interface CardioStats {
  longestRunKm: number;
  bestPaceMinPerKm: string;
  weeklyDistanceKm: number;
  heartRateAvg: number;
}

export interface PerformanceHistory {
  bench: LiftPoint[];
  squat: LiftPoint[];
  deadlift: LiftPoint[];
  ohp: LiftPoint[];
  cardio: CardioStats;
}
