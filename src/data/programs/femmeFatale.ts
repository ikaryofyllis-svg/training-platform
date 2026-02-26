import { WorkoutPlan } from "../../types";

export const femmeFatale: WorkoutPlan = {
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
          title: "Intervals + Glutes",
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
                { exerciseId: "hip_thrust", sets: 3, reps: "10" }
              ]
            },
            {
              type: "superset",
              label: "A",
              exercises: [
                { exerciseId: "bulgarian_split", sets: 3, reps: "10" },
                { exerciseId: "cable_kickback", sets: 3, reps: "15" }
              ]
            },
            {
              type: "single",
              exercises: [
                { exerciseId: "glute_bridge_hold", sets: 3, reps: "30s" }
              ]
            }
          ]
        },
        {
          dayIndex: 2,
          title: "Back + Triceps",
          blocks: [
            {
              type: "single",
               exercises: [
              { exerciseId: "pull_ups", sets: 3, reps: "AMRAP" }
              ]
           },
            {
             type: "superset",
             label: "A",
            exercises: [
        { exerciseId: "seated_row", sets: 3, reps: "10" },
        { exerciseId: "straight_arm_pulldown", sets: 3, reps: "10" }
      ]
    },
    {
      type: "superset",
      label: "B",
      exercises: [
        { exerciseId: "tricep_pushdown", sets: 3, reps: "10" },
        { exerciseId: "overhead_tricep_extension", sets: 3, reps: "10" }
      ]
    }
  ]
},
        {
  dayIndex: 3,
  title: "Lower Body Strength",
  blocks: [
    {
      type: "single",
      exercises: [
        { exerciseId: "back_squat", sets: 3, reps: "8-10" }
      ]
    },
    {
      type: "single",
      exercises: [
        { exerciseId: "rdl", sets: 3, reps: "8" }
      ]
    },
    {
      type: "superset",
      label: "A",
      exercises: [
        { exerciseId: "hamstring_curl", sets: 3, reps: "12" },
        { exerciseId: "step_ups", sets: 3, reps: "10" }
      ]
    }
  ]
},
        {
  dayIndex: 4,
  title: "Chest + Shoulders",
  blocks: [
    {
      type: "single",
      exercises: [
        { exerciseId: "bench_press", sets: 3, reps: "8-10" }
      ]
    },
    {
      type: "single",
      exercises: [
        { exerciseId: "incline_db_press", sets: 3, reps: "10" }
      ]
    },
    {
      type: "superset",
      label: "A",
      exercises: [
        { exerciseId: "shoulder_press_machine", sets: 3, reps: "10" },
        { exerciseId: "lateral_raise", sets: 3, reps: "12" }
      ]
    },
    {
      type: "single",
      exercises: [
        { exerciseId: "reverse_fly", sets: 3, reps: "12" }
      ]
    }
  ]
},
        {
  dayIndex: 5,
  title: "Long Run",
  blocks: [
    {
      type: "cardio",
      cardio: {
        mode: "steady",
        durationMinutes: 60
      }
    }
  ]
}
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
  
};
   