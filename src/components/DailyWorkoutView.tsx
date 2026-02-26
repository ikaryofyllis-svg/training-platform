import React, { useState } from 'react';
import { Session, UnitSystem } from '../types';
import { EXERCISE_LIBRARY } from '../data/exercises/exerciseLibrary';

interface DailyWorkoutViewProps {
  session: Session;
  units: UnitSystem;
  currentDay: number; // 🔥 ADD THIS
  onBack: () => void;
  onComplete?: () => void;
  onSaveLog: (
    exerciseId: string,
    weight: number,
    reps: number,
    sets: number
  ) => void;
}

const DailyWorkoutView: React.FC<DailyWorkoutViewProps> = ({
  session,
  units,
  currentDay,
  onBack,
  onComplete,
  onSaveLog
}) => {
  console.log("SESSION:", session);

  const [weightInputs, setWeightInputs] = useState<Record<string, number>>({});

  const getExerciseById = (id: string) => {
    return EXERCISE_LIBRARY.find(e => e.id === id);
  };

  const handleWeightChange = (exerciseId: string, value: number) => {
    setWeightInputs(prev => ({
      ...prev,
      [exerciseId]: value
    }));
  };

  const handleSaveExerciseLog = (
    exerciseId: string,
    reps: string,
    sets: number
  ) => {
    const weight = weightInputs[exerciseId];
    if (!weight) return;

    onSaveLog(exerciseId, weight, parseInt(reps), sets);
  };

  const hasOnlyCardio =
   session.blocks?.length === 1 &&
   session.blocks?.[0]?.type === "cardio";
  const isRestDay = session.blocks?.length === 0;
  const isCompleted = session.day < currentDay;

  return (
    <div className="animate-in slide-in-from-bottom duration-500 pb-32">

      {/* HEADER */}
      <div className="relative h-72 flex flex-col justify-end px-6 pb-10 bg-black">
        <button
          onClick={onBack}
          className="absolute top-6 left-6 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>

        <div className="relative z-10">
          <h1 className="text-4xl font-black text-white">
            Day {session.day} — {session.title}
          </h1>
        </div>
      </div>

      {/* BLOCK RENDERING */}
      <section className="px-6 mt-8 space-y-6">
         {isRestDay && (
          <div className="bg-gray-100 dark:bg-card-dark p-10 rounded-3xl text-center">
            <h3 className="text-xl font-black mb-2">Rest & Recovery</h3>
            <p className="text-sm text-gray-500">
               Focus on mobility, hydration, and recovery.
            </p>
           </div>
       )}

        {!isRestDay &&
         session.blocks?.map((block, blockIndex) =>{

          // CARDIO BLOCK
          if (block.type === "cardio") {
            return (
              <div key={blockIndex} className="bg-blue-100 p-6 rounded-3xl">
                <h4 className="font-black text-blue-600 mb-2">Cardio</h4>

                {block.cardio?.mode === "steady" && (
                  <p>{block.cardio.durationMinutes} min steady</p>
                )}

                {block.cardio?.mode === "interval" && (
                  <p>{block.cardio.intervals}</p>
                )}
              </div>
            );
          }

          // SUPERSET
          if (block.type === "superset") {
            return (
              <div key={blockIndex} className="border-2 border-primary p-6 rounded-3xl">
                <h4 className="font-black text-primary mb-4">
                  Superset {block.label}
                </h4>

                {block.exercises?.map((exerciseData) => {
                  const exercise = getExerciseById(exerciseData.exerciseId);
                  if (!exercise) return null;

                  return (
                    <div key={exercise.id} className="mb-6">
                      <h5 className="font-bold">{exercise.name}</h5>
                      <p className="text-xs text-primary mb-2">
                        {exerciseData.sets} sets • {exerciseData.reps}
                      </p>

                      <input
                        type="number"
                        placeholder={`Weight (${units})`}
                        className="w-full bg-gray-100 rounded-xl py-3 px-4 text-lg font-bold mb-2"
                        onChange={(e) =>
                          handleWeightChange(
                            exercise.id,
                            parseFloat(e.target.value)
                          )
                        }
                      />

                      <button
                        onClick={() =>
                          handleSaveExerciseLog(
                            exercise.id,
                            exerciseData.reps!,
                            exerciseData.sets!
                          )
                        }
                        className="w-full py-2 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-widest"
                      >
                        Save Log
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          }

          // SINGLE BLOCK
          return (
            <div key={blockIndex} className="bg-white dark:bg-card-dark p-6 rounded-3xl border">
              {block.exercises?.map((exerciseData) => {
                const exercise = getExerciseById(exerciseData.exerciseId);
                if (!exercise) return null;

                return (
                  <div key={exercise.id} className="mb-6">
                    <h5 className="font-bold">{exercise.name}</h5>
                    <p className="text-xs text-primary mb-2">
                      {exerciseData.sets} sets • {exerciseData.reps}
                    </p>

                    <input
                      type="number"
                      placeholder={`Weight (${units})`}
                      className="w-full bg-gray-100 rounded-xl py-3 px-4 text-lg font-bold mb-2"
                      onChange={(e) =>
                        handleWeightChange(
                          exercise.id,
                          parseFloat(e.target.value)
                        )
                      }
                    />

                    <button
                      onClick={() =>
                        handleSaveExerciseLog(
                          exercise.id,
                          exerciseData.reps!,
                          exerciseData.sets!
                        )
                      }
                      className="w-full py-2 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-widest"
                    >
                      Save Log
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>

      {/* COMPLETE BUTTON */}
      {onComplete && (
        <section className="px-6 mt-10">
          <button
            onClick={onComplete}
            disabled={isCompleted}
            className={`w-full py-4 rounded-2xl font-black uppercase transition-all ${
              isCompleted
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-red-600'
            }`}
          >
            {isCompleted ? 'Workout Completed' : 'Complete Workout'}
          </button>
        </section>
      )}

    </div>
  );
};

export default DailyWorkoutView;