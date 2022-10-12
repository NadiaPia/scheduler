import {useState} from "react";

function useVisualMode(initial) {
  const[mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    if (!replace) {
      setHistory(prev => [...prev, mode]);
    }    
    setMode(newMode);
  };
  function back() {
    setMode(history[history.length-1]);
    setHistory(prev => {
      const newHistory = [...prev];
      newHistory.pop();
      return newHistory;
    })
  };
  return { mode, transition, back, history };
}

export default useVisualMode;