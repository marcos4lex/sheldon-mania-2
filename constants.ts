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

export const SHELDON_VICTORY_QUOTES = [
  "Eu não ganho sempre… apenas estatisticamente falando.",
  "A vitória era inevitável. Eu fiz as contas.",
  "Eu não sou competitivo, a menos que eu esteja vencendo.",
  "Por favor, não fique triste. Nem todos podem ser tão brilhantes quanto eu.",
  "Isso não é sorte. Isso é física aplicada.",
  "Minha superioridade intelectual falou mais alto novamente.",
  "Eu ganhei? Claro que sim. Era a conclusão lógica.",
  "Você perdeu? Não se sinta mal, é natural.",
  "Eu tentei avisar: sempre escolha a estratégia ótima.",
  "Se quer vencer de mim, estude a tabela completa das 25 combinações.",
  "Eu apenas apliquei a teoria dos jogos… e você não.",
  "Isso não é só um jogo. É ciência pura.",
  "E assim, mais uma vez, a lógica triunfa.",
  "Não foi sorte, foi previsibilidade estatística.",
  "Você jogou emoção, eu joguei racionalidade. Adivinha quem vence?",
  "Anote essa vitória na sua planilha imaginária.",
  "Minha mente é uma máquina perfeitamente lubrificada. A sua… não tanto.",
  "Derrota dói, mas não se preocupe, você se acostuma.",
  "Se eu estivesse no seu lugar, eu também ficaria impressionado comigo."
];

export const SHELDON_DEFEAT_QUOTES = [
  "Claramente, houve um erro estatístico. Exijo uma recontagem… científica.",
  "Impossível. Eu não perco. O universo está bugado.",
  "Provavelmente um lapso temporário causado por radiação cósmica fez isso acontecer.",
  "A probabilidade disso acontecer era de 0,0003%. Então… parabéns, você desafiou a matemática.",
  "Isso é uma injustiça cósmica! Eu quero falar com o gerente do universo!",
  "Minha derrota só é possível em um universo paralelo. Estamos em qual versão agora?",
  "Eu não perdi. Eu apenas… não ganhei. Ainda.",
  "Eu exijo revanche. Imediatamente. Não, espera, preciso respirar primeiro.",
  "Claramente você trapaceou. Mesmo que não tenha trapaceado.",
  "É claro… eu estava permitindo isso para manter o equilíbrio social.",
  "Perder é uma experiência humana. Felizmente, sou acima da média.",
  "Isso apenas reforça que o acaso é irritantemente imprevisível.",
  "A culpa é minha por assumir que a lógica sempre vence.",
  "Parabéns… você venceu alguém intelectualmente superior. Deve estar se sentindo ótimo.",
  "Sim, parabéns. Sua vitória viola pelo menos três leis da física.",
  "Eu só posso deduzir que o universo tem senso de humor.",
  "Eu tenho uma explicação: falha sistêmica no meu cérebro. Procedo para reinicialização."
];
