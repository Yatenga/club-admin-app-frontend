import React, { Component } from 'react'
import Navbar from './layouts/Navbar'

export class Login extends Component {
    render() {
        return (
           <React.Fragment>
               <Navbar />
               <div className="container attForm">
               <div>
                   <h2>Login</h2>
                   </div>
               <div className="login-form" style={{width:"400px",margin:"auto"}} >
                       <form className="row gy-2 g-3 gx-3 align-items-center">
                           <div className="form-group">
                               <label>Email</label>
                               <input type="email" className="form-control" />
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input type="password" className="form-control" />
                           </div>
                           <div className="col-auto">
                               <button type="submit" className="btn btn-primary">Login</button>
                           </div>
                       </form>
                   </div>
               </div>
           </React.Fragment>
        )
    }
}

export default Login
