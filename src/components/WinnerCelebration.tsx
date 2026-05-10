import type { Team } from '../types';

const confettiColors = ['#f472b6', '#60a5fa', '#facc15', '#34d399', '#a78bfa'];

const createConfettiItems = () =>
  Array.from({ length: 24 }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
    color: confettiColors[index % confettiColors.length]
  }));

const confettiItems = createConfettiItems();

type Props = {
  teams: Team[];
};

export function WinnerCelebration({ teams }: Props) {
  const sorted = [...teams].sort((a, b) => b.score - a.score);
  const winner = sorted[0];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/95 p-8 text-center shadow-soft">
      <div className="pointer-events-none absolute inset-0">
        {confettiItems.map((item) => (
          <span
            key={item.id}
            className="confetti-piece"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              backgroundColor: item.color
            }}
          />
        ))}
      </div>

      <div className="relative">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Final Winner</p>
        <h1 className="mt-6 text-5xl font-bold text-white">{winner.name}</h1>
        <p className="mt-3 text-xl text-slate-300">with {winner.score} points</p>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
          <h2 className="text-2xl font-semibold text-white">Full Ranking</h2>
          <div className="mt-5 space-y-3">
            {sorted.map((team, index) => (
              <div key={team.id} className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-4">
                <div>
                  <p className="text-sm text-slate-400">#{index + 1}</p>
                  <p className="text-lg font-semibold text-white">{team.name}</p>
                </div>
                <p className="text-2xl font-bold text-indigo-400">{team.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
