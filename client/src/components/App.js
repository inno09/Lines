import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Explore from './Explore';
import Authors from './Authors';
import Genre from './Genre';
import Favorites from './Favorites';
import NewPoem from "./NewPoem";
// import PoemsContainer from "./PoemContainer";




function App() {

  


  return (
    <div className="App">
        <div className="Container">
          <div className="Box-1">
            <div>
            </div>
            <Router>
              <Sidebar />
              <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/explore" element={<Explore />} />
                <Route exact path="/authors" element={<Authors />} />
                <Route exact path="/genre" element={<Genre />} />
                <Route exact path="/favorites" element={<Favorites />} />
              </Routes>
            </Router>
          </div>
          
          <div>
            <NewPoem />
          </div>
          
          
        </div>
    </div>
  );
}

export default App;
