export type Team = {
  id: string;
  name: string;
  score: number;
};

export type Question = {
  id: string;
  prompt: string;
  answer: string | { image: string; title: string };
  audio?: string;
  extra?: string;
  type?: 'text' | 'choice' | 'logo' | 'hint' | 'relay';
  choices?: string[];
  logo?: string;
  subtitle?: string;
};

export type Game = {
  id: string;
  title: string;
  description: string;
  kind: 'quiz' | 'choice' | 'song' | 'logo' | 'initial' | 'bingo' | 'relay';
  rules?: string[];
  questions: Question[];
  scoreIncrement: number;
  customButtons?: Array<{ label: string; value: number; teamOnly?: boolean }>;
  timerSeconds?: number;
};

export type SessionState = {
  teams: Team[];
  currentGameId: string;
  questionIndex: number;
  showAnswer: boolean;
  showLeaderboard: boolean;
  timerRunning: boolean;
  timerSeconds: number;
  timerStartAt?: number;
};
