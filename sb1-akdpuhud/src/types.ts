export interface Faction {
  id: string;
  name: string;
  frontImage: string;
  backImage: string;
}

export interface Unit {
  id: string;
  name: string;
  factionId: string;
  frontImage: string;
  backImage: string;
  points: number;
}

export interface DraftUnit extends Unit {
  quantity: number;
}