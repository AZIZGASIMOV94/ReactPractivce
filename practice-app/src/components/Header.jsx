import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation'

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <Navigation/>
            </nav>
           
        </div>
    );
}

export default Header;

