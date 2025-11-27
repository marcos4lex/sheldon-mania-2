import React, { useState, useEffect } from 'react';
import { MOVES } from '../constants';
import { MoveType, GameResult, RoundResult } from '../types';
import { Button } from './Button';
import { getSheldonCommentary } from '../services/geminiService';

interface GameProps {
  onGameEnd: (result: GameResult) => void;
}

export const Game: React.FC<GameProps> = ({ onGameEnd }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [roundResult, setRoundResult] = useState<RoundResult | null>(null);
  const [commentary, setCommentary] = useState<string>("");
  const [loadingCommentary, setLoadingCommentary] = useState(false);

  const handleMove = async (playerMoveId: MoveType) => {
    setIsPlaying(true);
    setCommentary("");
    
    // Simulate thinking/animation time
    await new Promise(resolve => setTimeout(resolve, 600));

    const moveKeys = Object.keys(MOVES) as MoveType[];
    const computerMoveId = moveKeys[Math.floor(Math.random() * moveKeys.length)];

    let result: GameResult = 'DRAW';
    let verb = '';

    if (playerMoveId === computerMoveId) {
      result = 'DRAW';
      verb = 'Empata com';
    } else {
      const playerWinCondition = MOVES[playerMoveId].winsAgainst.find(w => w.target === computerMoveId);
      if (playerWinCondition) {
        result = 'WIN';
        verb = playerWinCondition.verb;
      } else {
        result = 'LOSE';
        const computerWinCondition = MOVES[computerMoveId].winsAgainst.find(w => w.target === playerMoveId);
        verb = computerWinCondition?.verb || 'Beats';
      }
    }

    const newResult: RoundResult = {
      playerMove: playerMoveId,
      computerMove: computerMoveId,
      result,
      verb
    };

    setRoundResult(newResult);
    setIsPlaying(false);
    onGameEnd(result);

    // Fetch AI commentary
    if (process.env.API_KEY) {
      setLoadingCommentary(true);
      const text = await getSheldonCommentary(newResult);
      setCommentary(text);
      setLoadingCommentary(false);
    }
  };

  const resetRound = () => {
    setRoundResult(null);
    setCommentary("");
  };

  if (roundResult) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto animate-fade-in p-4">
        <div className="flex items-center justify-between w-full mb-12">
          {/* Player Choice */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#4FB3FF] tracking-widest text-sm font-bold">VOCÊ</span>
            <div className={`
              w-32 h-32 rounded-full border-8 flex items-center justify-center bg-[#1F4C6B] text-6xl shadow-[0_0_30px_rgba(31,76,107,0.5)]
              ${roundResult.result === 'WIN' ? 'border-[#4FB3FF]' : roundResult.result === 'LOSE' ? 'border-red-500/50' : 'border-gray-500'}
            `}>
              {MOVES[roundResult.playerMove].icon}
            </div>
            <span className="text-xl font-bold">{MOVES[roundResult.playerMove].label}</span>
          </div>

          {/* Result Text */}
          <div className="flex flex-col items-center gap-2 z-10">
             <div className="bg-[#0F1A23] p-2 rounded-lg border border-[#1F4C6B]">
                <span className="text-red-500 font-extrabold uppercase text-xl md:text-2xl italic">
                  {roundResult.verb}
                </span>
             </div>
          </div>

          {/* Computer Choice */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#4FB3FF] tracking-widest text-sm font-bold">SHELDON</span>
            <div className={`
               w-32 h-32 rounded-full border-8 flex items-center justify-center bg-[#1F4C6B] text-6xl shadow-[0_0_30px_rgba(31,76,107,0.5)]
               ${roundResult.result === 'LOSE' ? 'border-[#4FB3FF]' : roundResult.result === 'WIN' ? 'border-red-500/50' : 'border-gray-500'}
            `}>
              {MOVES[roundResult.computerMove].icon}
            </div>
            <span className="text-xl font-bold">{MOVES[roundResult.computerMove].label}</span>
          </div>
        </div>

        <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">
              {roundResult.result === 'WIN' ? <span className="text-green-400">VITÓRIA!</span> : 
               roundResult.result === 'LOSE' ? <span className="text-red-500">BAZINGA!</span> : 
               <span className="text-gray-300">EMPATE</span>}
            </h2>
            
            {/* Sheldon Commentary Box */}
            <div className="bg-[#1E6A8F]/20 border border-[#4FB3FF]/30 p-6 rounded-xl max-w-lg mx-auto min-h-[100px] relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0F1A23] px-3 text-[#4FB3FF] text-xs font-bold uppercase tracking-wider">
                Sheldon Says
              </span>
              {loadingCommentary ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-pulse text-[#4FB3FF]">Thinking...</div>
                </div>
              ) : commentary ? (
                <p className="italic text-lg text-white font-medium">"{commentary}"</p>
              ) : (
                <p className="text-gray-400 text-sm opacity-50">Waiting for smart remark...</p>
              )}
            </div>
        </div>

        <Button onClick={resetRound} className="w-full max-w-xs bg-[#4FB3FF] hover:bg-[#3d9bdb] border-none text-[#0F1A23]">
          JOGAR NOVAMENTE
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center animate-fade-in ${isPlaying ? 'pointer-events-none opacity-50' : ''}`}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-12">
        {(Object.values(MOVES) as typeof MOVES[MoveType][]).map((move) => (
          <div key={move.id} className="flex flex-col items-center gap-3 group">
            <Button 
              variant="icon" 
              onClick={() => handleMove(move.id)}
              aria-label={move.label}
              className="group-hover:-translate-y-2 transition-transform duration-300"
            >
              <span className="drop-shadow-md">{move.icon}</span>
            </Button>
            <span className="font-bold text-white uppercase tracking-wider text-sm opacity-80 group-hover:opacity-100 group-hover:text-[#4FB3FF] transition-colors">
              {move.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[#1E6A8F] uppercase tracking-[0.3em] font-bold text-sm animate-pulse">
        Escolha sua arma
      </p>
    </div>
  );
};
