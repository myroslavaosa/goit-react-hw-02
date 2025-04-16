import s from './Feedback.module.css';

function Feedback({ total, positive, counterGood, counterNeutral, counterBad }) {

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
