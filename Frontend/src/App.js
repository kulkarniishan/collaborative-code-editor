import React, {useState} from "react";
import { Route, Routes} from "react-router-dom";
import { axiosInstance } from "./axios.config.";
import Auth from "./components/Auth/Auth";
import Collab from "./components/collab/Collab";

function App() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  // useEffect(() => {
  //   axiosInstance.get('/api/authorized').then(()=>{

  //   })
  //   .catch(()=>{

  //   })
  // }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Auth/>} />
        <Route path="/collab"  element={<Collab/>} />
      </Routes>
    </div>
  );
}

export default App;