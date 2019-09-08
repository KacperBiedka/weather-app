import React from "react";
import "./App.scss";
import WeatherMap from "./components/WeatherMap/WeatherMap";
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App" data-test="app-container">
        <Sidebar />
      <WeatherMap />
    </div>
  );
};

export default App;
