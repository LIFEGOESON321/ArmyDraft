import React from 'react';
import { Card } from './Card';
import { DraftUnit } from '../types';

interface ArmyListProps {
  units: DraftUnit[];
  onReset: () => void;
}

export const ArmyList: React.FC<ArmyListProps> = ({ units, onReset }) => {
  const totalPoints = units.reduce((sum, unit) => sum + unit.points * unit.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Your Army List</h2>
        <div className="text-right">
          <p className="text-xl font-semibold">Total Points: {totalPoints}</p>
          <button
            onClick={onReset}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Start New Draft
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {units.map((unit) => (
          <div key={unit.id}>
            <Card
              frontImage={unit.frontImage}
              backImage={unit.backImage}
              name={`${unit.name} x${unit.quantity} (${unit.points * unit.quantity} pts)`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};