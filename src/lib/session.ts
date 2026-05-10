import type { SessionState, Team } from '../types';

const STORAGE_KEY = 'euron-mt-game-state';

export const defaultTeams: Team[] = [
  { id: 'team-1', name: 'Team 1', score: 0 },
  { id: 'team-2', name: 'Team 2', score: 0 },
  { id: 'team-3', name: 'Team 3', score: 0 }
];

export const defaultState: SessionState = {
  teams: defaultTeams,
  currentGameId: 'euron-quiz',
  questionIndex: 0,
  showAnswer: false,
  showLeaderboard: false,
  timerRunning: false,
  timerSeconds: 0
};

export function loadSession(): SessionState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as SessionState;
    if (!parsed.teams || !Array.isArray(parsed.teams)) return defaultState;
    return { ...defaultState, ...parsed };
  } catch {
    return defaultState;
  }
}

export function saveSession(state: SessionState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function clearSession() {
  window.localStorage.removeItem(STORAGE_KEY);
}
