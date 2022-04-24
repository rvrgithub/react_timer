import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../App.css";

export const Timer =()=>{
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  useEffect(() => {
    counterRef.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 100);
  }, []);
  return (
    <div className="App">
      <h3>counter:{counter}</h3>
      <button
        onClick={() => {
          clearInterval(counterRef.current);
        }}
      >
        Push
      </button>
      <button
        onClick={() => {
          counterRef.current = setInterval(() => {
            setCounter((p) => p + 1);
          }, 100);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setCounter(0)
        }}
      >
        Reset
      </button>
    </div>
  );
}






