import { useCounter } from '../hooks/useCounter';

function Contact() {
  const { count, increase, decrease, step, setStep } = useCounter('coin', 0);

  return (
    <>
      <p>contact: {count}</p>
      <button onClick={decrease}>azalt</button>
      <button onClick={increase}>artır</button>
      <div>
        <button onClick={() => setStep(5)}>Step: {step}</button>
      </div>
    </>
  );
}

export default Contact;
