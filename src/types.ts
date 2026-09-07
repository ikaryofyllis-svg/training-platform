export enum ViewType {
  HOME = 'home',
  CALENDAR = 'calendar',
  PLANS = 'plans',
  PERFORMANCE = 'performance',
  COACH = 'coach',
  WORKOUT_DETAIL = 'workout_detail',
  PROGRAM_INTRO = 'program_intro'
}

export enum UnitSystem { METRIC = 'kg', IMPERIAL = 'lbs' }

export type MuscleGroup = 'back' | 'chest' | 'shoulders' | 'biceps' | 'triceps'
  | 'glutes' | 'hamstrings' | 'quads' | 'calves' | 'lower_body' | 'core'
  | 'conditioning' | 'power' | 'recovery';

/** A reusable movement. Workout programming belongs in ExerciseSet. */
export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  image: string;
  tips: string[];
  /** @deprecated Library prescriptions are retained during data migration. */
  reps?: string;
  /** @deprecated Library prescriptions are retained during data migration. */
  sets?: number;
}

/** An exercise prescription inside one workout block. */
export interface ExerciseSet {
  exerciseId: string;
  sets: number;
  reps?: string;
  /** One target per set. Its presence makes this a pyramid prescription. */
  repScheme?: string[];
  restSeconds?: number;
  tempo?: string;
  notes?: string;
}

export type TrainingBlockType = 'single' | 'pyramid' | 'superset' | 'giant_set' | 'cardio';

export interface CardioConfig {
  mode: 'steady' | 'interval';
  durationMinutes?: number;
  intervals?: string;
  equipment?: string;
  intensity?: string;
}

export interface TrainingBlock {
  type: TrainingBlockType;
  label?: string;
  exercises?: ExerciseSet[];
  cardio?: CardioConfig;
  rounds?: number;
  restSeconds?: number;
  notes?: string;
}

export interface PlanExerciseTemplate { exerciseId: string; sets: number; reps: string; }

export interface WorkoutDayTemplate {
  dayIndex: number;
  title: string;
  blocks?: TrainingBlock[];
  /** Legacy format normalized at the program boundary. */
  exercises?: ExerciseSet[];
}

export interface PlanDayTemplate extends WorkoutDayTemplate { restPeriod?: string; }

export interface Phase {
  id: string;
  name: string;
  startWeek: number;
  endWeek: number;
  weeklyStructure: WorkoutDayTemplate[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  durationWeeks: number;
  goalType: string;
  category: string[];
  difficulty: string;
  description: string;
  image: string;
  baseWeightGoalKg?: number;
  features?: { title: string; subtitle: string; icon: string; }[];
  phases: Phase[];
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
  features?: { title: string; subtitle: string; icon: string; }[];
}

/** Runtime workout generated from a weekly program template. */
export interface Session {
  day: number;
  title: string;
  blocks: TrainingBlock[];
  completed?: boolean;
}

export interface LiftPoint { date: string; weightKg: number; }
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
