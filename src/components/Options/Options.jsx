import clsx from "clsx";
import s from "./Options.module.css";

function Options({ onGood, onNeutral, onBad, total, onReset }) {
  return (
    <div className="s.container">
      <div className={clsx(s.list)}>
        <button onClick={onGood}>Good</button>
        <button onClick={onNeutral}>Neutral</button>
        <button onClick={onBad}>Bad</button>
        {total > 0 && (
        <button onClick={onReset}>Reset</button>
      )}
      </div>
    </div>
  );
}

export default Options;
