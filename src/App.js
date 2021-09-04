import React from 'react';
import { Router, Route, } from 'react-router-dom';
import { createBrowserHistory } from "history";
import MovieCards from './Component/MovieCards';
import Header from './Component/Header/Header';
import Latest from './Component/Movies/Latest';
import NowPlaying from './Component/Movies/NowPlaying';
import Upcoming from './Component/Movies/Upcoming';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Header />
      <Route exact path="/" component={MovieCards}></Route>
      <Route exact path="/all" component={MovieCards}></Route>
      <Route exact path="/latest_movie" component={Latest}></Route>
      <Route exact path="/now_playing" component={NowPlaying}></Route>
      <Route exact path="/upcoming" component={Upcoming}></Route>
    </Router>
  );
}

export default App;
