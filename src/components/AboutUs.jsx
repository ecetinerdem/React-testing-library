import { useCounter } from '../hooks/useCounter';

function AboutUs() {
  const { count, increase, decrease, step, setStep } = useCounter(
    'counter',
    100
  );

  return (
    <>
      <h1 data-testid="counter-display" className="m-8">
        {count}
      </h1>
      <button
        onClick={decrease}
        className="bg-slate-700 text-white dark:bg-slate-400 dark:text-black mx-2"
      >
        azalt
      </button>
      <button
        onClick={increase}
        className="bg-slate-700 text-white dark:bg-slate-400 dark:text-black mx-2"
      >
        artır
      </button>
      <div className="mt-2">
        <button
          className="bg-slate-700 text-white dark:bg-slate-400 dark:text-black mx-2"
          onClick={() => setStep(step + 5)}
        >
          Step: {step}
        </button>
      </div>
    </>
  );
}

export default AboutUs;
