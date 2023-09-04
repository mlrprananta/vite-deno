import React from "react";
import "./App.css";
import Temperature from "./components/Temperature";

function App() {
  return (
    <div className="container h-screen mx-auto flex flex-col justify-center">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold py-3">Weather Report</h1>
        <Temperature />
        <p className="py-3">
          What is love?
        </p>
        <iframe
          className="aspect-video h-48 mx-auto"
          src="https://www.youtube.com/embed/HEXWRTEbj1I"
        >
        </iframe>
      </div>
    </div>
  );
}

export default App;
