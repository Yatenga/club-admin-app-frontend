import React, { Component } from 'react'
import Navbar from './layouts/Navbar'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { userData : []}; //
        this.handleChange = this.handleChange.bind(this) //our custom method has to be binded 
      }

      handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.userData.setState({
            [name] : value
        })
        //[name] : value
    }

    componentDidMount(){
        const url = 'http://localhost:5000/user/signup';
        fetch(url,{
            method : 'POST',
            headers :{
                type :'application/json'
            },
            body : JSON.stringify(this.state.userData)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

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
                               <input className="form-control" onChange={this.handleChange} name="fullname" />
                           </div>
                           <div className="form-group">
                               <label>Email</label>
                               <input type="email" className="form-control" onChange={this.handleChange} name="email" />
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input type="password" className="form-control" onChange={this.handleChange} name="password" />
                           </div>
                           <div className="form-group">
                               <label>Place of Origin</label>
                               <input className="form-control" onChange={this.handleChange} name="place_origin" />
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
