import React from 'react';
import Gallery from './gallery';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import details from './Details/details';
import NotFound from './NotFound'
import NavBar from './NavBar/NavBar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

      <h1 className='maintitle'>Kodeflix</h1>
      <br></br><br></br>
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:galleryId' component={details} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
