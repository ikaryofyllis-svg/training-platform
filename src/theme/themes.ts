import { TrainingContext, TrainingGoal, VisualThemeId } from '../types';

export interface VisualTheme {
  id: VisualThemeId;
  name: string;
  eyebrow: string;
  description: string;
  coachVoice: string;
  heroImage: string;
  copy: {
    activateProgram: string;
    continueWorkout: string;
    phaseLabel: string;
  };
  phaseNames: string[];
}

const asset = (name: string) => `${import.meta.env.BASE_URL}themes/${name}`;

export const VISUAL_THEMES: VisualTheme[] = [
  {
    id: 'forge',
    name: 'Forge',
    eyebrow: 'Precision performance',
    description: 'Cinematic, focused and engineered for measurable progress.',
    coachVoice: 'Build with intent.',
    heroImage: asset('forge-hero.jpg'),
    copy: {
      activateProgram: 'Activate',
      continueWorkout: 'Continue',
      phaseLabel: 'Block'
    },
    phaseNames: ['Foundation', 'Build', 'Intensity', 'Peak', 'Reset']
  },
  {
    id: 'ascend',
    name: 'Ascend',
    eyebrow: 'Break your limits',
    description: 'Original anime-inspired energy, ranks and momentum.',
    coachVoice: 'Your next level starts now.',
    heroImage: asset('ascend-hero.jpg'),
    copy: {
      activateProgram: 'Iku zo!',
      continueWorkout: 'Power up',
      phaseLabel: 'Arc'
    },
    phaseNames: ['Awakening', 'Power Gathering', 'Limit Break', 'Ascension', 'Mastery']
  },
  {
    id: 'bloom',
    name: 'Bloom',
    eyebrow: 'Move with confidence',
    description: 'Warm, supportive and adaptable through every life stage.',
    coachVoice: 'Strength can be gentle.',
    heroImage: asset('bloom-hero.jpg'),
    copy: {
      activateProgram: "Let's bloom",
      continueWorkout: 'Keep growing',
      phaseLabel: 'Season'
    },
    phaseNames: ['Root', 'Grow', 'Strengthen', 'Flourish', 'Renew']
  }
];

export const TRAINING_CONTEXTS: { id: TrainingContext; name: string; description: string; icon: string }[] = [
  { id: 'general', name: 'Everyday training', description: 'Strength, muscle, conditioning and mobility.', icon: 'fitness_center' },
  { id: 'prenatal', name: 'Prenatal', description: 'Stage-aware movement with clinical safety boundaries.', icon: 'favorite' },
  { id: 'postpartum', name: 'Postpartum return', description: 'A gradual return based on recovery and readiness.', icon: 'self_improvement' },
  { id: 'post_injury', name: 'Return from injury', description: 'A careful rebuild guided by clearance, symptoms and confidence.', icon: 'healing' }
];

export const TRAINING_GOALS: { id: TrainingGoal; name: string; icon: string }[] = [
  { id: 'strength', name: 'Strength', icon: 'exercise' },
  { id: 'conditioning', name: 'Conditioning', icon: 'directions_run' },
  { id: 'hypertrophy', name: 'Build muscle', icon: 'fitness_center' },
  { id: 'mobility', name: 'Mobility', icon: 'accessibility_new' }
];

export const getVisualTheme = (id: VisualThemeId) => VISUAL_THEMES.find(theme => theme.id === id) || VISUAL_THEMES[0];
export const getThemedPhaseName = (themeId: VisualThemeId, phaseIndex: number) => {
  const theme = getVisualTheme(themeId);
  return theme.phaseNames[phaseIndex % theme.phaseNames.length];
};
export const isSpecializedContext = (context: TrainingContext) => context !== 'general';
