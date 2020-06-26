import React from "react";

import "./App.css";

//components
import Login from "./components/Login";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
}

export default App;
