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
    inputRef.current.value = result;
  }, [result, inputRef])

  useEffect(() => {
    inputRef.current.value = '';
  }, [manipulation])


  function clear(){
    setManipulation('')
    inputRef.current.value = '';
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
      setResult((currentValue * Number(inputRef.current.value)).toFixed(3));
    } else if(manipulation === 'devide') {
      setResult((currentValue / Number(inputRef.current.value)).toFixed(3));
    }
  }

  function resetInput(e) {
    e.preventDefault();
    clear();
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    clear();
  };

  function clickHandler(e) {
    e.preventDefault();
    if(inputRef.current.value === '0') {
      inputRef.current.value = '';
    }
    inputRef.current.value += e.target.value;
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form className="main">

          <p ref={resultRef} style={{color: "white"}}>
          Result: {result}
        </p>


        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div className="container">
          <div>
            <button onClick={clickHandler} value="1">1</button>
            <button onClick={clickHandler} value="2">2</button>
            <button onClick={clickHandler} value="3">3</button>
            <button onClick={clickHandler} value="4">4</button>
            <button onClick={clickHandler} value="5">5</button>
          </div>
          <div>
            <button onClick={clickHandler} value="6">6</button>
            <button onClick={clickHandler} value="7">7</button>
            <button onClick={clickHandler} value="8">8</button>
            <button onClick={clickHandler} value="9">9</button>
            <button onClick={clickHandler} value="0">0</button>
          </div>
          <div>
            <button onClick={plus} className="manipulations">+</button>
            <button onClick={minus} className="manipulations">-</button>
            <button onClick={times} className="manipulations">*</button>
            <button onClick={divide} className="manipulations">/</button>
            <button onClick={equel} className="manipulations">=</button>
          </div>
          <div style={{display: "flex", flexDirection: 'row'}}>
            <button onClick={resetInput}>resetInput</button>
            <button onClick={resetResult}>resetResult</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
