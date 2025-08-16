import "./App.css";
import Message from "./Message";
import Calculator from "./calculator";
function App() {


  return (
    <div>
        <Message />
         <Calculator />
                      
    <div className="cal-grid">
      <div className="op">
        <div className="prev-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span">AC</button>
      <button>DEL</button>
      <button>.</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>0</button>
      <button>÷</button>
      <button className="span">=</button>
    </div>
    </div>
  );
}
export default App;
