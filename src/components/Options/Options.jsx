import clsx from "clsx";
import s from "./Options.module.css";

function Options({ onGood, onNeutral, onBad, onReset }) {
  return (
    <div className="s.container">
      <div className={clsx(s.list)}>
        <button onClick={onGood}>Good</button>
        <button onClick={onNeutral}>Neutral</button>
        <button onClick={onBad}>Bad</button>
      </div>
    </div>
  );
}

export default Options;
