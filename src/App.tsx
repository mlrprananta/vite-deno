import React from "react";
import "./App.css";
import Temperature from "./components/Temperature";

function App() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 text-center max-w-2xl mx-auto">
      <div className="flex flex-col m-4">
        <div className="flex justify-center">
          <h1 className="text-4xl font-medium">Weer?</h1>
        </div>
        <Temperature />
      </div>
      <div className="mx-auto">
        <p className="m-2">
          What is love?
        </p>
        <iframe
          className="aspect-video rounded-md w-full"
          src="https://www.youtube.com/embed/HEXWRTEbj1I"
        />
      </div>
    </section>
  );
}

export default App;
