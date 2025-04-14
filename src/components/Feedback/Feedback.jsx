import s from './Feedback.module.css';

function Feedback({ counterGood, counterNeutral, counterBad }) {
  const total = counterGood + counterNeutral + counterBad;
  const positive = total > 0 ? ((counterGood + counterNeutral) / total * 100).toFixed(1) : 0;

  return (
    <div className={s.feedback}>
      <p>Good: {counterGood}</p>
      <p>Neutral: {counterNeutral}</p>
      <p>Bad: {counterBad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}

export default Feedback;
