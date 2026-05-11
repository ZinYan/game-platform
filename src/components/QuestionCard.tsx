import type { Question } from '../types';

type Props = {
  question: Question;
  showAnswer: boolean;
};

export function QuestionCard({ question, showAnswer }: Props) {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-soft">
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">
            {question.type === 'logo' ? 'Logo' : 'Question'}
          </p>
          {question.type === 'logo' && question.logo ? (
            <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6">
              <img src={question.logo} alt={typeof question.answer === 'string' ? question.answer : question.answer.title} className="h-72 w-auto object-contain" />
            </div>
          ) : (
            <>
              <p className="mt-4 text-3xl font-semibold text-white leading-snug">{question.prompt}</p>
              {question.subtitle ? <p className="mt-3 text-slate-400">{question.subtitle}</p> : null}
              {question.audio ? (
                <div className="mx-auto mt-6 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6">
                  <audio controls src={question.audio} className="w-full" preload="metadata" />
                </div>
              ) : null}
            </>
          )}
        </div>
        {question.choices ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {question.choices.map((choice) => (
              <div key={choice} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/80 px-5 py-4 text-lg text-slate-100">
                {choice}
              </div>
            ))}
          </div>
        ) : null}
        {question.type !== 'choice' && question.type !== 'relay' ? (
          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/75 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-300">Answer</p>
            <div className={`mt-3 min-h-[4rem] text-2xl font-semibold ${showAnswer ? 'text-white' : 'text-slate-500'}`}>
              {showAnswer ? (
                typeof question.answer === 'string' ? (
                  question.answer
                ) : (
                  <div className="space-y-4">
                    <div className="mx-auto flex max-w-3xl items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6">
                      <img src={question.answer.image} alt={question.answer.title} className="h-72 w-auto object-contain" />
                    </div>
                    <p className="text-center text-2xl font-semibold text-white">{question.answer.title}</p>
                  </div>
                )
              ) : ''}
            </div>
            {showAnswer && question.extra ? <p className="mt-2 text-slate-400">{question.extra}</p> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
