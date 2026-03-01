console.log("Validator is running...");
const fs = require("fs");
const path = require("path");

// ---- CONFIG ----
const programFile = path.join(__dirname, "src/data/programs/totalEngine.ts");
const libraryFile = path.join(__dirname, "src/data/exercises/exerciseLibrary.ts");

// ---- READ FILES ----
const programContent = fs.readFileSync(programFile, "utf-8");
const libraryContent = fs.readFileSync(libraryFile, "utf-8");

// ---- EXTRACT EXERCISE IDS FROM PROGRAM ----
const usedIds = new Set();
const exerciseIdRegex = /exerciseId:\s*['"`]([^'"`]+)['"`]/g;

let match;
while ((match = exerciseIdRegex.exec(programContent)) !== null) {
  usedIds.add(match[1]);
}

// ---- EXTRACT LIBRARY IDS ----
const existingIds = new Set();
const libraryIdRegex = /id:\s*['"`]([^'"`]+)['"`]/g;

while ((match = libraryIdRegex.exec(libraryContent)) !== null) {
  existingIds.add(match[1]);
}

// ---- FIND MISSING ----
const missing = [];

usedIds.forEach(id => {
  if (!existingIds.has(id)) {
    missing.push(id);
  }
});

// ---- OUTPUT ----
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