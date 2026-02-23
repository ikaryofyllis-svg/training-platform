import React, { useState } from 'react';
import { WORKOUT_PLANS } from '../constants';
import { UnitSystem } from '../types';

interface PerformanceViewProps {
  units: UnitSystem;
  activePlanId?: string;
  currentDay: number;
  exerciseLogs: {
    [exerciseId: string]: {
      date: string;
      bestWeight: number;
      programId: string;
      reps: number;
      sets: number;
    }[];
  };
}

type PerformanceMode = 'LIFETIME' | 'ACTIVE_PROTOCOL';

const PerformanceView: React.FC<PerformanceViewProps> = ({
  units,
  activePlanId = 'femme-fatale',
  currentDay,
  exerciseLogs
}) => {
  console.log("exerciseLogs:", exerciseLogs);
  const [mode, setMode] = useState<PerformanceMode>('LIFETIME');
  const [selectedProgramLift, setSelectedProgramLift] =
    useState<'squat' | 'bench' | 'deadlift' | 'ohp'>('squat');

  const activePlan = WORKOUT_PLANS.find(p => p.id === activePlanId);
  if (!activePlan) return null;

  const currentWeek = Math.ceil(currentDay / 7);

  // =====================================
  // HELPERS
  // =====================================

  const convertWeightValue = (kg: number) => {
    if (units === UnitSystem.METRIC) return kg;
    return Math.round(kg * 2.20462);
  };

  const getLifetimePR = (exerciseId: string) => {
    const logs = exerciseLogs?.[exerciseId] || [];
    if (!logs.length) return 0;
    return Math.max(...logs.map(l => l.bestWeight));
  };

  const getProtocolHistory = (exerciseId: string) => {
    const logs = exerciseLogs?.[exerciseId] || [];

    return logs
      .filter(l => l.programId === activePlanId)
      .map(l => ({
        date: l.date,
        weightKg: l.bestWeight
      }));
  };

  const getLifetimeVolume = () => {
    let total = 0;

    Object.values(exerciseLogs).forEach(logArray => {
      logArray.forEach(log => {
        total += (log.bestWeight || 0) * (log.reps || 0) * (log.sets || 0);
      });
    });

    return total;
  };

  const getLifetimeSets = () => {
    let total = 0;

    Object.values(exerciseLogs).forEach(logArray => {
      logArray.forEach(log => {
        total += log.sets || 0;
      });
    });

    return total;
  };

  // =====================================
  // CHART
  // =====================================

  const width = 300;
  const height = 120;
  const padding = 15;

  const renderChart = (
    data: { date: string; weightKg: number }[],
    color: string = "#d02525"
  ) => {

    if (!data.length) {
      return (
        <div className="flex items-center justify-center h-full text-[10px] font-black uppercase opacity-20 italic">
          No Data Logged Yet
        </div>
      );
    }

    if (data.length === 1) {
      return (
        <div className="flex items-center justify-center h-full text-[10px] font-black uppercase opacity-20 italic">
          Initial Data Point Recorded
        </div>
      );
    }

    const minW = Math.min(...data.map(h => h.weightKg)) * 0.98;
    const maxW = Math.max(...data.map(h => h.weightKg)) * 1.02;

    const getX = (index: number) =>
      (index / (data.length - 1)) * (width - 2 * padding) + padding;

    const getY = (weight: number) =>
      height - padding -
      ((weight - minW) / (maxW - minW)) * (height - 2 * padding);

    const points = data
      .map((h, i) => `${getX(i)},${getY(h.weightKg)}`)
      .join(' ');

    const areaPath = `M ${getX(0)},${height} ${points} ${getX(
      data.length - 1
    )},${height} Z`;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={areaPath} fill="url(#grad)" />

        <polyline
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />

        {data.map((h, i) => (
          <circle
            key={i}
            cx={getX(i)}
            cy={getY(h.weightKg)}
            r="4"
            fill={i === data.length - 1 ? color : '#fff'}
            stroke={color}
            strokeWidth="2"
          />
        ))}
      </svg>
    );
  };

  // =====================================
  // LIFETIME VIEW
  // =====================================

  const renderLifetimeView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-500">

      {/* Hall of Fame */}
      <section className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Hall of Fame
          </h2>
          <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest italic">
            All-time Max Kilos
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
  { label: 'Squat', key: 'back_squat', icon: 'expand' },
  { label: 'Bench', key: 'bench_press', icon: 'horizontal_rule' },
  { label: 'Deadlift', key: 'deadlift', icon: 'vertical_align_top' },
  { label: 'OHP', key: 'overhead_press', icon: 'upload' }
].map((item) => {
            const pr = getLifetimePR(item.key);

            return (
              <div
                key={item.key}
                className="p-6 bg-white dark:bg-card-dark rounded-[32px] border"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    {item.icon}
                  </span>
                  <p className="text-[9px] font-black uppercase opacity-40">
                    {item.label}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black italic">
                    {pr > 0 ? convertWeightValue(pr) : "--"}
                  </span>
                  <span className="text-[10px] opacity-30 uppercase">
                    {units}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lifetime Strength Output */}
      <section className="px-6">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 ml-2">
          Lifetime Strength Output
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-card-dark rounded-[32px] p-6 border">
            <p className="text-[8px] font-black uppercase opacity-30 mb-1">
              Total Volume
            </p>
            <p className="text-xl font-black italic">
              {getLifetimeVolume().toLocaleString()} {units}
            </p>
          </div>

          <div className="bg-white dark:bg-card-dark rounded-[32px] p-6 border">
            <p className="text-[8px] font-black uppercase opacity-30 mb-1">
              Total Sets Completed
            </p>
            <p className="text-xl font-black italic">
              {getLifetimeSets()}
            </p>
          </div>
        </div>
      </section>

    </div>
  );

  // =====================================
  // ACTIVE PROTOCOL VIEW
  // =====================================

  const renderActiveProtocolView = () => {

    const protocolData = getProtocolHistory(selectedProgramLift);

    const firstWeight = protocolData[0]?.weightKg || 0;
    const lastWeight = protocolData[protocolData.length - 1]?.weightKg || 0;
    const change = lastWeight - firstWeight;

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500">
        <section className="px-6">
          <div className="bg-white dark:bg-card-dark rounded-[40px] p-8 border shadow-sm">

            <h3 className="text-xl font-black uppercase italic mb-6">
              {activePlan.name} — Week {currentWeek}
            </h3>

            <select
              value={selectedProgramLift}
              onChange={(e) =>
                setSelectedProgramLift(e.target.value as any)
              }
              className="w-full bg-gray-50 rounded-2xl py-4 px-5 text-xs font-black uppercase"
            >
              <option value="squat">Squat</option>
              <option value="bench">Bench</option>
              <option value="deadlift">Deadlift</option>
              <option value="ohp">Overhead Press</option>
            </select>

            <div className="pt-6 h-44">
              {renderChart(protocolData)}
            </div>

            <div className="flex justify-between pt-6 border-t">
              <div>
                <p className="text-[9px] uppercase opacity-30">Net Change</p>
                <p className="text-2xl font-black italic">
                  {change >= 0 ? '+' : ''}
                  {convertWeightValue(change)} {units}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[9px] uppercase opacity-30">
                  Current Load
                </p>
                <p className="text-2xl font-black italic">
                  {convertWeightValue(lastWeight)} {units}
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-manrope">
      <header className="px-6 pt-12 pb-8">
        <h1 className="text-4xl font-black uppercase italic mb-6">
          Performance
        </h1>

        <div className="flex bg-gray-100 rounded-[28px] p-1.5">
          <button
            onClick={() => setMode('LIFETIME')}
            className={`flex-1 py-4 text-xs font-black uppercase ${
              mode === 'LIFETIME'
                ? 'bg-white text-primary shadow-xl rounded-[22px]'
                : 'text-gray-400'
            }`}
          >
            Lifetime
          </button>

          <button
            onClick={() => setMode('ACTIVE_PROTOCOL')}
            className={`flex-1 py-4 text-xs font-black uppercase ${
              mode === 'ACTIVE_PROTOCOL'
                ? 'bg-white text-primary shadow-xl rounded-[22px]'
                : 'text-gray-400'
            }`}
          >
            Protocol
          </button>
        </div>
      </header>

      <main className="pb-32">
        {mode === 'LIFETIME'
          ? renderLifetimeView()
          : renderActiveProtocolView()}
      </main>
    </div>
  );
};

export default PerformanceView;
