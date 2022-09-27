import React, {useState} from "react";

function useVisualMode (initial) {
  const[mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  
  function transition(newMode, replace = false) {
    if (!replace) {
      setHistory(prev => [...prev, mode]);
    }    
    setMode(newMode);

  }

  function back() {
    setHistory(prev => {
      const newHistory = [...prev];
      const newMode = newHistory.pop();
      setMode(newMode);
      return newHistory;
    })    
    
  }

  return { mode, transition, back };
}


export default useVisualMode;