import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import BarPlot from "./components/BarPlot";
import RadarPlot from "./components/RadarPlot";
import BubblePlot from "./components/BubblePlot";
import MaterialUI from "./components/MaterialUI";
import DryRun from "./components/DryRun";

function App() {
  return (
    <div className="App">
      {/* <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot /> */}
      <RadarPlot />
      <MaterialUI />
      <DryRun />
    </div>
  );
}

export default App;
