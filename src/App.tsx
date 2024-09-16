// src/App.tsx
import React from "react";
import "./App.css"; // Optional: If you want to keep styles from the default template
import ArtworkTable from "./components/ArtworkTable"; // Import the ArtworkTable component

const App: React.FC = () => {
  return (
    <div className="App">
      <h1></h1>
      <ArtworkTable /> {/* Render the ArtworkTable component */}
    </div>
  );
};

export default App;
