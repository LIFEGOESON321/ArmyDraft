import React, { useState } from 'react';
import { Faction, Unit, DraftUnit } from './types';
import { factions } from './data/factions';
import { units } from './data/units';
import { FactionSelection } from './components/FactionSelection';
import { UnitSelection } from './components/UnitSelection';
import { ArmyList } from './components/ArmyList';
import { Sword } from 'lucide-react';

function App() {
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [draftComplete, setDraftComplete] = useState(false);
  const [selectedUnits, setSelectedUnits] = useState<DraftUnit[]>([]);

  const handleSelectFaction = (faction: Faction) => {
    setSelectedFaction(faction);
  };

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnits((prev) => {
      const existingUnit = prev.find((u) => u.id === unit.id);
      if (existingUnit) {
        return prev.map((u) =>
          u.id === unit.id ? { ...u, quantity: u.quantity + 1 } : u
        );
      }
      return [...prev, { ...unit, quantity: 1 }];
    });
  };

  const handleFinishDraft = () => {
    setDraftComplete(true);
  };

  const handleReset = () => {
    setSelectedFaction(null);
    setDraftComplete(false);
    setSelectedUnits([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-center">
          <Sword className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold">War Game Army Draft</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!selectedFaction ? (
          <FactionSelection
            factions={factions}
            onSelectFaction={handleSelectFaction}
          />
        ) : !draftComplete ? (
          <UnitSelection
            units={units.filter((unit) => unit.factionId === selectedFaction.id)}
            selectedUnits={selectedUnits}
            onSelectUnit={handleSelectUnit}
            onFinishDraft={handleFinishDraft}
          />
        ) : (
          <ArmyList units={selectedUnits} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}

export default App;