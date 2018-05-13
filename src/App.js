import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Campaigns from './components/Campaigns/Campaigns';
import SideMenu from './components/SideMenu/SideMenu';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app-cont">
        <Header />
        <Route exact = {true} path="/" component = {Home} />
        <Route path = "/campaigns" component = {Campaigns} />
        <Route path = "/analytics" component = {Home} />
        <SideMenu />
      </div>
    );
  }
}

export default App;
