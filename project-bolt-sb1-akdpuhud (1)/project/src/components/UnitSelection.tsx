import React from 'react';
import { Card } from './Card';
import { Unit, DraftUnit } from '../types';

interface UnitSelectionProps {
  units: Unit[];
  selectedUnits: DraftUnit[];
  onSelectUnit: (unit: Unit) => void;
  onFinishDraft: () => void;
}

export const UnitSelection: React.FC<UnitSelectionProps> = ({
  units,
  selectedUnits,
  onSelectUnit,
  onFinishDraft,
}) => {
  const totalPoints = selectedUnits.reduce(
    (sum, unit) => sum + unit.points * unit.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Select Your Units</h2>
        <div className="text-right">
          <p className="text-xl font-semibold">Total Points: {totalPoints}</p>
          <button
            onClick={onFinishDraft}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Finish Draft
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {units.map((unit) => (
          <Card
            key={unit.id}
            frontImage={unit.frontImage}
            backImage={unit.backImage}
            name={`${unit.name} (${unit.points} pts)`}
            onClick={() => onSelectUnit(unit)}
          />
        ))}
      </div>
    </div>
  );
};