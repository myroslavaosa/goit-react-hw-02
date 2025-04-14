import './App.css'
import Description from './components/Description/Description';
import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

function App() {
  const [counterGood, setCounterGood] = useState(() => Number(localStorage.getItem('counterGood')) || 0);
  const [counterNeutral, setCounterNeutral] = useState(() => Number(localStorage.getItem('counterNeutral')) || 0);
  const [counterBad, setCounterBad] = useState(() => Number(localStorage.getItem('counterBad')) || 0);

  useEffect(() => {
    localStorage.setItem('counterGood', counterGood);
    localStorage.setItem('counterNeutral', counterNeutral);
    localStorage.setItem('counterBad', counterBad);
  }, [counterGood, counterNeutral, counterBad]);

  const handleReset = () => {
    setCounterGood(0);
    setCounterNeutral(0);
    setCounterBad(0);
  };

  return (
    <div>
      <Description />
      <Options
        onGood={() => setCounterGood(prev => prev + 1)}
        onNeutral={() => setCounterNeutral(prev => prev + 1)}
        onBad={() => setCounterBad(prev => prev + 1)}
        onReset={handleReset}
      />
      <Feedback
        counterGood={counterGood}
        counterNeutral={counterNeutral}
        counterBad={counterBad}
      />
    </div>
  );
}

export default App;
