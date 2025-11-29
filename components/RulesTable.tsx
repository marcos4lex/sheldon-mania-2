import React from 'react';
import { MOVES, RULES_LIST } from '../constants';

export const RulesTable: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      <div className="bg-[#0C1620] border border-[#1F4C6B] rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-[#1E6A8F] py-4 text-center">
          <h2 className="text-2xl font-extrabold text-white tracking-wide uppercase">Regras do Jogo</h2>
        </div>

        <div className="p-1 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1F4C6B]">
                <th className="p-2 md:p-3 text-[#4FB3FF] font-bold uppercase text-xs md:text-sm tracking-wider text-center">Vencedor</th>
                <th className="p-2 md:p-3 text-[#FFFFFF] font-bold uppercase text-xs md:text-sm tracking-wider text-center">Ação</th>
                <th className="p-2 md:p-3 text-[#C8D1D9] font-bold uppercase text-xs md:text-sm tracking-wider text-center">Perdedor</th>
              </tr>
            </thead>
            <tbody>
              {RULES_LIST.map((rule, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#1F4C6B]/30 hover:bg-[#1F4C6B]/20 transition-colors ${index % 2 === 0 ? 'bg-[#0F1A23]' : 'bg-[#0F1A23]/50'}`}
                >
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl md:text-2xl">{MOVES[rule.winner].icon}</span>
                      <span className="font-bold text-white hidden sm:inline text-sm md:text-base">{MOVES[rule.winner].label}</span>
                    </div>
                  </td>
                  <td className="p-2 text-center text-[#4FB3FF] font-semibold uppercase italic text-xs md:text-sm">
                    {rule.action}
                  </td>
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center gap-2 opacity-70">
                      <span className="text-lg md:text-xl grayscale">{MOVES[rule.loser].icon}</span>
                      <span className="font-medium text-[#C8D1D9] hidden sm:inline text-sm md:text-base">{MOVES[rule.loser].label}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
