import React, { Component } from 'react';
import { Link } from 'react-router'
import Navigation from '../Navigation/Navigation'
import titleImage from '../../images/title.png'

const Layout = ({children, alwaysShowNavBar}) => {
  if (alwaysShowNavBar)
    return (
      <main>
        <Navigation />
        {children}
      </main>
    ) 
  else
     return (
      <main>
        {children}
      </main>
    )
}

export default Layout