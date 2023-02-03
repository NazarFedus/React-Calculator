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
  const [currentValue, setCurrentValue] = useState(0);

  const [manipulation, setManipulation] = useState('');

  useEffect(() => {
    inputRef.current.value = '';
    inputRef.current.focus();
  }, [manipulation])

  function plus(e) {
    e.preventDefault();
    setCurrentValue(Number(inputRef.current.value));
    setManipulation('plus')
  };

  function minus(e) {
    e.preventDefault();
    setCurrentValue(Number(inputRef.current.value));
    setManipulation('minus')
  };

  function times(e) {
    e.preventDefault();
    setCurrentValue(Number(inputRef.current.value));
    setManipulation('multiply')
  };

  function divide(e) {
    e.preventDefault();
    setCurrentValue(Number(inputRef.current.value));
    setManipulation('devide')
  };

  function equel(e) {
    e.preventDefault();
    if(manipulation === 'plus') {
      setResult(currentValue + Number(inputRef.current.value));
    } else if(manipulation === 'minus') {
      setResult(currentValue - Number(inputRef.current.value));
    } else if(manipulation === 'multiply') {
      setResult(currentValue * Number(inputRef.current.value));
    } else if(manipulation === 'devide') {
      setResult(currentValue / Number(inputRef.current.value));
    }
  }

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
        <p>Manipulation: {manipulation}</p>
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
        <button onClick={equel}>=</button>

        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
