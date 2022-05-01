import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Nav.css';


class MainNav extends Component{

    render() {

        

        return(
           <div>
               <div className="nav-border-white">
                   <div className="container">
                       <div className="nav-blue">
                           <div className='logo'>
                               <Link to='/'>
                                   {/* <img src={Logo} alt="Gree Lab"/> */}
                                   <h1 style={{color: 'black'}}>Logo</h1>
                               </Link>
                           </div>
                           <Link to='/form'>
                               <button className="btn">
                                   Start Therapy Now
                               </button>
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default MainNav
