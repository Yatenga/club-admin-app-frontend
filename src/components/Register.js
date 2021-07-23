import React, { Component } from 'react'
import Navbar from './layouts/Navbar'

class Register extends Component {
    render() {
        return (
           <React.Fragment>
               <Navbar />
               <div className="container attForm">
                   <div>
                   <h2>Register</h2>
                   </div>
                   <div className="register-form" style={{width:"400px",margin:"auto"}} >
                       <form className="row gy-2 g-3 gx-3 align-items-center">
                           <div className="form-group">
                               <label>Fullname</label>
                               <input className="form-control" />
                           </div>
                           <div className="form-group">
                               <label>Email</label>
                               <input type="email" className="form-control" />
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input type="password" className="form-control" />
                           </div>
                           <div className="form-group">
                               <label>Place of Origin</label>
                               <input className="form-control" />
                           </div>
                           <div>
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">Check me out</label>
                           </div>
                           <div className="col-auto">
                               <button type="submit" className="btn btn-primary">Register</button>
                           </div>
                       </form>
                   </div>
               </div>
           </React.Fragment>
        )
    }
}

export default Register
