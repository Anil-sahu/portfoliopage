import React, { Component } from 'react';
import './App.css';
import './style/style.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './compo/Home';
import Skill from './compo/Skill';
import Certificate from './compo/Certificate';
import Project from './compo/Project';
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>

          <Route path='/' element={< Home />}></Route>
          <Route exact path='/skill' element={< Skill />}></Route>
          <Route exact path='/certificate' element={< Certificate />}></Route>
          <Route exact path='/project' element={< Project />}></Route>


        </Routes>


      </div>
    </Router>
  );
}

export default App;
