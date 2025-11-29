import React, { useState } from 'react';
import { Header } from './components/Header';
import { Game } from './components/Game';
import { RulesTable } from './components/RulesTable';
import { Button } from './components/Button';
import { GameResult } from './types';

function App() {
  const [view, setView] = useState<'GAME' | 'RULES'>('GAME');
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const handleGameEnd = (result: GameResult) => {
    setScore(prev => ({
      player: result === 'WIN' ? prev.player + 1 : prev.player,
      computer: result === 'LOSE' ? prev.computer + 1 : prev.computer
    }));
  };

  return (
    <div className="min-h-screen bg-[#0F1A23] bg-grid-pattern text-white flex flex-col items-center py-6 md:py-10 px-2 md:px-4">
      <Header />

      {/* Score Board */}
      <div className="flex gap-6 md:gap-12 mb-6 md:mb-8 bg-[#0C1620] px-6 md:px-8 py-3 rounded-2xl border border-[#1F4C6B] shadow-lg">
        <div className="text-center">
          <p className="text-[#4FB3FF] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Você</p>
          <p className="text-2xl md:text-3xl font-extrabold text-white leading-none">{score.player}</p>
        </div>
        <div className="w-px bg-[#1F4C6B]"></div>
        <div className="text-center">
          <p className="text-[#4FB3FF] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Sheldon</p>
          <p className="text-2xl md:text-3xl font-extrabold text-white leading-none">{score.computer}</p>
        </div>
      </div>

      <main className="w-full max-w-5xl flex-grow flex flex-col items-center justify-start min-h-[500px]">
        {view === 'GAME' ? (
          <Game
            onGameEnd={handleGameEnd}
            onResetScore={() => setScore({ player: 0, computer: 0 })}
          />
        ) : (
          <div className="flex flex-col gap-8 w-full">
            <div className="bg-[#1F4C6B]/20 p-6 rounded-xl border border-[#1E6A8F]/30 text-center max-w-3xl mx-auto backdrop-blur-sm">
              <p className="text-white/90 text-lg leading-relaxed">
                O jogo é uma expansão do clássico <span className="text-[#4FB3FF] font-bold">“Pedra, Papel e Tesoura”</span>,
                adicionando duas novas armas: <span className="text-[#4FB3FF] font-bold">Lagarto</span> e <span className="text-[#4FB3FF] font-bold">Spock</span>.
                Isso reduz as chances de empate e aumenta a complexidade das combinações.
              </p>
            </div>
            <RulesTable />
          </div>
        )}
      </main>

      <nav className="mt-6 flex gap-4">
        <Button
          variant={view === 'GAME' ? 'primary' : 'secondary'}
          onClick={() => setView('GAME')}
          className="min-w-[140px]"
        >
          JOGAR
        </Button>
        <Button
          variant={view === 'RULES' ? 'primary' : 'secondary'}
          onClick={() => setView('RULES')}
          className="min-w-[140px]"
        >
          SOBRE
        </Button>
      </nav>

      <footer className="mt-6 text-[#1F4C6B] text-xs uppercase tracking-widest font-bold">
        Baseado na série The Big Bang Theory
      </footer>
    </div>
  );
}

export default App;
