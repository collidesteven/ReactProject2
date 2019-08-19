import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';

const App = () =>(
  <BrowserRouter>
    <header>
      <Link to="/">Home</Link><br/>
      <Link to="/posts">Posts</Link><br/>
      <Link to="/profile">Profile</Link><br/>
    </header>
    <br/><br/>
    <Route path="/" exact component={Home}/>
    <Route path="/posts" exact component={Posts}/>
    <Route path="/profile" exact component={Profile}/>
    <footer>Footer</footer>
  </BrowserRouter>

)

ReactDOM.render(<App />, document.getElementById('root'));
