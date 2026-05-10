import type { Team } from '../types';

type Props = {
  teams: Team[];
  increment: number;
  onChange: (teamId: string, delta: number) => void;
  customButtons?: Array<{ label: string; value: number; teamOnly?: boolean }>;
};

export function ScoreControls({ teams, increment, onChange, customButtons }: Props) {
  return (
    <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Score Controls</p>
          <p className="mt-2 text-lg text-slate-300">Award and adjust team points manually.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {teams.map((team) => (
          <div key={team.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{team.name}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{team.score}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => onChange(team.id, increment)}
                className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                +{increment}
              </button>
              <button
                type="button"
                onClick={() => onChange(team.id, -increment)}
                className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500"
              >
                -{increment}
              </button>
            </div>
          </div>
        ))}
      </div>

      {customButtons ? (
        <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Fast award</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {customButtons.map((button) => (
              <button
                type="button"
                key={button.label}
                onClick={() => {
                  if (button.teamOnly) return;
                  onChange('', button.value);
                }}
                className="rounded-3xl bg-indigo-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
