import Link from "next/link"
import React, { Component } from 'react';
import DropdownComponent from "./DropdownComponent"

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.dropDown = React.createRef();
  }

  handleClick() {
    this.dropDown.current.classList.toggle('dropdown-open');
  }

  render() {
    return(
      <div>
  <header>
    <div className="header-contents">
      <div className="header-contents-l2 mobile-flex">
        <a onClick={() => this.handleClick()}><i className="fa fa-bars" aria-hidden="true"></i></a>
      </div>
      <div className="header-contents-l mobile-flex">
        <a className="logo">CommonClasses</a>
        <a> Dashboard </a>
        <a> About </a>
        <a> Get Started </a>
      </div>
      <div className="header-contents-l2 mobile-flex osh">
        <a><i className="fa fa-bars" aria-hidden="true"></i></a>
      </div>
      <div className="header-contents-r">
        <a> Sign Up/Login</a>
      </div>
    </div>
  </header>
  <div ref={this.dropDown} className="dropdown-contents">

      <DropdownComponent name="Dashboard"/>
      <DropdownComponent name="About"/>
      <DropdownComponent name="Get Started"/>
  </div>
  </div>
    )
  }
}
