import { WorkoutPlan } from "../../types";

export const totalEngine: WorkoutPlan = {

  id: 'total-engine',
  name: 'Total Engine',
  durationWeeks: 12,
  goalType: 'Total Body Strength + Power',
  category: ['strength', 'power', 'conditioning'],
  difficulty: 'Intermediate',
  description: 'Total-body strength and power system rotating emphasis across lifting days while maintaining aerobic development and structured recovery.',
  image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=400&auto=format&fit=crop',

  features: [
    {
      title: 'Rotating Power Focus',
      subtitle: 'Full Body — Uneven Emphasis',
      icon: 'fitness_center'
    },
    {
      title: 'Engine Development',
      subtitle: 'Recovery + Aerobic Base',
      icon: 'bolt'
    }
  ],

  phases: [

    // ================= PHASE 1 =================
{
  id: 'phase1',
  name: 'Power Awakening',
  startWeek: 1,
  endWeek: 2,
  weeklyStructure: [

    // ================= DAY 1 =================
    {
      dayIndex: 1,
      title: 'Push + Squat Emphasis',
      blocks: [

        // Strength 6RM
        {
          type: "single",
          exercises: [
            { exerciseId: 'bench_press', sets: 4, reps: '6RM' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'tricep_pushdown', sets: 4, reps: '6RM' }
          ]
        },

        // Volume 4x12
        {
          type: "single",
          exercises: [
            { exerciseId: 'back_squat', sets: 4, reps: '12' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'hip_thrust', sets: 4, reps: '12' }
          ]
        }
      ]
    },

    // ================= DAY 2 =================
    {
      dayIndex: 2,
      title: 'Regeneration Circuit',
      blocks: [
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'air_bike', sets: 3, reps: '2min moderate' },
            { exerciseId: 'bodyweight_squat', sets: 3, reps: '15' }
          ]
        },
        {
          type: "superset",
          label: "B",
          exercises: [
            { exerciseId: 'band_pull_apart', sets: 3, reps: '20' },
            { exerciseId: 'plank_hold', sets: 3, reps: '45s' }
          ]
        }
      ]
    },

    // ================= DAY 3 =================
    {
      dayIndex: 3,
      title: 'Pull + Overhead Emphasis',
      blocks: [

        // Strength 4x6-8
        {
          type: "single",
          exercises: [
            { exerciseId: 'chin_ups', sets: 4, reps: '6-8' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'dumbbell_high_pull', sets: 4, reps: '6-8' }
          ]
        },

        // Volume 4x12
        {
          type: "single",
          exercises: [
            { exerciseId: 'overhead_press', sets: 4, reps: '12' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'dips', sets: 4, reps: '12' }
          ]
        }
      ]
    },

    // ================= DAY 4 =================
    {
      dayIndex: 4,
      title: 'Long Steady Cardio',
      blocks: [
        {
          type: "cardio",
          cardio: {
            mode: "steady",
            durationMinutes: 45
          }
        }
      ]
    },

    // ================= DAY 5 =================
    {
      dayIndex: 5,
      title: 'Hinge + Arm Emphasis',
      blocks: [

        // Strength 4x6-8
        {
          type: "single",
          exercises: [
            { exerciseId: 'deadlift', sets: 4, reps: '6-8' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'walking_lunges', sets: 4, reps: '6-8 / leg' }
          ]
        },

        // Volume 4x12
        {
          type: "single",
          exercises: [
            { exerciseId: 'barbell_row', sets: 4, reps: '12' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'barbell_curl', sets: 4, reps: '12' }
          ]
        }
      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},

    // ================= PHASE 2 =================
  {
  id: 'phase2a',
  name: 'Power Gathering A',
  startWeek: 3,
  endWeek: 3,
  weeklyStructure: [

    // DAY 1
    {
      dayIndex: 1,
      title: 'Full Body Strength (A)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'deadlift', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'bench_press', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'chin_ups', sets: 4, reps: '8' }] },

        { type: "single", exercises: [{ exerciseId: 'barbell_reverse_lunge', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'dumbbell_tricep_extension', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'dumbbell_high_pull', sets: 3, reps: '12' }] }
      ]
    },

    // DAY 2
    {
      dayIndex: 2,
      title: 'Regeneration Circuit',
      blocks: [
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'air_bike', sets: 3, reps: '3min moderate' },
            { exerciseId: 'band_pull_apart', sets: 3, reps: '20' }
          ]
        }
      ]
    },

    // DAY 3
    {
      dayIndex: 3,
      title: 'Power Day',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'box_jump', sets: 3, reps: '3-5 explosive' }] },
        { type: "single", exercises: [{ exerciseId: 'db_hang_clean', sets: 3, reps: '8 @60% RM' }] },
        { type: "single", exercises: [{ exerciseId: 'dead_row', sets: 3, reps: '8' }] }
      ]
    },

    // DAY 4
    {
      dayIndex: 4,
      title: 'Long Steady Cardio',
      blocks: [
        { type: "cardio", cardio: { mode: "steady", durationMinutes: 50 } }
      ]
    },

    // DAY 5
    {
      dayIndex: 5,
      title: 'Full Body Volume (A)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'back_squat', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'overhead_press', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'barbell_row', sets: 4, reps: '8' }] },

        { type: "single", exercises: [{ exerciseId: 'hip_thrust', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'dips', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'barbell_curl', sets: 3, reps: '12' }] }
      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},
{
  id: 'phase2b',
  name: 'Power Gathering B',
  startWeek: 4,
  endWeek: 4,
  weeklyStructure: [

    // DAY 1
    {
      dayIndex: 1,
      title: 'Full Body Strength (B)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'barbell_reverse_lunge', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'dumbbell_tricep_extension', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'dumbbell_high_pull', sets: 4, reps: '8' }] },

        { type: "single", exercises: [{ exerciseId: 'deadlift', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'bench_press', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'chin_ups', sets: 3, reps: '12' }] }
      ]
    },

    // DAY 2
    {
      dayIndex: 2,
      title: 'Regeneration Circuit',
      blocks: [
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'row_machine', sets: 3, reps: '3min moderate' },
            { exerciseId: 'plank_hold', sets: 3, reps: '45s' }
          ]
        }
      ]
    },

    // DAY 3
    {
      dayIndex: 3,
      title: 'Power Day (70% RM)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'box_jump', sets: 4, reps: '3-5 explosive' }] },
        { type: "single", exercises: [{ exerciseId: 'db_hang_clean', sets: 4, reps: '6 @70% RM' }] },
        { type: "single", exercises: [{ exerciseId: 'db_dead_row', sets: 4, reps: '6 explosive' }] }
      ]
    },

        // DAY 4
        {
        dayIndex: 4,
        title: 'Long Steady Cardio',
        blocks: [
            { type: "cardio", cardio: { mode: "steady", durationMinutes: 55 } }
        ]
        },

        // DAY 5
        {
        dayIndex: 5,
        title: 'Full Body Volume (B)',
        blocks: [
            { type: "single", exercises: [{ exerciseId: 'hip_thrust', sets: 4, reps: '8' }] },
            { type: "single", exercises: [{ exerciseId: 'dips', sets: 4, reps: '8' }] },
            { type: "single", exercises: [{ exerciseId: 'barbell_curl', sets: 4, reps: '8' }] },

            { type: "single", exercises: [{ exerciseId: 'back_squat', sets: 3, reps: '12' }] },
            { type: "single", exercises: [{ exerciseId: 'overhead_press', sets: 3, reps: '12' }] },
            { type: "single", exercises: [{ exerciseId: 'barbell_row', sets: 3, reps: '12' }] }
        ]
        },

        { dayIndex: 6, title: 'Recovery', blocks: [] },
        { dayIndex: 7, title: 'Rest', blocks: [] }

    ]
    },
    {
    id: 'phase2a2',
    name: 'Power Gathering A',
    startWeek: 5,
    endWeek: 5,
    weeklyStructure: [

        // DAY 1
        {
        dayIndex: 1,
        title: 'Full Body Strength (A)',
        blocks: [
            { type: "single", exercises: [{ exerciseId: 'deadlift', sets: 4, reps: '8' }] },
            { type: "single", exercises: [{ exerciseId: 'bench_press', sets: 4, reps: '8' }] },
            { type: "single", exercises: [{ exerciseId: 'chin_ups', sets: 4, reps: '8' }] },

            { type: "single", exercises: [{ exerciseId: 'barbell_reverse_lunge', sets: 3, reps: '12' }] },
            { type: "single", exercises: [{ exerciseId: 'dumbbell_tricep_extension', sets: 3, reps: '12' }] },
            { type: "single", exercises: [{ exerciseId: 'dumbbell_high_pull', sets: 3, reps: '12' }] }
        ]
        },

        // DAY 2
        {
        dayIndex: 2,
        title: 'Regeneration Circuit',
        blocks: [
            {
            type: "superset",
            label: "A",
            exercises: [
                { exerciseId: 'air_bike', sets: 3, reps: '3min moderate' },
                { exerciseId: 'band_pull_apart', sets: 3, reps: '20' }
            ]
            }
        ]
        },

        // DAY 3
        {
        dayIndex: 3,
        title: 'Power Day',
        blocks: [
            { type: "single", exercises: [{ exerciseId: 'box_jump', sets: 3, reps: '3-5 explosive' }] },
            { type: "single", exercises: [{ exerciseId: 'db_hang_clean', sets: 3, reps: '8 @60% RM' }] },
            { type: "single", exercises: [{ exerciseId: 'dead_row', sets: 3, reps: '8' }] }
        ]
        },

        // DAY 4
        {
        dayIndex: 4,
        title: 'Long Steady Cardio',
        blocks: [
            { type: "cardio", cardio: { mode: "steady", durationMinutes: 50 } }
        ]
    },

    // DAY 5
    {
      dayIndex: 5,
      title: 'Full Body Volume (A)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'back_squat', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'overhead_press', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'barbell_row', sets: 4, reps: '8' }] },

        { type: "single", exercises: [{ exerciseId: 'hip_thrust', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'dips', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'barbell_curl', sets: 3, reps: '12' }] }
      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},
{
  id: 'phase2b2',
  name: 'Power Gathering B',
  startWeek: 6,
  endWeek: 6,
  weeklyStructure: [

    // DAY 1
    {
      dayIndex: 1,
      title: 'Full Body Strength (B)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'barbell_reverse_lunge', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'dumbbell_tricep_extension', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'dumbbell_high_pull', sets: 4, reps: '8' }] },

        { type: "single", exercises: [{ exerciseId: 'deadlift', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'bench_press', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'chin_ups', sets: 3, reps: '12' }] }
      ]
    },

    // DAY 2
    {
      dayIndex: 2,
      title: 'Regeneration Circuit',
      blocks: [
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'row_machine', sets: 3, reps: '3min moderate' },
            { exerciseId: 'plank_hold', sets: 3, reps: '45s' }
          ]
        }
      ]
    },

    // DAY 3
    {
      dayIndex: 3,
      title: 'Power Day (70% RM)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'box_jump', sets: 4, reps: '3-5 explosive' }] },
        { type: "single", exercises: [{ exerciseId: 'db_hang_clean', sets: 4, reps: '6 @70% RM' }] },
        { type: "single", exercises: [{ exerciseId: 'db_dead_row', sets: 4, reps: '6 explosive' }] }
      ]
    },

    // DAY 4
    {
      dayIndex: 4,
      title: 'Long Steady Cardio',
      blocks: [
        { type: "cardio", cardio: { mode: "steady", durationMinutes: 55 } }
      ]
    },

    // DAY 5
    {
      dayIndex: 5,
      title: 'Full Body Volume (B)',
      blocks: [
        { type: "single", exercises: [{ exerciseId: 'hip_thrust', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'dips', sets: 4, reps: '8' }] },
        { type: "single", exercises: [{ exerciseId: 'barbell_curl', sets: 4, reps: '8' }] },

        { type: "single", exercises: [{ exerciseId: 'back_squat', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'overhead_press', sets: 3, reps: '12' }] },
        { type: "single", exercises: [{ exerciseId: 'barbell_row', sets: 3, reps: '12' }] }
      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},

    // ================= PHASE 3 =================
    {
  id: 'phase3',
  name: 'Power Unleashed',
  startWeek: 7,
  endWeek: 9,
  weeklyStructure: [

    // ================= DAY 1 =================
    {
      dayIndex: 1,
      title: 'Strength + Density (Hinge Focus)',
      blocks: [

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'deadlift',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'close_grip_bench_press',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'barbell_row',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'barbell_thruster',
              sets: 3,
              reps: '3-5 explosive'
            }
          ]
        }

      ]
    },

    // ================= DAY 2 =================
    {
      dayIndex: 2,
      title: 'Regeneration',
      blocks: [
        {
          type: "cardio",
          cardio: { mode: "steady", durationMinutes: 25 }
        }
      ]
    },

    // ================= DAY 3 =================
    {
      dayIndex: 3,
      title: 'Strength + Density (Squat Focus)',
      blocks: [

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'back_squat',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'overhead_press',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'barbell_high_pull',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'ghr',
              sets: 3,
              reps: '6-8 explosive'
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'push_ups',
              sets: 3,
              reps: 'AMRAP explosive'
            }
          ]
        }

      ]
    },

    // ================= DAY 4 =================
    {
      dayIndex: 4,
      title: 'Long Steady Cardio',
      blocks: [
        {
          type: "cardio",
          cardio: { mode: "steady", durationMinutes: 45 }
        }
      ]
    },

    // ================= DAY 5 =================
    {
      dayIndex: 5,
      title: 'Strength + Density (Hip Focus)',
      blocks: [

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'hip_thrust',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'dips',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'chin_ups',
              sets: 4,
              repScheme: ['4', '8', '16', 'AMRAP 2min']
            }
          ]
        },

        {
          type: "single",
          exercises: [
            {
              exerciseId: 'db_hang_clean',
              sets: 3,
              reps: '3-5 explosive'
            }
          ]
        }

      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},
    

    // ================= PHASE 4 =================
    {
  id: 'phase4a',
  name: 'Total Power A',
  startWeek: 10,
  endWeek: 10,
  weeklyStructure: [

    // ================= DAY 1 =================
    {
      dayIndex: 1,
      title: 'Strength → Size → Respeed',
      blocks: [

        // Strength Superset (4x6RM)
        {
          type: "superset",
          label: "Strength A",
          exercises: [
            { exerciseId: 'db_bench_press', sets: 4, reps: '6RM' },
            { exerciseId: 'db_row', sets: 4, reps: '6RM' },
            { exerciseId: 'deadlift', sets: 4, reps: '6RM' }
          ]
        },

        // Size Superset (2x12)
        {
          type: "superset",
          label: "Size",
          exercises: [
            { exerciseId: 'barbell_overhead_press', sets: 2, reps: '12' },
            { exerciseId: 'barbell_lunges', sets: 2, reps: '12' },
            { exerciseId: 'lateral_raise', sets: 2, reps: '12' }
          ]
        },

        // Respeed
        {
          type: "superset",
          label: "Respeed",
          exercises: [
            { exerciseId: 'assisted_dips', sets: 2, reps: '8 explosive' },
            { exerciseId: 'face_pull', sets: 2, reps: '8 explosive' },
            { exerciseId: 'kettlebell_swing', sets: 2, reps: '8 explosive' }
          ]
        }

      ]
    },

    // ================= DAY 2 =================
    { dayIndex: 2, title: 'Recovery', blocks: [] },

    // ================= DAY 3 =================
    {
      dayIndex: 3,
      title: 'Neuro → Strength → Size',
      blocks: [

        // Neuro Activator
        {
          type: "superset",
          label: "Neuro",
          exercises: [
            { exerciseId: 'assisted_dips', sets: 2, reps: '8 explosive' },
            { exerciseId: 'face_pull', sets: 2, reps: '8 explosive' },
            { exerciseId: 'hip_thrust', sets: 2, reps: '8 explosive' }
          ]
        },

        // Strength
        {
          type: "superset",
          label: "Strength",
          exercises: [
            { exerciseId: 'db_bench_press', sets: 4, reps: '6RM' },
            { exerciseId: 'db_row', sets: 4, reps: '6RM' },
            { exerciseId: 'deadlift', sets: 4, reps: '6RM' }
          ]
        },

        // Size
        {
          type: "superset",
          label: "Size",
          exercises: [
            { exerciseId: 'barbell_overhead_press', sets: 3, reps: '12' },
            { exerciseId: 'alternate_lunges', sets: 3, reps: '12' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12' }
          ]
        }

      ]
    },

    // ================= DAY 4 =================
    {
      dayIndex: 4,
      title: 'Long Steady Cardio',
      blocks: [
        { type: "cardio", cardio: { mode: "steady", durationMinutes: 45 } }
      ]
    },

    // ================= DAY 5 =================
    {
      dayIndex: 5,
      title: 'P.A.P Activation',
      blocks: [

        {
          type: "superset",
          label: "PAP 1",
          exercises: [
            { exerciseId: 'assisted_dips', sets: 4, reps: '6 explosive' },
            { exerciseId: 'db_bench_press', sets: 4, reps: '6RM' }
          ]
        },

        {
          type: "superset",
          label: "PAP 2",
          exercises: [
            { exerciseId: 'band_face_pull', sets: 4, reps: '6 explosive' },
            { exerciseId: 'barbell_row', sets: 4, reps: '6RM' }
          ]
        },

        {
          type: "superset",
          label: "PAP 3",
          exercises: [
            { exerciseId: 'kettlebell_swing', sets: 4, reps: '6 explosive' },
            { exerciseId: 'deadlift', sets: 4, reps: '6RM' }
          ]
        },

        {
          type: "superset",
          label: "Size Circuit",
          exercises: [
            { exerciseId: 'barbell_overhead_press', sets: 3, reps: '12' },
            { exerciseId: 'lunges', sets: 3, reps: '12' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12' }
          ]
        }

      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},
{
  id: 'phase4b',
  name: 'Total Power B',
  startWeek: 11,
  endWeek: 11,
  weeklyStructure: [

    // ================= DAY 1 =================
    {
      dayIndex: 1,
      title: 'Strength → Size → Respeed (B)',
      blocks: [

        // Strength
        {
          type: "superset",
          label: "Strength",
          exercises: [
            { exerciseId: 'db_overhead_press', sets: 4, reps: '6RM' },
            { exerciseId: 'dumbbell_high_pull', sets: 4, reps: '6RM' },
            { exerciseId: 'back_squat', sets: 4, reps: '6RM' }
          ]
        },

        // Size
        {
          type: "superset",
          label: "Size",
          exercises: [
            { exerciseId: 'chest_fly', sets: 3, reps: '12' },
            { exerciseId: 'incline_db_press', sets: 3, reps: '12' },
            { exerciseId: 'bulgarian_split', sets: 3, reps: '12' }
          ]
        },

        // Respeed
        {
          type: "superset",
          label: "Respeed",
          exercises: [
            { exerciseId: 'push_press', sets: 2, reps: '8 explosive' },
            { exerciseId: 'inverted_row', sets: 2, reps: '8 explosive' },
            { exerciseId: 'bodyweight_squat', sets: 2, reps: '8 explosive' }
          ]
        }

      ]
    },

    { dayIndex: 2, title: 'Recovery', blocks: [] },

    // ================= DAY 3 =================
    {
      dayIndex: 3,
      title: 'Neuro → Strength → Size (B)',
      blocks: [

        // Neuro
        {
          type: "superset",
          label: "Neuro",
          exercises: [
            { exerciseId: 'push_press', sets: 2, reps: '8 explosive' },
            { exerciseId: 'inverted_row', sets: 2, reps: '8 explosive' },
            { exerciseId: 'bodyweight_squat', sets: 2, reps: '8 explosive' }
          ]
        },

        // Strength
        {
          type: "superset",
          label: "Strength",
          exercises: [
            { exerciseId: 'db_overhead_press', sets: 4, reps: '6RM' },
            { exerciseId: 'dumbbell_high_pull', sets: 4, reps: '6RM' },
            { exerciseId: 'back_squat', sets: 4, reps: '6RM' }
          ]
        },

        // Size
        {
          type: "superset",
          label: "Size",
          exercises: [
            { exerciseId: 'chest_fly', sets: 3, reps: '12' },
            { exerciseId: 'incline_db_press', sets: 3, reps: '12' },
            { exerciseId: 'reverse_lunge', sets: 3, reps: '12' }
          ]
        }

      ]
    },
    { dayIndex: 4, title: 'Long Steady Cardio', blocks: [
      { type: "cardio", cardio: { mode: "steady", durationMinutes: 40 } }
    ]},

    // ================= DAY 5 =================
    {
      dayIndex: 5,
      title: 'P.A.P Activation (B)',
      blocks: [

        {
          type: "superset",
          label: "PAP 1",
          exercises: [
            { exerciseId: 'push_press', sets: 4, reps: '6 explosive' },
            { exerciseId: 'db_overhead_press', sets: 4, reps: '6RM' }
          ]
        },

        {
          type: "superset",
          label: "PAP 2",
          exercises: [
            { exerciseId: 'bodyweight_squat', sets: 4, reps: '6 explosive' },
            { exerciseId: 'back_squat', sets: 4, reps: '6RM' }
          ]
        },

        {
          type: "superset",
          label: "PAP 3",
          exercises: [
            { exerciseId: 'inverted_row', sets: 4, reps: '6 explosive' },
            { exerciseId: 'dumbbell_high_pull', sets: 4, reps: '6RM' }
          ]
        },

        {
          type: "superset",
          label: "Size Circuit",
          exercises: [
            { exerciseId: 'chest_fly', sets: 3, reps: '12' },
            { exerciseId: 'incline_db_press', sets: 3, reps: '12' },
            { exerciseId: 'reverse_lunge', sets: 3, reps: '12' }
          ]
        }

      ]
    },
    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},
{
  id: 'phase4c',
  name: 'Total Power C — Peak',
  startWeek: 12,
  endWeek: 12,
  weeklyStructure: [

    // ================= DAY 1 =================
    {
      dayIndex: 1,
      title: 'Strength → Size → Respeed (C)',
      blocks: [

        // Strength
        {
          type: "superset",
          label: "Strength",
          exercises: [
            { exerciseId: 'weighted_dips', sets: 4, reps: '6' },
            { exerciseId: 'weighted_pullups', sets: 4, reps: '6' },
            { exerciseId: 'rdl', sets: 4, reps: '6' }
          ]
        },

        // Size (to fatigue)
        {
          type: "superset",
          label: "Size",
          exercises: [
            { exerciseId: 'back_squat', sets: 3, reps: 'to failure' },
            { exerciseId: 'barbell_shrug', sets: 3, reps: 'to failure' },
            { exerciseId: 'overhead_press', sets: 3, reps: 'to failure' }
          ]
        },

        // Respeed
        {
          type: "superset",
          label: "Respeed",
          exercises: [
            { exerciseId: 'assisted_dips', sets: 2, reps: '8 explosive' },
            { exerciseId: 'face_pull', sets: 2, reps: '8 explosive' },
            { exerciseId: 'kettlebell_swing', sets: 2, reps: '8 explosive' }
          ]
        }

      ]
    },

    { dayIndex: 2, title: 'Recovery', blocks: [] },

    // ================= DAY 3 =================
    {
      dayIndex: 3,
      title: 'Neuro → Strength → Size (C)',
      blocks: [

        {
          type: "superset",
          label: "Neuro",
          exercises: [
            { exerciseId: 'assisted_dips', sets: 2, reps: '8 explosive' },
            { exerciseId: 'face_pull', sets: 2, reps: '8 explosive' },
            { exerciseId: 'kettlebell_swing', sets: 2, reps: '8 explosive' }
          ]
        },

        {
          type: "superset",
          label: "Strength",
          exercises: [
            { exerciseId: 'weighted_dips', sets: 4, reps: '6' },
            { exerciseId: 'weighted_pullups', sets: 4, reps: '6' },
            { exerciseId: 'rdl', sets: 4, reps: '6' }
          ]
        },

        {
          type: "superset",
          label: "Size",
          exercises: [
            { exerciseId: 'back_squat', sets: 3, reps: 'to failure' },
            { exerciseId: 'barbell_shrug', sets: 3, reps: 'to failure' },
            { exerciseId: 'overhead_press', sets: 3, reps: 'to failure' }
          ]
        }

      ]
    },
    { dayIndex: 4, title: 'Light Cardio', blocks: [
      { type: "cardio", cardio: { mode: "steady", durationMinutes: 30 } }
    ]},

    // ================= DAY 5 =================
    {
      dayIndex: 5,
      title: 'P.A.P Activation (C)',
      blocks: [

        {
          type: "superset",
          label: "PAP 1",
          exercises: [
            { exerciseId: 'assisted_dips', sets: 4, reps: '6 explosive' },
            { exerciseId: 'weighted_dips', sets: 4, reps: '6' }
          ]
        },

        {
          type: "superset",
          label: "PAP 2",
          exercises: [
            { exerciseId: 'face_pull', sets: 4, reps: '6 explosive' },
            { exerciseId: 'weighted_pullups', sets: 4, reps: '6' }
          ]
        },

        {
          type: "superset",
          label: "PAP 3",
          exercises: [
            { exerciseId: 'kettlebell_swing', sets: 4, reps: '6 explosive' },
            { exerciseId: 'rdl', sets: 4, reps: '6' }
          ]
        }

      ]
    },
    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},

  ]
};