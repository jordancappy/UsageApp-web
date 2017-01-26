import React, { Component } from 'react'

const Tickets = () =>
<div className="container">
  <h1>Tickets</h1>
  <div>
    You have <span className="wow">0</span> unread messages

    <image src={require('../../images/wow.svg')}/>
  </div>
</div>

export default Tickets