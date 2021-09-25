import React, { Component } from 'react'
import Navbar from './layouts/Navbar'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {user : {}, userData : []}; //
        this.handleChange = this.handleChange.bind(this) //our custom method has to be binded 
        this.handleSubmit = this.handleSubmit.bind(this) //binding our custom method to the constructor
      }

    componentDidMount(){
        this.handleSubmit();
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(){
        const url = 'http://localhost:5000/user/login'
        fetch(url,{
            method : 'POST',
            headers :{
                type :'application/json'
            },
            body : JSON.stringify(this.state.userData)
        }).then(response => response.json())
        .then(data => this.user.setState(data))
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.user);
        return (
           <React.Fragment>
               <Navbar />
               <div className="container attForm">
               <div>
                   <h2>Login</h2>
                   </div>
               <div className="login-form" style={{width:"400px",margin:"auto"}} >
                       <form className="row gy-2 g-3 gx-3 align-items-center" method='post' onSubmit={this.handleSubmit} >
                           <div className="form-group">
                               <label>Email</label>
                               <input type="email" className="form-control" name="email" value={this.state.userData.email} onChange={this.handleChange} />
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input type="password" name="password" value={this.state.userData.password} className="form-control" onChange={this.handleChange} />
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
