import { totalEngine } from "./src/data/programs/totalEngine.ts";
import { EXERCISE_LIBRARY } from "./src/data/exercises/exerciseLibrary.ts";

const existingIds = new Set(EXERCISE_LIBRARY.map(e => e.id));
const usedIds = new Set<string>();

totalEngine.phases.forEach(phase => {
  phase.weeklyStructure.forEach(day => {
    day.blocks?.forEach(block => {
      block.exercises?.forEach(ex => {
        usedIds.add(ex.exerciseId);
      });
    });
  });
});

const missing: string[] = [];

usedIds.forEach(id => {
  if (!existingIds.has(id)) {
    missing.push(id);
  }
});

if (missing.length === 0) {
  console.log("✅ All exercises exist in library.");
} else {
  console.log("❌ Missing Exercises:");
  console.log(missing);

  console.log("\n📦 Suggested Template Entries:\n");

  missing.forEach(id => {
    console.log(`
{
  id: "${id}",
  name: "${id.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}",
  muscleGroup: "power",
  reps: "",
  sets: 0,
  image: "",
  tips: []
},
`);
  });
}