
import { Program, Session, PerformanceHistory, Exercise } from './types';

export const EXERCISE_LIBRARY: Exercise[] = [

  // LOWER BODY
  {
    id: 'back_squat',
    name: 'Barbell Back Squat',
    reps: '',
    sets: 0,
    image: 'https://images.unsplash.com/photo-5UbIqV58CW8?q=80&w=600&auto=format&fit=crop',
    tips: ['Chest up', 'Drive through heels', 'Break parallel']
  },
  {
    id: 'rdl',
    name: 'Romanian Deadlift',
    reps: '',
    sets: 0,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop',
    tips: ['Hinge at hips', 'Keep back flat', 'Stretch hamstrings']
  },
  {
    id: 'bulgarian_split',
    name: 'Bulgarian Split Squat',
    reps: '',
    sets: 0,
    image: 'https://images.unsplash.com/photo-rstdH3ZhiQ4?q=80&w=600&auto=format&fit=crop',
    tips: ['Knee tracks toes', 'Stay upright']
  },
  {
    id: 'hamstring_curl',
    name: 'Hamstring Curl',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
  id: 'step_ups',
  name: 'Weighted Step-ups',
  reps: '',
  sets: 0,
  image: '',
  tips: []
  },
  {
    id: 'hip_thrust',
    name: 'Barbell Hip Thrust',
    reps: '',
    sets: 0,
    image: '',
    tips: ['Full lockout', 'Pause at top']
  },
  {
  id: 'glute_bridge_hold',
  name: 'Glute Bridge Hold',
  reps: '30s',
  sets: 3,
  image: '',
  tips: []
  },
  {
    id: 'cable_kickback',
    name: 'Cable Kickback',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },

  // BACK
  {
    id: 'pull_ups',
    name: 'Pull-ups',
    reps: '',
    sets: 0,
    image: '',
    tips: ['Full hang', 'Chest to bar']
  },
  {
    id: 'straight_arm_pulldown',
    name: 'Straight Arm Pulldown',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
    id: 'overhead_tricep_extension',
    name: 'Overhead Tricep Extension',
    reps: '',
    sets: 0,
    image: '',
   tips: []
  },
  {
    id: 'lat_pulldown',
    name: 'Lat Pulldown',
    reps: '',
    sets: 0,
    image: 'https://images.unsplash.com/photo-YFmvjO3TP_s?q=80&w=600&auto=format&fit=crop',
    tips: []
  },
  {
    id: 'seated_row',
    name: 'Seated Cable Row',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
    id: 'face_pull',
    name: 'Face Pull',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
    id: 'tricep_pushdown',
    name: 'Tricep Pushdown',
    reps: '',
    sets: 0,
    image: 'https://images.unsplash.com/photo-WdoQio6HPVA?q=80&w=600&auto=format&fit=crop',
    tips: []
  },

  // CHEST
  {
    id: 'bench_press',
    name: 'Bench Press',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
    id: 'incline_db_press',
    name: 'Incline Dumbbell Press',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
    id: 'chest_fly',
    name: 'Chest Fly Machine',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },

  // SHOULDERS
  {
    id: 'shoulder_press_machine',
    name: 'Shoulder Press Machine',
    reps: '',
    sets: 0,
    image: 'https://images.unsplash.com/photo-qfjuh4OLdxw?q=80&w=600&auto=format&fit=crop',
    tips: []
  },
  {
    id: 'reverse_fly',
    name: 'Reverse Fly',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
    id: 'lateral_raise',
    name: 'Lateral Raise',
    reps: '',
    sets: 0,
    image: '',
    tips: []
  },
  {
    id: 'e2',
    name: 'Paused Bench Press',
    reps: '',
    sets: 4,
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=600&auto=format&fit=crop',
    tips: ['1 second pause on chest', 'Drive legs', 'Control descent']
  },
  {
    id: 'e3',
    name: 'Weighted Pullups',
    reps: 'AMRAP',
    sets: 3,
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c32f850c?q=80&w=600&auto=format&fit=crop',
    tips: ['Full extension', 'Chin over bar', 'No swinging']
  },
    {
    id: 'bicep_curl',
    name: 'Dumbbell Bicep Curl',
    reps: '',
    sets: 0,
    image: '',
    tips: ['Control the negative', 'Elbows stay fixed']
  },
  {
    id: 'tricep_extension',
    name: 'Cable Tricep Extension',
    reps: '',
    sets: 0,
    image: '',
    tips: ['Full lockout', 'Control return']
  },
  {
    id: 'quad_extension',
    name: 'Leg Extension',
    reps: '',
    sets: 0,
    image: '',
    tips: ['Control tempo', 'Squeeze at top']
  },
  {
    id: 'calf_raise_machine',
    name: 'Seated Calf Raise',
    reps: '',
    sets: 0,
    image: '',
    tips: ['Full stretch', 'Pause at top']
  },
  {
    id: 'cable_chest_press',
    name: 'Cable Chest Press',
    reps: '',
    sets: 0,
    image: '',
    tips: ['Neutral spine', 'Controlled movement']
  },
{
  id: 'barbell_row',
  name: 'Barbell Row',
  reps: '',
  sets: 0,
  image: '',
  tips: ['Flat back', 'Pull to lower chest', 'Control eccentric']
},
{
  id: 'single_arm_row',
  name: 'Single Arm Dumbbell Row',
  reps: '',
  sets: 0,
  image: '',
  tips: ['Stretch at bottom', 'Drive elbow back']
},
{
  id: 'seated_row_wide_grip',
  name: 'Seated Row (Wide Grip)',
  reps: '',
  sets: 0,
  image: '',
  tips: ['Chest up', 'Pull wide to ribs']
}

];

