import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';


class Nav extends Component {
    render() {


        return (
            <div className='nav-bg'>
                <div className="nav-border-white">
                    <div className="container">
                        <div className="nav-blue">
                            <Link to='/'>
                                {/* <img src={Logo} alt="Gree Lab"/> */}
                                <h1 style={{color: 'black'}}>Logo</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
