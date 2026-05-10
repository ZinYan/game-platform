type Props = {
  seconds: number;
  running: boolean;
  onStart: () => void;
  onReset: () => void;
};

export function Timer({ seconds, running, onStart, onReset }: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Timer</p>
          <p className="mt-3 text-5xl font-semibold text-white">{seconds}s</p>
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onStart}
            className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            {running ? 'Running' : 'Start'}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="rounded-full bg-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
