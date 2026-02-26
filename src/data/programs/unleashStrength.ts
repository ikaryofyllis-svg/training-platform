import { WorkoutPlan } from "../../types";
export const unleashStrength: WorkoutPlan = {
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
};