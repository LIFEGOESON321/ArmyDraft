import React from 'react';
import { Card } from './Card';
import { Faction } from '../types';

interface FactionSelectionProps {
  factions: Faction[];
  onSelectFaction: (faction: Faction) => void;
}

export const FactionSelection: React.FC<FactionSelectionProps> = ({ factions, onSelectFaction }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Faction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {factions.map((faction) => (
          <Card
            key={faction.id}
            frontImage={faction.frontImage}
            backImage={faction.backImage}
            name={faction.name}
            onClick={() => onSelectFaction(faction)}
          />
        ))}
      </div>
    </div>
  );
};