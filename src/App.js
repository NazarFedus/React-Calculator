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

  function clear(){
    setManipulation('')
    inputRef.current.value = '';
  }

  function btnHandler(e) {
    inputRef.current.value = e.target.value;
  }

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
    clear();
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    setManipulation('');
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
    setManipulation('');
  };

  function clickHandler(e) {
    e.preventDefault();
    // inputRef.current.value += ;
    console.log(e.target.value);
  }

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
        <div>
        <button onClick={clickHandler} value="1">1</button>
        <button onClick={clickHandler} value="2">2</button>
        <button onClick={clickHandler} value="3">3</button>
        <button onClick={clickHandler} value="4">4</button>
        </div>
        <div>
        <button onClick={clickHandler} value="5">5</button>
        <button onClick={clickHandler} value="6">6</button>
        <button onClick={clickHandler} value="7">7</button>
        <button onClick={clickHandler} value="8">8</button>
        </div>
        <button onClick={clickHandler} value="9">9</button>
        <button onClick={clickHandler} value="0">0</button>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={equel}>=</button>

        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
