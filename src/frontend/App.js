import React from 'react';
import Gallery from './gallery';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import details from './Details/details';
import NotFound from './NotFound'
import Toolbar from './Toolbar/Toolbar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <h1 className='maintitle'>Kodflix</h1>
      <Toolbar></Toolbar>
      <br></br>
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
