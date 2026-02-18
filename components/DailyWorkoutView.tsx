import React, { useState } from 'react';
import { Session, UnitSystem } from '../types';
import { EXERCISE_LIBRARY } from '../constants';

interface DailyWorkoutViewProps {
  session: Session;
  units: UnitSystem;
  onBack: () => void;
  onComplete?: () => void;
  onUpdateSession: (session: Session) => void;
  onSaveLog: (exerciseId: string, weight: number,reps: number,sets: number) => void;
}

const DailyWorkoutView: React.FC<DailyWorkoutViewProps> = ({
  session,
  units,
  onBack,
  onComplete,
  onUpdateSession,
  onSaveLog
}) => {

  const [selectedExercise, setSelectedExercise] = useState<any | null>(null);

  const getExerciseById = (id: string) => {
    return EXERCISE_LIBRARY.find(e => e.id === id);
  };

  const handleUpdateWeight = (exerciseId: string, weight: number) => {
    const updatedExercises = session.exercises?.map(e =>
      e.exerciseId === exerciseId
        ? { ...e, loggedWeight: weight }
        : e
    );

    onUpdateSession({ ...session, exercises: updatedExercises });
  };

  const handleSaveExerciseLog = (exerciseId: string) => {
    const exerciseEntry = session.exercises?.find(
      e => e.exerciseId === exerciseId
    );

    if (!exerciseEntry?.loggedWeight) return;

    onSaveLog(exerciseId, exerciseEntry.loggedWeight);
  };

  const isCardioDay = !session.exercises || session.exercises.length === 0;

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

      {/* EXERCISES */}
      <section className="px-6 mt-8 space-y-6">
        {!isCardioDay && session.exercises?.map((exerciseData, idx) => {
          const exercise = getExerciseById(exerciseData.exerciseId);
          if (!exercise) return null;

          return (
            <div key={exercise.id} className="bg-white dark:bg-card-dark p-6 rounded-3xl border">

              <div className="mb-4">
                <h4 className="font-black">{exercise.name}</h4>
                <p className="text-xs text-primary">
                  {exerciseData.sets} sets • {exerciseData.reps} reps
                </p>
              </div>

              <div className="space-y-3">

                <input
                  type="number"
                  value={exerciseData.loggedWeight || ''}
                  onChange={(e) =>
                    handleUpdateWeight(
                      exercise.id,
                      parseFloat(e.target.value)
                    )
                  }
                  placeholder={`Weight (${units})`}
                  className="w-full bg-gray-100 rounded-xl py-3 px-4 text-lg font-bold"
                />

                <button
                  onClick={() => handleSaveExerciseLog(exercise.id)}
                  className="w-full py-2 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  Save Log
                </button>

              </div>
            </div>
          );
        })}
      </section>

      {onComplete && (
        <section className="px-6 mt-10">
          <button
            onClick={onComplete}
            disabled={session.completed}
            className={`w-full py-4 rounded-2xl font-black uppercase transition-all ${
        session.completed
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-primary text-white hover:bg-red-600'
      }`}
    >
      {session.completed ? 'Workout Completed' : 'Complete Workout'}
    </button>
  </section>
      )}
    </div>
  );
};

export default DailyWorkoutView;