export const WORKOUT_PLANS: WorkoutPlan[] = [
{
  id: 'femme-fatale',
  name: 'Femme Fatale',
  durationWeeks: 10,
  goalType: 'Strength + Conditioning',
  category: ['strength', 'conditioning'],
  difficulty: 'Intermediate',
  description: 'Glute-focused strength and hybrid conditioning protocol.',
  image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&h=300&auto=format&fit=crop',
  features: [
    {
      title: 'Glute Dominance',
      subtitle: 'Posterior Chain Priority',
      icon: 'fitness_center'
    },
    {
      title: 'Metabolic Conditioning',
      subtitle: 'Hybrid Energy Systems',
      icon: 'bolt'
    }
  ],

  phases: [

    // ================= PHASE 1 =================
    {
      id: 'phase1',
      name: 'Foundation',
      startWeek: 1,
      endWeek: 3,
      weeklyStructure: [

        {
          dayIndex: 1,
          title: 'Intervals + Glutes',
          exercises: [
            { exerciseId: 'hip_thrust', sets: 3, reps: '10' },
            { exerciseId: 'bulgarian_split', sets: 3, reps: '10' },
            { exerciseId: 'cable_kickback', sets: 3, reps: '15' },
            { exerciseId: 'glute_bridge_hold', sets: 3, reps: '30s' }
          ]
        },
        {
          dayIndex: 2,
          title: 'Back + Triceps',
          exercises: [
            { exerciseId: 'pull_ups', sets: 3, reps: 'AMRAP' },
            { exerciseId: 'seated_row', sets: 3, reps: '10' },
            { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '10' },
            { exerciseId: 'tricep_pushdown', sets: 3, reps: '10' },
            { exerciseId: 'overhead_tricep_extension', sets: 3, reps: '10' }
          ]
        },
        {
          dayIndex: 3,
          title: 'Lower Body Strength',
          exercises: [
            { exerciseId: 'back_squat', sets: 3, reps: '8-10' },
            { exerciseId: 'rdl', sets: 3, reps: '8' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '12' },
            { exerciseId: 'step_ups', sets: 3, reps: '10' }
          ]
        },
        {
          dayIndex: 4,
          title: 'Chest + Shoulders',
          exercises: [
            { exerciseId: 'bench_press', sets: 3, reps: '8-10' },
            { exerciseId: 'incline_db_press', sets: 3, reps: '10' },
            { exerciseId: 'shoulder_press_machine', sets: 3, reps: '10' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '12' }
          ]
        },
        { dayIndex: 5, title: 'Long Run' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    },

    // ================= PHASE 2 =================
    {
      id: 'phase2',
      name: 'Load Progression',
      startWeek: 4,
      endWeek: 7,
      weeklyStructure: [

        {
          dayIndex: 1,
          title: 'Intervals + Glutes (2min On / 2min Off x5-6)',
          exercises: [
            { exerciseId: 'hip_thrust', sets: 4, reps: '8' },
            { exerciseId: 'bulgarian_split', sets: 4, reps: '8' },
            { exerciseId: 'cable_kickback', sets: 3, reps: '12' }
          ]
        },
        {
          dayIndex: 2,
          title: 'Back + Triceps',
          exercises: [
            { exerciseId: 'pull_ups', sets: 4, reps: '6-8' },
            { exerciseId: 'seated_row', sets: 4, reps: '8' },
            { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '10' },
            { exerciseId: 'tricep_pushdown', sets: 3, reps: '8-10' },
            { exerciseId: 'overhead_tricep_extension', sets: 3, reps: '8-10' }
          ]
        },
        {
          dayIndex: 3,
          title: 'Lower Body Strength',
          exercises: [
            { exerciseId: 'back_squat', sets: 4, reps: '6-8' },
            { exerciseId: 'rdl', sets: 4, reps: '6-8' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '10' },
            { exerciseId: 'step_ups', sets: 3, reps: '8' }
          ]
        },
        {
          dayIndex: 4,
          title: 'Chest + Shoulders',
          exercises: [
            { exerciseId: 'bench_press', sets: 4, reps: '6-8' },
            { exerciseId: 'incline_db_press', sets: 3, reps: '8' },
            { exerciseId: 'shoulder_press_machine', sets: 3, reps: '8' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '12' }
          ]
        },
        { dayIndex: 5, title: 'Long Run' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    },

    // ================= PHASE 3 =================
    {
      id: 'phase3',
      name: 'Intensity',
      startWeek: 8,
      endWeek: 10,
      weeklyStructure: [

        {
          dayIndex: 1,
          title: 'Intervals + Glutes (2min On / 2min Off x5)',
          exercises: [
            { exerciseId: 'hip_thrust', sets: 4, reps: '5-6' },
            { exerciseId: 'bulgarian_split', sets: 3, reps: '6' },
            { exerciseId: 'cable_kickback', sets: 3, reps: '10' }
          ]
        },
        {
          dayIndex: 2,
          title: 'Back + Triceps',
          exercises: [
            { exerciseId: 'pull_ups', sets: 4, reps: '4-6' },
            { exerciseId: 'seated_row', sets: 4, reps: '6' },
            { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '8' },
            { exerciseId: 'tricep_pushdown', sets: 3, reps: '6-8' },
            { exerciseId: 'overhead_tricep_extension', sets: 3, reps: '6-8' }
          ]
        },
        {
          dayIndex: 3,
          title: 'Lower Body Strength',
          exercises: [
            { exerciseId: 'back_squat', sets: 5, reps: '4-5' },
            { exerciseId: 'rdl', sets: 4, reps: '5-6' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '8' },
            { exerciseId: 'step_ups', sets: 3, reps: '6' }
          ]
        },
        {
          dayIndex: 4,
          title: 'Chest + Shoulders',
          exercises: [
            { exerciseId: 'bench_press', sets: 5, reps: '4-5' },
            { exerciseId: 'incline_db_press', sets: 3, reps: '6-8' },
            { exerciseId: 'shoulder_press_machine', sets: 3, reps: '6-8' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '12' }
          ]
        },
        { dayIndex: 5, title: 'Long Run (Reduced Volume)' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    }

  ]
},
   {
    id: 'unleash-strength',
   name: 'Unleash Strength',
   durationWeeks: 10,
   goalType: 'Strength + Conditioning',
   category: ['strength'],
   difficulty: 'Advanced',
  description: 'Upper-dominant strength protocol focused on shoulders, traps and upper chest with progressive overload and peak strength finish.',
  image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',

  features: [
    {
      title: 'Upper Chest Focus',
      subtitle: 'Flat Bench + Cable Volume',
      icon: 'fitness_center'
    },
    {
      title: 'Trap & Shoulder Bias',
      subtitle: 'Heavy Overhead Work',
      icon: 'military_tech'
    }
  ],

  phases: [

    // ================= PHASE 1 =================
    {
      id: 'phase1',
      name: 'Foundation',
      startWeek: 1,
      endWeek: 2,

      weeklyStructure: [
        // Day 1 – Intervals + Shoulders
        {
          dayIndex: 1,
          title: 'Intervals + Shoulders',
          exercises: [
            { exerciseId: 'shoulder_press_machine', sets: 3, reps: '10' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '12' }
          ]
        },

        // Day 2 – Back + Arms
        {
          dayIndex: 2,
          title: 'Back + Arms',
          exercises: [
            { exerciseId: 'lat_pulldown', sets: 3, reps: '10' },
            { exerciseId: 'seated_row', sets: 3, reps: '10' },
            { exerciseId: 'bicep_curl', sets: 3, reps: '12' },
            { exerciseId: 'tricep_extension', sets: 3, reps: '12' }
          ]
        },

        // Day 3 – Lower Body Strength
        {
          dayIndex: 3,
          title: 'Lower Body Strength',
          exercises: [
            { exerciseId: 'back_squat', sets: 3, reps: '10' },
            { exerciseId: 'rdl', sets: 3, reps: '8' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '12' },
            { exerciseId: 'quad_extension', sets: 3, reps: '12' },
            { exerciseId: 'calf_raise_machine', sets: 3, reps: '15' }
          ]
        },

        // Day 4 – Chest + Upper
        {
          dayIndex: 4,
          title: 'Chest + Upper',
          exercises: [
            { exerciseId: 'bench_press', sets: 3, reps: '10' },
            { exerciseId: 'cable_chest_press', sets: 3, reps: '12' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12' }
          ]
        },

        { dayIndex: 5, title: 'Long Run' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    },

    // ================= PHASE 2 =================
    {
      id: 'phase2',
      name: 'Progressive Strength',
      startWeek: 3,
      endWeek: 7,

      weeklyStructure: [
        {
          dayIndex: 1,
          title: 'Intervals + Shoulders',
          exercises: [
            { exerciseId: 'shoulder_press_machine', sets: 4, reps: '8' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '10' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '10' }
          ]
        },

        {
          dayIndex: 2,
          title: 'Back + Arms',
          exercises: [
            { exerciseId: 'lat_pulldown', sets: 4, reps: '8' },
            { exerciseId: 'seated_row', sets: 4, reps: '8' },
            { exerciseId: 'bicep_curl', sets: 3, reps: '8' },
            { exerciseId: 'tricep_extension', sets: 3, reps: '8' }
          ]
        },

        {
          dayIndex: 3,
          title: 'Lower Body Strength',
          exercises: [
            { exerciseId: 'back_squat', sets: 4, reps: '6-8' },
            { exerciseId: 'rdl', sets: 4, reps: '6-8' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '10' },
            { exerciseId: 'quad_extension', sets: 3, reps: '10' },
            { exerciseId: 'calf_raise_machine', sets: 4, reps: '12' }
          ]
        },

        {
          dayIndex: 4,
          title: 'Chest + Upper',
          exercises: [
            { exerciseId: 'bench_press', sets: 4, reps: '6-8' },
            { exerciseId: 'cable_chest_press', sets: 3, reps: '8-10' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '10' }
          ]
        },

        { dayIndex: 5, title: 'Long Run' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    },

    // ================= PHASE 3 =================
    {
      id: 'phase3',
      name: 'Peak Strength',
      startWeek: 8,
      endWeek: 10,

      weeklyStructure: [
        {
          dayIndex: 1,
          title: 'Intervals + Shoulders',
          exercises: [
            { exerciseId: 'shoulder_press_machine', sets: 5, reps: '4-5' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '8' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '8' }
          ]
        },

        {
          dayIndex: 2,
          title: 'Back + Arms',
          exercises: [
            { exerciseId: 'lat_pulldown', sets: 4, reps: '5' },
            { exerciseId: 'seated_row', sets: 4, reps: '5' },
            { exerciseId: 'bicep_curl', sets: 4, reps: '8' },
            { exerciseId: 'tricep_extension', sets: 4, reps: '8' }
          ]
        },

        {
          dayIndex: 3,
          title: 'Lower Body Strength',
          exercises: [
            { exerciseId: 'back_squat', sets: 5, reps: '4-5' },
            { exerciseId: 'rdl', sets: 4, reps: '5' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '8' },
            { exerciseId: 'quad_extension', sets: 3, reps: '8' },
            { exerciseId: 'calf_raise_machine', sets: 4, reps: '10' }
          ]
        },

        {
          dayIndex: 4,
          title: 'Chest + Upper',
          exercises: [
            { exerciseId: 'bench_press', sets: 5, reps: '4-5' },
            { exerciseId: 'cable_chest_press', sets: 3, reps: '6-8' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '8' }
          ]
        },

        { dayIndex: 5, title: 'Long Run' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    }

  ]
},
{
  id: 'volume-overdrive',
  name: 'Volume Overdrive',
  durationWeeks: 16,
  goalType: 'Hypertrophy + Conditioning',
  category: ['hypertrophy'],
  difficulty: 'Intermediate',
  description: 'High-volume hypertrophy protocol focused on muscular size, back density and lower-body development while maintaining cardio conditioning.',
  image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=400&auto=format&fit=crop',

  features: [
    {
      title: 'Back Volume Emphasis',
      subtitle: 'High Row & Pulldown Density',
      icon: 'fitness_center'
    },
    {
      title: 'Lower Body Growth',
      subtitle: 'Quad + Glute Expansion',
      icon: 'sports_gymnastics'
    }
  ],

  phases: [

    // ================= PHASE 1 =================
    {
      id: 'phase1',
      name: 'Accumulation',
      startWeek: 1,
      endWeek: 2,

      weeklyStructure: [
        {
          dayIndex: 1,
          title: 'Intervals + Shoulders',
          exercises: [
            { exerciseId: 'shoulder_press_machine', sets: 4, reps: '10-12' },
            { exerciseId: 'lateral_raise', sets: 4, reps: '12-15' },
            { exerciseId: 'reverse_fly', sets: 4, reps: '12-15' },
            { exerciseId: 'upright_row', sets: 3, reps: '12' }
          ]
        },

       {
  dayIndex: 2,
  title: 'Back + Arms Volume',
  exercises: [

    // NEW
    { exerciseId: 'pull_ups', sets: 3, reps: 'AMRAP' },

    { exerciseId: 'lat_pulldown', sets: 3, reps: '10-12' }, // reduced from 4
    { exerciseId: 'seated_row', sets: 4, reps: '10-12' },
    { exerciseId: 'single_arm_row', sets: 3, reps: '12' },

    { exerciseId: 'bicep_curl', sets: 3, reps: '12' },
    { exerciseId: 'tricep_extention', sets: 3, reps: '12' }
  ]
},

        {
          dayIndex: 3,
          title: 'Lower Body Volume',
          exercises: [
            { exerciseId: 'back_squat', sets: 4, reps: '10' },
            { exerciseId: 'rdl', sets: 4, reps: '10' },
            { exerciseId: 'walking_lunges', sets: 3, reps: '12' },
            { exerciseId: 'quad_extension', sets: 3, reps: '15' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '15' },
            { exerciseId: 'calf_raise_machine', sets: 4, reps: '15' }
          ]
        },

        {
          dayIndex: 4,
          title: 'Chest + Upper Volume',
          exercises: [
            { exerciseId: 'bench_press', sets: 4, reps: '8-10' },
            { exerciseId: 'incline_db_press', sets: 3, reps: '10-12' },
            { exerciseId: 'chest_fly', sets: 3, reps: '12-15' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '15' }
          ]
        },

        { dayIndex: 5, title: 'Long Run' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    },

    // ================= PHASE 2 =================
    {
      id: 'phase2',
      name: 'High Volume Overload',
      startWeek: 3,
      endWeek: 6,

      weeklyStructure: [
        {
          dayIndex: 1,
          title: 'Intervals + Shoulders',
          exercises: [
            { exerciseId: 'shoulder_press_machine', sets: 5, reps: '8-10' },
            { exerciseId: 'lateral_raise', sets: 4, reps: '12' },
            { exerciseId: 'reverse_fly', sets: 4, reps: '12' },
            { exerciseId: 'face_pull', sets: 3, reps: '15' }
          ]
        },

      {
  dayIndex: 2,
  title: 'Back Density + Arms',
  exercises: [

    // NEW FIRST
    { exerciseId: 'pull_ups', sets: 3, reps: 'AMRAP' },

    { exerciseId: 'lat_pulldown', sets: 3, reps: '8-10' }, // reduced from 5
    { exerciseId: 'seated_row', sets: 4, reps: '10' },
    { exerciseId: 'single_arm_row', sets: 3, reps: '12' },
    { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '12-15' },

    { exerciseId: 'bicep_curl', sets: 4, reps: '10' }
  ]
},

        {
          dayIndex: 3,
          title: 'Lower Body Expansion',
          exercises: [
            { exerciseId: 'back_squat', sets: 5, reps: '8-10' },
            { exerciseId: 'leg_press', sets: 4, reps: '12' },
            { exerciseId: 'rdl', sets: 4, reps: '8-10' },
            { exerciseId: 'walking_lunges', sets: 3, reps: '12' },
            { exerciseId: 'quad_extension', sets: 3, reps: '15' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '15' },
            { exerciseId: 'calf_raise_machine', sets: 4, reps: '15' }
          ]
        },

        {
          dayIndex: 4,
          title: 'Chest + Upper Pump',
          exercises: [
            { exerciseId: 'bench_press', sets: 4, reps: '8' },
            { exerciseId: 'incline_db_press', sets: 4, reps: '10' },
            { exerciseId: 'chest_fly', sets: 4, reps: '12-15' },
            { exerciseId: 'lateral_raise', sets: 4, reps: '15' }
          ]
        },

        { dayIndex: 5, title: 'Long Run' },
        { dayIndex: 6, title: 'Recovery' },
        { dayIndex: 7, title: 'Rest' }
      ]
    },

    // ================= PHASE 3 =================
    {
      id: 'phase3',
    name: 'Deload',
    startWeek: 7,
    endWeek: 7,
    weeklyStructure: [
      {
        dayIndex: 1,
        title: 'Upper (Deload)',
        exercises: [
          { exerciseId: 'shoulder_press_machine', sets: 3, reps: '8' },
          { exerciseId: 'lateral_raise', sets: 2, reps: '12' }
        ]
      },
      {
  dayIndex: 2,
  title: 'Back (Deload)',
  exercises: [
    { exerciseId: 'pull_ups', sets: 2, reps: 'AMRAP (stop early)' },
    { exerciseId: 'lat_pulldown', sets: 2, reps: '8' }
  ]
},
      {
        dayIndex: 3,
        title: 'Lower (Deload)',
        exercises: [
          { exerciseId: 'back_squat', sets: 3, reps: '6-8' },
          { exerciseId: 'rdl', sets: 2, reps: '8' }
        ]
      },
      {
        dayIndex: 4,
        title: 'Chest (Deload)',
        exercises: [
          { exerciseId: 'bench_press', sets: 3, reps: '6-8' }
        ]
      },
      { dayIndex: 5, title: 'Long Run (Easy Zone 2)' },
      { dayIndex: 6, title: 'Recovery' },
      { dayIndex: 7, title: 'Rest' }
    
      ]
    },
      {
  id: 'phase4',
    name: 'Hypertrophy Wave 2',
    startWeek: 8,
    endWeek: 12,
   
  weeklyStructure: [

    {
      dayIndex: 1,
      title: 'Shoulders Overload',
      exercises: [
        { exerciseId: 'shoulder_press_machine', sets: 4, reps: '6-8' },
        { exerciseId: 'lateral_raise', sets: 4, reps: '12' },
        { exerciseId: 'reverse_fly', sets: 3, reps: '12' },
        { exerciseId: 'upright_row', sets: 3, reps: '10' }
      ]
    },

    {
  dayIndex: 2,
  title: 'Back Density 2.0',
  exercises: [

    // FIRST EXERCISE
    { exerciseId: 'pull_ups', sets: 4, reps: 'AMRAP' },

    { exerciseId: 'barbell_row', sets: 4, reps: '6-8' },

    { exerciseId: 'seated_row_wide_grip', sets: 3, reps: '10-12' },
    { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '12-15' },

    { exerciseId: 'bicep_curl', sets: 3, reps: '10' }
  ]
},

    {
      dayIndex: 3,
      title: 'Leg Volume Intensified',
      exercises: [
        { exerciseId: 'back_squat', sets: 4, reps: '6-8' },
        { exerciseId: 'leg_press', sets: 4, reps: '10' },
        { exerciseId: 'rdl', sets: 4, reps: '8' },
        { exerciseId: 'walking_lunges', sets: 3, reps: '12' },
        { exerciseId: 'quad_extension', sets: 3, reps: '15' }
      ]
    },

    {
      dayIndex: 4,
      title: 'Chest + Upper',
      exercises: [
        { exerciseId: 'bench_press', sets: 4, reps: '6-8' },
        { exerciseId: 'incline_db_press', sets: 4, reps: '8-10' },
        { exerciseId: 'chest_fly', sets: 3, reps: '12-15' }
      ]
    },

    { dayIndex: 5, title: 'Long Run' },
    { dayIndex: 6, title: 'Recovery' },
    { dayIndex: 7, title: 'Rest' }
  ]
},
  // ================= PHASE 5 (DELOAD) =================
  {
    id: 'phase5',
    name: 'Deload',
    startWeek: 13,
    endWeek: 13,
    weeklyStructure: [
      {
        dayIndex: 1,
        title: 'Upper (Deload)',
        exercises: [
          { exerciseId: 'shoulder_press_machine', sets: 3, reps: '6-8' },
          { exerciseId: 'lateral_raise', sets: 2, reps: '12' }
        ]
      },
      {
        dayIndex: 2,
        title: 'Back (Deload)',
        exercises: [
          { exerciseId: 'barbell_row', sets: 3, reps: '6-8' }
        ]
      },
      {
        dayIndex: 3,
        title: 'Lower (Deload)',
        exercises: [
          { exerciseId: 'back_squat', sets: 3, reps: '5-6' }
        ]
      },
      {
        dayIndex: 4,
        title: 'Chest (Deload)',
        exercises: [
          { exerciseId: 'bench_press', sets: 3, reps: '5-6' }
        ]
      },
      { dayIndex: 5, title: 'Long Run (Easy)' },
      { dayIndex: 6, title: 'Recovery' },
      { dayIndex: 7, title: 'Rest' }
    ]
  },
  {
  id: 'phase6',
  name: 'Strength Conversion',
  startWeek: 14,
  endWeek: 16,

  weeklyStructure: [

    // ================= SHOULDERS =================
    {
      dayIndex: 1,
      title: 'Shoulder Strength Focus',
      exercises: [

        // HEAVY
        { exerciseId: 'shoulder_press_machine', sets: 4, reps: '6-8' },
        { exerciseId: 'upright_row', sets: 4, reps: '6-8' },

        // ACCESSORY
        { exerciseId: 'lateral_raise', sets: 4, reps: '12-15' },
        { exerciseId: 'reverse_fly', sets: 3, reps: '12-15' }
      ]
    },

    // ================= BACK =================
    {
      dayIndex: 2,
      title: 'Back Strength + Width',
      exercises: [

        // HEAVY
        { exerciseId: 'pull_ups', sets: 4, reps: '6-8 (add weight if needed)' },
        { exerciseId: 'barbell_row', sets: 4, reps: '6-8' },

        // ACCESSORY
        { exerciseId: 'seated_row_wide_grip', sets: 3, reps: '10-12' },
        { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '12-15' }
      ]
    },

    // ================= LEGS =================
    {
      dayIndex: 3,
      title: 'Lower Body Strength Emphasis',
      exercises: [

        // HEAVY
        { exerciseId: 'back_squat', sets: 4, reps: '6-8' },
        { exerciseId: 'rdl', sets: 4, reps: '6-8' },

        // ACCESSORY
        { exerciseId: 'leg_press', sets: 3, reps: '10-12' },
        { exerciseId: 'quad_extension', sets: 3, reps: '12-15' }
      ]
    },

    // ================= CHEST =================
    {
      dayIndex: 4,
      title: 'Chest Strength + Pump',
      exercises: [

        // HEAVY
        { exerciseId: 'bench_press', sets: 4, reps: '6-8' },
        { exerciseId: 'incline_db_press', sets: 4, reps: '6-8' },

        // ACCESSORY
        { exerciseId: 'chest_fly', sets: 3, reps: '12-15' },
        { exerciseId: 'lateral_raise', sets: 3, reps: '12-15' }
      ]
    },

    { dayIndex: 5, title: 'Long Run' },
    { dayIndex: 6, title: 'Recovery' },
    { dayIndex: 7, title: 'Rest' }
  ]
}
]
}
];



export const MOCK_PROGRAMS: Program[] = [
  {
    id: '2',
    name: 'Max Hypertrophy',
    category: 'Hypertrophy',
    description: 'Scientifically designed for maximum muscle growth.',
    duration: '8 Weeks',
    difficulty: 'MASS',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&h=300&auto=format&fit=crop',
    baseWeightGoalKg: 85
  },
  {
    id: '3',
    name: 'Engine Builder',
    category: 'Conditioning',
    description: 'Improve your work capacity and metabolic health.',
    duration: '6 Weeks',
    difficulty: 'CONDITIONING',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&h=300&auto=format&fit=crop',
    baseWeightGoalKg: 70
  },
  {
    id: '4',
    name: 'Elite Strength V3',
    category: 'Strength',
    description: 'Peaking protocol for experienced lifters.',
    duration: '16 Weeks',
    difficulty: 'ADVANCED',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&h=300&auto=format&fit=crop',
    baseWeightGoalKg: 140
  }
];


export const MOCK_PERFORMANCE: PerformanceHistory = {
  bench: [
    { date: 'W1', weightKg: 80 }, { date: 'W2', weightKg: 82.5 }, { date: 'W3', weightKg: 85 }, 
    { date: 'W4', weightKg: 85 }, { date: 'W5', weightKg: 87.5 }, { date: 'W6', weightKg: 90 },
    { date: 'W7', weightKg: 92.5 }, { date: 'W8', weightKg: 95 }
  ],
  squat: [
    { date: 'W1', weightKg: 120 }, { date: 'W2', weightKg: 125 }, { date: 'W3', weightKg: 130 }, 
    { date: 'W4', weightKg: 130 }, { date: 'W5', weightKg: 135 }, { date: 'W6', weightKg: 140 },
    { date: 'W7', weightKg: 145 }, { date: 'W8', weightKg: 150 }
  ],
  deadlift: [
    { date: 'W1', weightKg: 140 }, { date: 'W2', weightKg: 145 }, { date: 'W3', weightKg: 150 }, 
    { date: 'W4', weightKg: 150 }, { date: 'W5', weightKg: 160 }, { date: 'W6', weightKg: 170 },
    { date: 'W7', weightKg: 175 }, { date: 'W8', weightKg: 180 }
  ],
  ohp: [
    { date: 'W1', weightKg: 50 }, { date: 'W2', weightKg: 52.5 }, { date: 'W3', weightKg: 55 }, 
    { date: 'W4', weightKg: 55 }, { date: 'W5', weightKg: 57.5 }, { date: 'W6', weightKg: 60 },
    { date: 'W7', weightKg: 62.5 }, { date: 'W8', weightKg: 65 }
  ],
  cardio: {
    longestRunKm: 12.4,
    bestPaceMinPerKm: "4:32",
    weeklyDistanceKm: 34.2,
    heartRateAvg: 142
  }
};

