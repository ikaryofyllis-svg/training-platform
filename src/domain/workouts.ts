import { ExerciseSet, TrainingBlock, TrainingBlockType, WorkoutDayTemplate } from '../types';

export interface WorkoutSummary {
  exerciseCount: number;
  workingSets: number;
  modes: TrainingBlockType[];
}

const isCardioTitle = (title: string) => /run|cardio|interval|conditioning/i.test(title);

/** Converts old program days once, at the boundary, so views stay simple. */
export const normalizeWorkoutDay = (day: WorkoutDayTemplate): TrainingBlock[] => {
  if (day.blocks?.length) return day.blocks;
  if (day.exercises?.length) {
    return day.exercises.map(exercise => ({
      type: exercise.repScheme ? 'pyramid' : 'single',
      exercises: [exercise]
    }));
  }
  if (isCardioTitle(day.title)) {
    return [{ type: 'cardio', cardio: { mode: /interval/i.test(day.title) ? 'interval' : 'steady' } }];
  }
  return [];
};

export const getBlockMode = (block: TrainingBlock): TrainingBlockType => {
  if (block.type === 'single' && block.exercises?.some(ex => ex.repScheme?.length)) return 'pyramid';
  return block.type;
};

export const getSetTargets = (exercise: ExerciseSet): string[] =>
  exercise.repScheme?.length
    ? exercise.repScheme
    : Array.from({ length: exercise.sets }, () => exercise.reps || '—');

export const getNumericRepTarget = (exercise: ExerciseSet): number => {
  const parsed = getSetTargets(exercise)
    .map(target => Number.parseInt(target, 10))
    .filter(Number.isFinite);
  return parsed.length ? Math.round(parsed.reduce((sum, value) => sum + value, 0) / parsed.length) : 0;
};

export const summarizeWorkout = (blocks: TrainingBlock[]): WorkoutSummary => ({
  exerciseCount: blocks.reduce((sum, block) => sum + (block.exercises?.length || 0), 0),
  workingSets: blocks.reduce(
    (sum, block) => sum + (block.exercises?.reduce((setSum, ex) => setSum + ex.sets, 0) || 0), 0
  ),
  modes: [...new Set(blocks.map(getBlockMode))]
});
