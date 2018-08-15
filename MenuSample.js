import React from 'react';

// This is the top Navigation

const Navigation = () => {
  return(
    <nav className="top-bar" data-topbar role="navigation">
    <ul className="title-area">
      <li className="name">
        <h1><a href="http://www.jekkilekki.com">Jekkilekki</a></h1>
      </li>

      <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
    </ul>

    <section className="top-bar-section">
      <ul className="right">
        <li className="divider"></li>
        <li><a href="#">Code</a></li>
        <li className="divider"></li>
        <li><a href="#">Design</a></li>
        <li className="divider"></li>
        <li><a href="#">Education</a></li>
        <li className="divider"></li>
        <li><a href="#">Life</a></li>
        <li className="divider"></li>
      </ul>
    </section>
  </nav>
  )
}

// Hero Unit

const Hero = () => {
  return(
  <div></div>
  )
}



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // state goes here
    }
  }
    render(){
      return(
        <div>
        <Navigation/>
        </div>
      );
    }
  }
