import React from "react";
import { Route, Routes} from "react-router-dom";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Auth/>} />
      </Routes>
    </div>
  );
}

export default App;
