import { useState } from "react";
import "./App.css";
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Matheus");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponents />
      <p className="my-comp-paragraph">Este tambem e do coponente</p>
      <p>Este parágrad e do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilixado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        CSS dinâmico
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter Classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
