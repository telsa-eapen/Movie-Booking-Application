import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';
class Header extends Component
{
    render(){
        return( 
           <div> <div className="header"><img src={logo} className="logo" alt="logo"></img></div>
           </div>
            
        );
    }
}
export default Header;