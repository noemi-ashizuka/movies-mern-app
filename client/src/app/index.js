import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components';
import { MoviesList, MovieInsert, MovieUpdate } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/movies/list" exact component={MoviesList} />
        <Route path="/movies/create" exact component={MovieInsert} />
        <Route path="/movies/update/:id" exact component={MovieUpdate} />
      </Switch>
    </Router>
  )
 }

export default App;
