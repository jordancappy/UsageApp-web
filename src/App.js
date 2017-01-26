import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Services from './components/Services/Services';
import Invoices from './components/Invoices/Invoices';
import Tickets from './components/Tickets/Tickets';
import Orders from './components/Orders/Orders';
import NotFound from './components/NotFound';

require('./Main.styl')
require('./images/wow.svg')

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="services" component={Services} />
    <Route path="invoices" component={Invoices} />
    <Route path="tickets" component={Tickets} />
    <Route path="orders" component={Orders} />
    <Route path="*" component={NotFound} />
  </Route>
)


export default class App extends Component {
  render() {
    return (
    <Router history={browserHistory} key={Math.random()}>
      {routes}
    </Router>
    );
  }
}
