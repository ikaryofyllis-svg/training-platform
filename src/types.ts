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
  weeklyStructure: {
    dayIndex: number;
    title: string;
    blocks?: TrainingBlock[];
  }[];
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

export type MuscleGroup =
  | "back"
  | "chest"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "glutes"
  | "hamstrings"
  | "quads"
  | "calves";
export interface ExerciseSet {
  exerciseId: string;
  sets: number;
  reps: string;
}
  export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  image: string;
  tips: string[];
}

export interface TrainingBlock {
  type: TrainingBlockType;
  label?: string; // e.g. "A1", "B1"
  exercises?: ExerciseSet[];
  cardio?: CardioConfig;
}
export interface CardioConfig {
  mode: "steady" | "interval";
  durationMinutes?: number;
  intervals?: string; // e.g. "2min on / 2min off x5"
}
export type TrainingBlockType =
  | "single"
  | "superset"
  | "giant_set"
  | "cardio";

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
  blocks: TrainingBlock[];
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
