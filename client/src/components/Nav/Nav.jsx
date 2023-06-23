import React from "react";
// import { ReactComponentElement } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
// import React, { Component } from 'react';
//import style from './SearchBar.module.css';
// import style from '..SearchBar/SearchBar.module.css'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.props.onSearch} />
        <Link to="/">
            <h3>LOGOUT</h3>
        </Link>
        <Link to="/about">
            <h3>ABOUT</h3>
        </Link>
        <Link to="/home">
            <h3>HOME</h3>
        </Link>
        <Link to="/favorites">
            <h3>FAVORITES</h3>
        </Link>
      </div>
    );
  }
}

export default Nav;