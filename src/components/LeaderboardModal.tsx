import type { Team } from '../types';

import { Link } from 'react-router-dom';

type Props = {
  open: boolean;
  teams: Team[];
  onClose: () => void;
};

export function LeaderboardModal({ open, teams, onClose }: Props) {
  if (!open) return null;

  const sorted = [...teams].sort((a, b) => b.score - a.score);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Leaderboard</h2>
            <p className="mt-2 text-slate-400">Final ranking and team scores for the current session.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/celebration"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              결과
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {sorted.map((team, index) => (
            <div key={team.id} className="flex items-center justify-between rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4">
              <div>
                <p className="text-sm text-slate-400">#{index + 1}</p>
                <p className="text-xl font-semibold text-white">{team.name}</p>
              </div>
              <div className="rounded-3xl bg-cyan-600 px-4 py-3 text-2xl font-bold text-white">{team.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
