import React from "react";
import { Title } from "./components/Title";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <Title course="React JS" />

      <Title course="TS e OO" blue />

      <Title course="JS e CSS Pro" />

      <Button blue>
        <i>test</i>
      </Button>
    </div>
  );
}

export default App;
