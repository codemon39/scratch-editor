import React from "react";
import "./styles.css";
import Scratch, { AppStateHOC } from "scratch-gui";

const ScratchEditor = AppStateHOC(Scratch);
export default function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100wh" }}>
      <ScratchEditor canEditTitle projectId={0} mode="dark" />
    </div>
  );
}
