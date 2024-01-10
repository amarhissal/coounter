import React  from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {NavLink,Link} from 'react-router-dom';

const Navbar=({user})=> {


    
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><h1>Vidly</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/movies">Movies <span className="sr-only"></span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/customers">Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rentals">Rental</NavLink>
            </li>
           {!user &&(   <React.Fragment>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li> </React.Fragment> )} 

            {user &&(   <React.Fragment>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile"><b>{user.name}</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li> </React.Fragment> )} 
           
          </ul>
        </div>
      </nav>
      
      );
    }

 
export default Navbar;