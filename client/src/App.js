import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import TimeTable from "./pages/timetable";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={TimeTable} />
      </Router>
    </div>
  );
}

export default App;
