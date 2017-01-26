import React, { Component } from 'react'
import { Link } from 'react-router'
import titleImage from '../../images/title.png'

require('./Navigation.styl')

const Navigation = ({route}) =>
<nav className="nav">
  <Link to="/" className="nav__title">
   <img src={titleImage} value="usage app" />
  </Link>
  <ul>
    <li className={`nav__link ${route == '/services' ? 'nav__link--active' : ''}`}>
      <Link to="/services">
        <h1>services</h1>
      </Link>
    </li>
    <li>
      <Link to="/invoices">
        <h1>invoices</h1>
      </Link>
    </li>
    <li>
      <Link to="tickets">
        <h1>tickets</h1>
      </Link>
    </li>
    <li>
      <Link to="orders">
        <h1>orders</h1>
      </Link>
    </li>
  </ul>
</nav>

export default Navigation