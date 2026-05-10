import type { Game } from '../types';

type Props = {
  game: Game;
  active?: boolean;
  onSelect: () => void;
};

export function GameCard({ game, active, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group flex flex-col justify-between rounded-[2rem] border px-6 py-8 text-left transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-slate-900/95 ${
        active ? 'border-fuchsia-400 bg-slate-900/95' : 'border-slate-800 bg-slate-900'
      }`}
    >
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Game</p>
        <h2 className="mt-4 text-2xl font-semibold text-white">{game.title}</h2>
        <p className="mt-3 text-slate-400">{game.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
        <span>{game.questions.length} rounds</span>
        <span className="rounded-full bg-fuchsia-500 px-3 py-1 text-white transition group-hover:bg-cyan-400">Start</span>
      </div>
    </button>
  );
}
