import React from "react";
import { render } from "react-dom";

import Counter from "./Counter";
import Timer from "./Timer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <section>
        <header>
          <h1>Counter Example</h1>
        </header>
        <article>
          <Counter />
        </article>
      </section>
      <section>
        <header>
          <h1>Timer Example</h1>
        </header>
        <article>
          <Timer />
        </article>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
