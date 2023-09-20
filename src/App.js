import React from "react";
import "./styles.css";
import Scratch, { AppStateHOC } from "scratch-gui";

const Shcratch = AppStateHOC(Scratch);
export default function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100wh" }}>
      <h1>🎉Hi Client🎉</h1>
      <p>I am confident that I can provide valuable assistance to you.</p>
      <p>
        If you're interested in connecting with me, please don't hesitate to get
        in touch.
      </p>
      <Shcratch canEditTitle projectId={0} mode="dark" />
    </div>
  );
}
