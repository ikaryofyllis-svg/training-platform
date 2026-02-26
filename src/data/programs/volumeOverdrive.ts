import { WorkoutPlan } from "../../types";
export const volumeOverdrive: WorkoutPlan = {

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
      blocks: [
        {
          type: "cardio",
          cardio: {
            mode: "interval",
            intervals: "Treadmill Intervals"
          }
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'shoulder_press_machine', sets: 4, reps: '10-12' }
          ]
        },
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'lateral_raise', sets: 4, reps: '12-15' },
            { exerciseId: 'reverse_fly', sets: 4, reps: '12-15' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'upright_row', sets: 3, reps: '12' }
          ]
        }
      ]
    },

    {
      dayIndex: 2,
      title: 'Back + Arms',
      blocks: [
        {
          type: "single",
          exercises: [
            { exerciseId: "lat_pulldown", sets: 3, reps: "10" }
          ]
        },
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: "seated_row", sets: 3, reps: "10" },
            { exerciseId: "straight_arm_pulldown", sets: 3, reps: "10" }
          ]
        }
      ]
    },

    {
      dayIndex: 3,
      title: 'Lower Body Volume',
      blocks: [
        {
          type: "single",
          exercises: [
            { exerciseId: 'back_squat', sets: 4, reps: '10' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'rdl', sets: 4, reps: '10' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'walking_lunges', sets: 3, reps: '12' }
          ]
        },
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'quad_extension', sets: 3, reps: '15' },
            { exerciseId: 'hamstring_curl', sets: 3, reps: '15' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'calf_raise_machine', sets: 4, reps: '15' }
          ]
        }
      ]
    },

    {
      dayIndex: 4,
      title: 'Chest + Upper Volume',
      blocks: [
        {
          type: "single",
          exercises: [
            { exerciseId: 'bench_press', sets: 4, reps: '8-10' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'incline_db_press', sets: 3, reps: '10-12' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'chest_fly', sets: 3, reps: '12-15' }
          ]
        },
        {
          type: "single",
          exercises: [
            { exerciseId: 'lateral_raise', sets: 3, reps: '15' }
          ]
        }
      ]
    },

    {
      dayIndex: 5,
      title: 'Long Run',
      blocks: [
        {
          type: "cardio",
          cardio: {
            mode: "steady",
            durationMinutes: 60
          }
        }
      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

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
          blocks: [
            {
              type: "cardio",
              cardio: { mode: "interval", intervals: "Treadmill Intervals" }
            },
            {
              type: "single",
              exercises: [
                { exerciseId: 'shoulder_press_machine', sets: 5, reps: '8-10' }
              ]
            },
            {
              type: "superset",
              label: "A",
              exercises: [
                { exerciseId: 'lateral_raise', sets: 4, reps: '12' },
                { exerciseId: 'reverse_fly', sets: 4, reps: '12' }
              ]
            },
            {
              type: "single",
              exercises: [
                { exerciseId: 'face_pull', sets: 3, reps: '15' }
              ]
            }
          ]
        },

        {
          dayIndex: 2,
          title: 'Back Density + Arms',
          blocks: [
            {
              type: "single",
              exercises: [
                { exerciseId: 'pull_ups', sets: 3, reps: 'AMRAP' }
              ]
            },
            {
              type: "single",
              exercises: [
                { exerciseId: 'lat_pulldown', sets: 3, reps: '8-10' }
              ]
            },
            {
              type: "single",
              exercises: [
                { exerciseId: 'seated_row', sets: 4, reps: '10' }
              ]
            },
            {
              type: "single",
              exercises: [
                { exerciseId: 'single_arm_row', sets: 3, reps: '12' }
              ]
            },
            {
              type: "single",
              exercises: [
                { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '12-15' }
              ]
            },
            {
              type: "single",
              exercises: [
                { exerciseId: 'bicep_curl', sets: 4, reps: '10' }
              ]
            }
          ]
        },

        // Lower Body Expansion
        {
          dayIndex: 3,
          title: 'Lower Body Expansion',
          blocks: [
            { type: "single", exercises: [{ exerciseId: 'back_squat', sets: 5, reps: '8-10' }] },
            { type: "single", exercises: [{ exerciseId: 'leg_press', sets: 4, reps: '12' }] },
            { type: "single", exercises: [{ exerciseId: 'rdl', sets: 4, reps: '8-10' }] },
            { type: "single", exercises: [{ exerciseId: 'walking_lunges', sets: 3, reps: '12' }] },
            { type: "superset", label: "A", exercises: [
                { exerciseId: 'quad_extension', sets: 3, reps: '15' },
                { exerciseId: 'hamstring_curl', sets: 3, reps: '15' }
            ]},
            { type: "single", exercises: [{ exerciseId: 'calf_raise_machine', sets: 4, reps: '15' }] }
          ]
        },

        {
          dayIndex: 4,
          title: 'Chest + Upper Pump',
          blocks: [
            { type: "single", exercises: [{ exerciseId: 'bench_press', sets: 4, reps: '8' }] },
            { type: "single", exercises: [{ exerciseId: 'incline_db_press', sets: 4, reps: '10' }] },
            { type: "single", exercises: [{ exerciseId: 'chest_fly', sets: 4, reps: '12-15' }] },
            { type: "single", exercises: [{ exerciseId: 'lateral_raise', sets: 4, reps: '15' }] }
          ]
        },

        { dayIndex: 5, title: 'Long Run', blocks: [{ type: "cardio", cardio: { mode: "steady", durationMinutes: 60 } }] },
        { dayIndex: 6, title: 'Recovery', blocks: [] },
        { dayIndex: 7, title: 'Rest', blocks: [] }

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
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'shoulder_press_machine', sets: 3, reps: '8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'lateral_raise', sets: 2, reps: '12' }
        ]}
      ]
    },

    {
      dayIndex: 2,
      title: 'Back (Deload)',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'pull_ups', sets: 2, reps: 'AMRAP (stop early)' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'lat_pulldown', sets: 2, reps: '8' }
        ]}
      ]
    },

    {
      dayIndex: 3,
      title: 'Lower (Deload)',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'back_squat', sets: 3, reps: '6-8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'rdl', sets: 2, reps: '8' }
        ]}
      ]
    },

    {
      dayIndex: 4,
      title: 'Chest (Deload)',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'bench_press', sets: 3, reps: '6-8' }
        ]}
      ]
    },

    {
      dayIndex: 5,
      title: 'Long Run (Easy Zone 2)',
      blocks: [
        { type: "cardio", cardio: { mode: "steady", durationMinutes: 45 } }
      ]
    },

    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

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
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'shoulder_press_machine', sets: 4, reps: '6-8' }
        ]},
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'lateral_raise', sets: 4, reps: '12' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '12' }
          ]
        },
        { type: "single", exercises: [
          { exerciseId: 'upright_row', sets: 3, reps: '10' }
        ]}
      ]
    },

    {
      dayIndex: 2,
      title: 'Back Density 2.0',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'pull_ups', sets: 4, reps: 'AMRAP' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'barbell_row', sets: 4, reps: '6-8' }
        ]},
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'seated_row_wide_grip', sets: 3, reps: '10-12' },
            { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '12-15' }
          ]
        },
        { type: "single", exercises: [
          { exerciseId: 'bicep_curl', sets: 3, reps: '10' }
        ]}
      ]
    },

    {
      dayIndex: 3,
      title: 'Leg Volume Intensified',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'back_squat', sets: 4, reps: '6-8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'leg_press', sets: 4, reps: '10' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'rdl', sets: 4, reps: '8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'walking_lunges', sets: 3, reps: '12' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'quad_extension', sets: 3, reps: '15' }
        ]}
      ]
    },

    {
      dayIndex: 4,
      title: 'Chest + Upper',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'bench_press', sets: 4, reps: '6-8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'incline_db_press', sets: 4, reps: '8-10' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'chest_fly', sets: 3, reps: '12-15' }
        ]}
      ]
    },

    { dayIndex: 5, title: 'Long Run', blocks: [{ type: "cardio", cardio: { mode: "steady", durationMinutes: 60 } }] },
    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

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
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'shoulder_press_machine', sets: 3, reps: '6-8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'lateral_raise', sets: 2, reps: '12' }
        ]}
      ]
    },

    {
      dayIndex: 2,
      title: 'Back (Deload)',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'barbell_row', sets: 3, reps: '6-8' }
        ]}
      ]
    },

    {
      dayIndex: 3,
      title: 'Lower (Deload)',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'back_squat', sets: 3, reps: '5-6' }
        ]}
      ]
    },

    {
      dayIndex: 4,
      title: 'Chest (Deload)',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'bench_press', sets: 3, reps: '5-6' }
        ]}
      ]
    },

    { dayIndex: 5, title: 'Long Run (Easy)', blocks: [{ type: "cardio", cardio: { mode: "steady", durationMinutes: 40 } }] },
    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
},
  {
  id: 'phase6',
  name: 'Strength Conversion',
  startWeek: 14,
  endWeek: 16,
  weeklyStructure: [

    {
      dayIndex: 1,
      title: 'Shoulder Strength Focus',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'shoulder_press_machine', sets: 4, reps: '6-8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'upright_row', sets: 4, reps: '6-8' }
        ]},
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'lateral_raise', sets: 4, reps: '12-15' },
            { exerciseId: 'reverse_fly', sets: 3, reps: '12-15' }
          ]
        }
      ]
    },

    {
      dayIndex: 2,
      title: 'Back Strength + Width',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'pull_ups', sets: 4, reps: '6-8 (add weight if needed)' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'barbell_row', sets: 4, reps: '6-8' }
        ]},
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'seated_row_wide_grip', sets: 3, reps: '10-12' },
            { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '12-15' }
          ]
        }
      ]
    },

    {
      dayIndex: 3,
      title: 'Lower Body Strength Emphasis',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'back_squat', sets: 4, reps: '6-8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'rdl', sets: 4, reps: '6-8' }
        ]},
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'leg_press', sets: 3, reps: '10-12' },
            { exerciseId: 'quad_extension', sets: 3, reps: '12-15' }
          ]
        }
      ]
    },

    {
      dayIndex: 4,
      title: 'Chest Strength + Pump',
      blocks: [
        { type: "single", exercises: [
          { exerciseId: 'bench_press', sets: 4, reps: '6-8' }
        ]},
        { type: "single", exercises: [
          { exerciseId: 'incline_db_press', sets: 4, reps: '6-8' }
        ]},
        {
          type: "superset",
          label: "A",
          exercises: [
            { exerciseId: 'chest_fly', sets: 3, reps: '12-15' },
            { exerciseId: 'lateral_raise', sets: 3, reps: '12-15' }
          ]
        }
      ]
    },

    { dayIndex: 5, title: 'Long Run', blocks: [{ type: "cardio", cardio: { mode: "steady", durationMinutes: 60 } }] },
    { dayIndex: 6, title: 'Recovery', blocks: [] },
    { dayIndex: 7, title: 'Rest', blocks: [] }

  ]
}
  ]   // <-- closes phases array
};
