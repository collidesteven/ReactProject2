import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';
import PostItem from './components/postItem';
import NotFound from './components/404';
import Conditional from './components/conditional';

const App = () =>(
  <BrowserRouter>
    <header>
      <NavLink to="/" exact activeStyle={{color:'red'}} activeClassName="selected">Home</NavLink><br/>
      <NavLink to="/posts" exact activeStyle={{color:'red'}}>Posts</NavLink><br/>
      <NavLink to="/profile" exact activeStyle={{color:'red'}}>Profile</NavLink><br/>
      <NavLink to="/conditional" exact activeStyle={{color:'red'}}>Conditional</NavLink><br/>
    </header>

    <br/><br/>


    <Route path="/" exact component={Home}/>
    <Route path="/posts" exact component={Posts}/>
    <Route path="/profile" exact component={Profile}/>
    <Route path="/conditional" exact component={Conditional}/>
    <Route path="/posts/:id" exact component={PostItem}/>
    <Route component={NotFound}/>

    <footer>Footer</footer>
  </BrowserRouter>

)

ReactDOM.render(<App />, document.getElementById('root'));
