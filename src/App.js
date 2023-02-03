import {
  useState,
  useRef,
  useEffect
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  useEffect(() => {
    inputRef.current.value = '';
  }, [result])

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current.value = "";
  };

  function times(e) {
    // Add the code for the plus function
  };

  function divide(e) {
    // Add the code for the divide function
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          Result: {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>

        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
