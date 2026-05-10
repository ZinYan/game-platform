import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { QuestionCard } from './QuestionCard';
import { Timer } from './Timer';
import type { Game, SessionState, Team } from '../types';

type Props = {
  session: SessionState;
  games: Game[];
  onSessionChange: (patch: Partial<SessionState>) => void;
  onTeamsChange: (teams: Team[]) => void;
};

export function HostGameScreen({ session, games, onSessionChange, onTeamsChange }: Props) {
  const params = useParams();
  const navigate = useNavigate();
  const routeGameId = params.gameId;

  const currentGame = useMemo(() => {
    return games.find((game) => game.id === routeGameId) ?? games.find((game) => game.id === session.currentGameId) ?? games[0];
  }, [games, routeGameId, session.currentGameId]);

  useEffect(() => {
    if (!routeGameId) return;
    if (routeGameId !== session.currentGameId || session.currentGameId === '') {
      onSessionChange({
        currentGameId: routeGameId,
        questionIndex: 0,
        showAnswer: false,
        timerRunning: false,
        timerSeconds: currentGame.timerSeconds ?? 0
      });
    }
  }, [routeGameId, session.currentGameId, currentGame, onSessionChange]);

  useEffect(() => {
    if (currentGame.timerSeconds === undefined) return;
    if (!session.timerRunning) return;
    if (session.timerSeconds <= 0) {
      onSessionChange({ timerRunning: false });
      return;
    }
    const timerId = window.setTimeout(() => {
      onSessionChange({ timerSeconds: Math.max(0, session.timerSeconds - 1) });
    }, 1000);
    return () => window.clearTimeout(timerId);
  }, [session.timerRunning, session.timerSeconds, currentGame.timerSeconds, onSessionChange]);

  const hasRulesPage = Array.isArray(currentGame.rules) && currentGame.rules.length > 0;
  const rulesPage = hasRulesPage && session.questionIndex === 0;
  const question = rulesPage
    ? undefined
    : currentGame.questions[hasRulesPage ? session.questionIndex - 1 : session.questionIndex] ?? currentGame.questions[0];

  const changeScore = (teamId: string, delta: number) => {
    if (teamId) {
      onTeamsChange(
        session.teams.map((team) => (team.id === teamId ? { ...team, score: Math.max(0, team.score + delta) } : team))
      );
      return;
    }
    if (delta !== 0) {
      onTeamsChange(session.teams.map((team) => ({ ...team, score: Math.max(0, team.score + delta) })));
    }
  };

  const lastIndex = hasRulesPage ? currentGame.questions.length : currentGame.questions.length - 1;
  const handleNext = () => {
    if (session.questionIndex < lastIndex) {
      onSessionChange({ questionIndex: session.questionIndex + 1, showAnswer: false, timerRunning: false, timerSeconds: currentGame.timerSeconds ?? 0 });
    }
  };

  const handlePrev = () => {
    if (session.questionIndex > 0) {
      onSessionChange({ questionIndex: session.questionIndex - 1, showAnswer: false, timerRunning: false, timerSeconds: currentGame.timerSeconds ?? 0 });
    }
  };

  const startTimer = () => {
    if (currentGame.timerSeconds === undefined) return;
    onSessionChange({ timerRunning: true, timerSeconds: currentGame.timerSeconds });
  };

  const resetTimer = () => {
    onSessionChange({ timerRunning: false, timerSeconds: currentGame.timerSeconds ?? 0 });
  };

  const revealAnswer = () => onSessionChange({ showAnswer: true });
  const hideAnswer = () => onSessionChange({ showAnswer: false });

  return (
    <div className="space-y-8">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-soft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{currentGame.kind.replace('-', ' ').toUpperCase()}</p>
              <h1 className="mt-3 text-4xl font-bold text-white">{currentGame.title}</h1>
              <p className="mt-3 text-slate-400">{currentGame.description}</p>
            </div>
            <div className="flex flex-col gap-2 rounded-3xl bg-slate-950/80 px-5 py-4 text-right">
              <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Page</span>
              <span className="text-3xl font-semibold text-white">
                {hasRulesPage ? session.questionIndex : session.questionIndex + 1}/{currentGame.questions.length}
              </span>
              <span className="text-slate-400">Score +{currentGame.scoreIncrement}</span>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {rulesPage ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{currentGame.title} 규칙 안내</p>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-300">
                  {currentGame.rules?.map((line, index) => (
                    <p key={`${index}-${line}`}>{line}</p>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <QuestionCard question={question!} showAnswer={session.showAnswer} />
                {currentGame.kind !== 'choice' && currentGame.kind !== 'relay' && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={revealAnswer}
                      className="rounded-3xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-500"
                    >
                      Reveal Answer
                    </button>
                    <button
                      type="button"
                      onClick={hideAnswer}
                      className="rounded-3xl bg-slate-700 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-600"
                    >
                      Hide Answer
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={session.questionIndex === 0}
                className="rounded-3xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={session.questionIndex >= lastIndex}
                className="rounded-3xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <Link
              to="/"
              className="rounded-3xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-300"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <aside className="space-y-5">
          {currentGame.kind === 'relay' && (
            <Timer seconds={session.timerSeconds} running={session.timerRunning} onStart={startTimer} onReset={resetTimer} />
          )}

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Team Scores</h2>
            <div className="mt-4 space-y-3">
              {session.teams.map((team) => (
                <div key={team.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-600">{team.name}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{team.score}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentGame.kind === 'bingo' ? (
                        <>
                          <button
                            type="button"
                            onClick={() => changeScore(team.id, 5)}
                            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                          >
                            +5
                          </button>
                          <button
                            type="button"
                            onClick={() => changeScore(team.id, 3)}
                            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                          >
                            +3
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => changeScore(team.id, currentGame.kind === 'relay' ? 3 : 1)}
                            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                          >
                            +{currentGame.kind === 'relay' ? 3 : 1}
                          </button>
                          <button
                            type="button"
                            onClick={() => changeScore(team.id, currentGame.kind === 'relay' ? -3 : -1)}
                            className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500"
                          >
                            {currentGame.kind === 'relay' ? '-3' : '-1'}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
