import React, { useMemo, useState } from 'react';
import { CardioConfig, CardioLog, CardioLogInput } from '../../types';

interface Props {
  cardio?: CardioConfig;
  existingLog?: CardioLog;
  onSave: (log: CardioLogInput) => void;
}

const CardioEntryCard: React.FC<Props> = ({ cardio, existingLog, onSave }) => {
  const [distanceKm, setDistanceKm] = useState(existingLog?.distanceKm.toString() || '');
  const [durationMinutes, setDurationMinutes] = useState(
    existingLog?.durationMinutes.toString() || cardio?.durationMinutes?.toString() || ''
  );
  const [averageSpeedKmh, setAverageSpeedKmh] = useState(existingLog?.averageSpeedKmh.toString() || '');
  const [caloriesBurned, setCaloriesBurned] = useState(existingLog?.caloriesBurned.toString() || '');
  const [saved, setSaved] = useState(Boolean(existingLog));

  const calculatedSpeed = useMemo(() => {
    const distance = Number.parseFloat(distanceKm);
    const minutes = Number.parseFloat(durationMinutes);
    if (!Number.isFinite(distance) || !Number.isFinite(minutes) || minutes <= 0) return 0;
    return Number((distance / (minutes / 60)).toFixed(2));
  }, [distanceKm, durationMinutes]);

  const markChanged = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
    setSaved(false);
  };

  const save = () => {
    const distance = Number.parseFloat(distanceKm);
    const minutes = Number.parseFloat(durationMinutes);
    const manualSpeed = Number.parseFloat(averageSpeedKmh);
    const calories = Number.parseFloat(caloriesBurned);
    const speed = Number.isFinite(manualSpeed) && manualSpeed > 0 ? manualSpeed : calculatedSpeed;

    if (![distance, minutes, speed, calories].every(Number.isFinite) || distance <= 0 || minutes <= 0 || speed <= 0 || calories < 0) return;

    onSave({
      distanceKm: distance,
      durationMinutes: minutes,
      averageSpeedKmh: speed,
      caloriesBurned: calories
    });
    setAverageSpeedKmh(speed.toString());
    setSaved(true);
  };

  const inputClass = 'mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-lg font-black text-white outline-none placeholder:text-white/25 focus:border-sky-300';

  return (
    <div className="mt-5 rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
      <div className="grid grid-cols-2 gap-3">
        <label className="text-[10px] font-black uppercase tracking-wider text-sky-200">
          Distance (km)
          <input type="number" min="0" step="0.01" inputMode="decimal" value={distanceKm} onChange={event => markChanged(setDistanceKm, event.target.value)} placeholder="10.00" className={inputClass} />
        </label>
        <label className="text-[10px] font-black uppercase tracking-wider text-sky-200">
          Time (minutes)
          <input type="number" min="0" step="1" inputMode="decimal" value={durationMinutes} onChange={event => markChanged(setDurationMinutes, event.target.value)} placeholder="60" className={inputClass} />
        </label>
        <label className="text-[10px] font-black uppercase tracking-wider text-sky-200">
          Average speed (km/h)
          <input type="number" min="0" step="0.01" inputMode="decimal" value={averageSpeedKmh} onChange={event => markChanged(setAverageSpeedKmh, event.target.value)} placeholder={calculatedSpeed ? calculatedSpeed.toString() : '10.00'} className={inputClass} />
        </label>
        <label className="text-[10px] font-black uppercase tracking-wider text-sky-200">
          Calories burned
          <input type="number" min="0" step="1" inputMode="numeric" value={caloriesBurned} onChange={event => markChanged(setCaloriesBurned, event.target.value)} placeholder="600" className={inputClass} />
        </label>
      </div>

      {calculatedSpeed > 0 && !averageSpeedKmh && (
        <p className="mt-3 text-xs text-sky-200">Calculated average: <strong>{calculatedSpeed} km/h</strong></p>
      )}

      <button type="button" onClick={save} className={`mt-4 w-full rounded-2xl py-3 text-xs font-black uppercase tracking-widest transition ${saved ? 'bg-emerald-500 text-white' : 'bg-sky-300 text-sky-950'}`}>
        {saved ? 'Run saved locally' : 'Save run'}
      </button>
      {existingLog && saved && <p className="mt-2 text-center text-[10px] text-sky-200">Saved on {existingLog.date}. Saving again updates this day.</p>}
    </div>
  );
};

export default CardioEntryCard;
