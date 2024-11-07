import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} setCount={setCount} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponent count={count} exponentNo={2} />
        <Exponent count={count} exponentNo={3} />
        <Exponent count={count} exponentNo={4} />
        <Exponent count={count} exponentNo={5} />
        <Exponent count={count} exponentNo={6} />
      </div>
    </div>
  );
}

export default App;
