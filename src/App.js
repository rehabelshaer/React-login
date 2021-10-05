import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';

class App extends Component{ 
  render(){
    return(
      <BrowserRouter>
      <Route  exact path='/' component ={Login}/>
      <Route path='/home' component ={Home}/>
      </BrowserRouter>
    )
 }
 }
export default App;

