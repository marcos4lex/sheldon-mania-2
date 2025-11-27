export enum MoveType {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
  LIZARD = 'LIZARD',
  SPOCK = 'SPOCK',
}

export interface Interaction {
  verb: string;
  target: MoveType;
}

export interface MoveDef {
  id: MoveType;
  label: string;
  icon: string; // Using emoji for best visual representation of hand signs
  winsAgainst: Interaction[];
}

export type GameResult = 'WIN' | 'LOSE' | 'DRAW';

export interface RoundResult {
  playerMove: MoveType;
  computerMove: MoveType;
  result: GameResult;
  verb?: string; // The action verb (e.g., "Crushes")
  commentary?: string; // AI generated commentary
}
