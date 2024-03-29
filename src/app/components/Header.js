import Link from "next/link"
import React, { Component } from 'react';
import DropdownComponent from "./DropdownComponent"
import { HamburgerSpin } from 'react-animated-burgers'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.dropDown = React.createRef();
    this.header = React.createRef();
    this.title = React.createRef();
  }

  state = {
    isActive : false
  }

  handleClick() {
    this.dropDown.current.classList.toggle('dropdown-open');
    this.title.current.classList.toggle("osh-ani");
    this.header.current.classList.toggle("osh-shadow");
    this.setState({
      isActive: !this.state.isActive
    })
  }
  
  scrolled = e => {
    console.log(e);
  }
  

  render() {
    return(
      <div>
  <header ref={this.header} >
    <div className="header-contents">
      <div className="header-contents-l2 mobile-flex">
        <a onClick={() => this.handleClick()}><HamburgerSpin isActive={this.state.isActive} /></a>
      </div>
      <div className="header-contents-l mobile-flex">
        <a ref={this.title} className="logo">CommonClasses</a>
        <a className="underline"> Dashboard </a>
        <a className="underline">  About </a>
        <a className="underline"> Get Started </a>
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
      <DropdownComponent name="Sign Up"/>
  </div>
  </div>
    )
  }
}
