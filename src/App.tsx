import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { games } from './data/games';
import { loadSession, saveSession, clearSession, defaultState } from './lib/session';
import { LeaderboardModal } from './components/LeaderboardModal';
import { TeamSetup } from './components/TeamSetup';
import { WinnerCelebration } from './components/WinnerCelebration';
import { HostGameScreen } from './components/HostGameScreen';
import { GameCard } from './components/GameCard';
import type { SessionState, Team } from './types';

const STORAGE_KEY = 'euron-mt-game-state';

function App() {
  const navigate = useNavigate();
  const [session, setSession] = useState<SessionState>(() => loadSession());
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  useEffect(() => {
    saveSession(session);
  }, [session]);

  const currentGame = useMemo(
    () => games.find((game) => game.id === session.currentGameId) ?? games[0],
    [session.currentGameId]
  );

  const updateTeams = (teams: Team[]) => setSession((prev) => ({ ...prev, teams }));

  const updateSession = (patch: Partial<SessionState>) => setSession((prev) => ({ ...prev, ...patch }));

  const handleReset = () => {
    if (window.confirm('Reset the entire session and clear localStorage?')) {
      clearSession();
      setSession(defaultState);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div>
            <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
              MT Games
            </Link>
            <p className="mt-1 text-sm text-slate-400">Host mode for projectors, offline answers, and manual scoring.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLeaderboardOpen(true)}
              className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-violet-400"
            >
              Leaderboard
            </button>
            <Link
              to="/celebration"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              결과
            </Link>
            <Link
              to="/setup"
              className="rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
            >
              팀 등록
            </Link>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-400"
            >
              Reset Session
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Routes>
          <Route
            path="/"
            element={
              <section className="space-y-8">
                <div className="rounded-[2rem] border border-fuchsia-500/20 bg-slate-900/90 p-8 shadow-soft">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <img src="/logo.jpeg" alt="Euron logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-fuchsia-400/50" />
                      <h1 className="text-4xl font-bold text-white">유런 MT</h1>
                    </div>
                  </div>
                </div>
                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {games.map((game) => (
                    <GameCard key={game.id} game={game} active={game.id === session.currentGameId} onSelect={() => {
                      updateSession({ currentGameId: game.id, questionIndex: 0, showAnswer: false, timerRunning: false, timerSeconds: game.timerSeconds ?? 0 });
                      navigate(`/host/${game.id}`);
                    }} />
                  ))}
                </section>
              </section>
            }
          />
          <Route
            path="/setup"
            element={
              <TeamSetup
                teams={session.teams}
                onTeamsChange={(teams) => updateTeams(teams)}
                onContinue={() => navigate('/')}
              />
            }
          />
          <Route
            path="/host/:gameId"
            element={
              <HostGameScreen
                session={session}
                games={games}
                onSessionChange={updateSession}
                onTeamsChange={updateTeams}
              />
            }
          />
          <Route path="/celebration" element={<WinnerCelebration teams={session.teams} />} />
          <Route path="*" element={<p className="text-lg text-slate-300">Page not found.</p>} />
        </Routes>
      </main>

      <LeaderboardModal
        open={leaderboardOpen}
        teams={session.teams}
        onClose={() => setLeaderboardOpen(false)}
      />
    </div>
  );
}

export default App;
