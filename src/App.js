import React from "react";

import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

import { NeuCard } from "neumorphic-ui";

function App() {
  return (
    <div className="wrapper">
      <NeuCard width="100%" height="100%">
        <Header />
        <MemeGenerator />
      </NeuCard>
    </div>
  );
}

export default App;
