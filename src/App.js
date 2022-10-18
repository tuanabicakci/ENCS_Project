import './App.css';
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Instructions from "./Instructions";
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Troubleshooting from "./Troubleshooting";
import "xp.css/dist/98.css";
import Credits from "./Credits";
import {Tabs} from "react-tabs";

function App() {
  return (
    <div className="App">

        <Router>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/instructions" element={<Instructions/>}/>
            <Route path="/troubleshooting" element={<Troubleshooting/>}/>
            <Route path="/credits" element={<Credits/>}/>

        </Routes>
        </Router>

    </div>
  );
}

export default App;
