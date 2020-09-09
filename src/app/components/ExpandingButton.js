import Link from "next/link"
import React, { Component } from 'react';

export default class ExpandingButton extends Component {
  constructor(props) {
    super(props);
    this.button = React.createRef();
    this.buttontxt = React.createRef();
    this.buttonbox = React.createRef();
  }


  handleClick() {
    this.button.current.classList.toggle('btn-modal_active');
    this.buttontxt.current.classList.toggle('btntxt-1__active');
    this.buttonbox.current.classList.toggle('osh');
    this.buttonbox.current.classList.toggle('btntxtbox__active');
  }
  
  

  render() {
    return(
        <div className="button-wrapper">
            <div ref={this.button} onClick={() => this.handleClick()} className="button-modal"> 
                <a ref={this.buttontxt} className="btntxt-1__1"> Get Started </a>
                <div ref={this.buttonbox} className="osh btntxtbox__1">
                    <a> Quickstart </a> <br />
                    <hr />
                    <a> Create an Account </a> <br />
                    <hr />
                    <a> I already have a room code </a>
                </div>
            </div>
        </div>
    )
  }
}
