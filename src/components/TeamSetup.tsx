import type { Team } from '../types';

type Props = {
  teams: Team[];
  onTeamsChange: (teams: Team[]) => void;
  onContinue: () => void;
};

export function TeamSetup({ teams, onTeamsChange, onContinue }: Props) {
  const updateName = (id: string, name: string) => {
    onTeamsChange(teams.map((team) => (team.id === id ? { ...team, name } : team)));
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-soft">
        <h1 className="text-4xl font-bold text-white">팀 등록</h1>
        <p className="mt-3 text-slate-400">Edit the 3 team names before the session begins. Scores persist in localStorage.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {teams.map((team) => (
          <div key={team.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{team.id.replace('team-', 'Team ')}</p>
            <input
              type="text"
              value={team.name}
              onChange={(event) => updateName(team.id, event.target.value)}
              className="mt-4 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-xl text-white outline-none transition focus:border-blue-500"
            />
            <p className="mt-4 text-slate-400">Current score: {team.score}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
