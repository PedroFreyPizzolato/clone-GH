import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>

      <button onClick={() => setCount(0)}>Reiniciar</button>
    </>
  );
}

export default App;