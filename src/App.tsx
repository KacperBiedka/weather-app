import React from "react";
import "./App.scss";
import WeatherMap from "./components/WeatherMap/WeatherMap";

const App: React.FC = () => {
  return (
    <div className="App" data-test="app-container">
      <WeatherMap />
    </div>
  );
};

export default App;
