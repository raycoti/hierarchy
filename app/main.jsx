'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import  ScrollToTop from './components/scrollToTop'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store'
import Root from './components/Root'
import calcContainer from './containers/homeContainer';
import Contact from './containers/contactContainer';
import About from './containers/aboutContainer';
import ArtContaienr from './containers/artContainer';

render (
  <Provider store={store}>
    <Router>
    <div>
    <ScrollToTop >
      <Route component={Root} />
      <Switch>
      <Route exact path ="/" component={calcContainer} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects/:name" component={About} />
      <Route path="/art/:name" component={About} />
      <Route path="/art" component={ArtContaienr} />
      </Switch>
     </ScrollToTop>
    </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)