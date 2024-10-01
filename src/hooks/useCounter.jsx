import { useLocalStorage } from './useLocalStorage.jsx';

export function useCounter(storageName, initialValue) {
  const [count, setCount] = useLocalStorage(
    'counter-' + storageName,
    initialValue
  );
  const [step, setStep] = useLocalStorage('step-' + storageName, 1);

  function increase() {
    setCount(count + step);
  }

  function decrease() {
    setCount(count - step);
  }

  function reset() {
    setCount(0);
  }

  return { count, step, setStep, increase, decrease, reset };
}
