import React, {Component} from 'react';
import {Switch, Route} from 'react-router'
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Music from "./music/Music";
import Cafes from "./cafes/Cafes";
import Home from "./home/Home";
import NoMatch from "./noMatch/NoMatch";

const ROUTES = [
  {path: '/', exact: true, component: Home},
  {path: '/cafes', exact: true, component: Cafes},
  {path: '/music', exact: true, component: Music},
  {path: '*', component: NoMatch},
];

class MainLayout extends Component {
  render() {
    return <div className='main-wrapper'>
      <Header/>
      <Switch>
        {ROUTES.map((route, index) => (
            <Route key={index} {...route} />
        ))}
      </Switch>
      <Footer/>
    </div>
  }
}

export default MainLayout;