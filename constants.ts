import { MoveDef, MoveType } from './types';

export const COLORS = {
  primaryDark: '#0F1A23',
  primaryMedium: '#1F4C6B',
  primaryLight: '#1E6A8F',
  accent: '#4FB3FF',
  textWhite: '#FFFFFF',
  textGray: '#D8D8D8',
};

export const MOVES: Record<MoveType, MoveDef> = {
  [MoveType.ROCK]: {
    id: MoveType.ROCK,
    label: 'Pedra',
    icon: '🪨',
    winsAgainst: [
      { target: MoveType.LIZARD, verb: 'Esmaga' },
      { target: MoveType.SCISSORS, verb: 'Quebra' }, // Changed from generic crushes to match prompt if needed, strictly using prompt verbs
    ],
  },
  [MoveType.PAPER]: {
    id: MoveType.PAPER,
    label: 'Papel',
    icon: '📄',
    winsAgainst: [
      { target: MoveType.ROCK, verb: 'Cobre' },
      { target: MoveType.SPOCK, verb: 'Refuta' },
    ],
  },
  [MoveType.SCISSORS]: {
    id: MoveType.SCISSORS,
    label: 'Tesoura',
    icon: '✂️',
    winsAgainst: [
      { target: MoveType.PAPER, verb: 'Corta' },
      { target: MoveType.LIZARD, verb: 'Decapita' },
    ],
  },
  [MoveType.LIZARD]: {
    id: MoveType.LIZARD,
    label: 'Lagarto',
    icon: '🦎',
    winsAgainst: [
      { target: MoveType.SPOCK, verb: 'Envenena' },
      { target: MoveType.PAPER, verb: 'Come' },
    ],
  },
  [MoveType.SPOCK]: {
    id: MoveType.SPOCK,
    label: 'Spock',
    icon: '🖖',
    winsAgainst: [
      { target: MoveType.SCISSORS, verb: 'Esmaga' },
      { target: MoveType.ROCK, verb: 'Vaporiza' },
    ],
  },
};

export const RULES_LIST = [
    { winner: MoveType.SCISSORS, action: 'Corta', loser: MoveType.PAPER },
    { winner: MoveType.PAPER, action: 'Cobre', loser: MoveType.ROCK },
    { winner: MoveType.ROCK, action: 'Esmaga', loser: MoveType.LIZARD },
    { winner: MoveType.LIZARD, action: 'Envenena', loser: MoveType.SPOCK },
    { winner: MoveType.SPOCK, action: 'Esmaga', loser: MoveType.SCISSORS },
    { winner: MoveType.SCISSORS, action: 'Decapita', loser: MoveType.LIZARD },
    { winner: MoveType.LIZARD, action: 'Come', loser: MoveType.PAPER },
    { winner: MoveType.PAPER, action: 'Refuta', loser: MoveType.SPOCK },
    { winner: MoveType.SPOCK, action: 'Vaporiza', loser: MoveType.ROCK },
    { winner: MoveType.ROCK, action: 'Quebra', loser: MoveType.SCISSORS },
];
