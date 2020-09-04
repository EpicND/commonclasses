import Link from "next/link"
import React, { Component } from 'react';

export default class DropdownComponent extends Component {
    render() {
      return(
      <div className="dd-component">{this.props.name}</div>
      )
    }
  }