import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
 
    render() {
        return (
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container">
                   <Link to="/" className="navbar-brand">
                       Logo
                   </Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#attendance">
                       <span className="navbar-toggler-icon" />
                   </button>
                   <div className="collapse navbar-collapse" id="attendance">
                       <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                               <Link to="/" className="nav-link">Home</Link>
                           </li>
                           <li className="nav-item">
                               <Link to="/about-us" className="nav-link">About Us</Link>
                           </li>
                           <li className="nav-item">
                               <Link to="/register" className="nav-link">Register</Link>
                           </li>
                           <li className="nav-item">
                               <Link to="/login" className="nav-link">Login</Link>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
        );
    }
}


export default Navbar;
/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
     
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
*/