import React, { Component } from 'react'
//import { Redirect } from 'react-router';
//import HomeHome from './Dashboard/HomeHome';
import Navbar from './layouts/Navbar'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            loggedIn : false,
            myData : []
            //errors :[]
        };
        
        //this.handleChange = this.handleChange.bind(this) //our custom method has to be binded 
        this.handleSubmit = this.handleSubmit.bind(this) //binding our custom method to the constructor
      }
      
    componentDidMount(){
        document.title = "Attendance management | Login";
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    /*
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name)
        this.setState({
            [name] : value
        })
    }*/
/*
    handleErrors = () =>{
        const {email,password} = this.state;
        let isValid = true;
        let errors = [];
        if(email.trim().length<1){
            errors['email'] = "Enter your email address";
            isValid = false;
        }
        if(password.trim().length< 6){
            errors['password'] = "Password must be more six characters";
            isValid = false;
        }
        this.setState({errors});
        return isValid;
    }*/

    handleSubmit(e){
       //console.log(e)
        e.preventDefault();
        //const isValid = this.handleErrors();
          
            const url = 'http://localhost:5000/user/login'
            //const {email,password} = this.state;
            fetch(url,{
                method : 'POST',
                headers :{
                    "Accept":"application/json",
                    "Content-type":"application/json"
                },
                body : JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            }).then(response => response.json())
            .then(data => {
                //console.log(data.data)
                if(data){
                    sessionStorage.setItem('userData',JSON.stringify(data));
                    this.setState({loggedIn : true});
                }
            })
            .catch(err => console.log(err))
        
    }
    render() {
        //console.log(this.state.email + " "+ this.state.password);
        const {email,password} = this.state;
        if(this.state.loggedIn){
            window.location.replace('Dashboard/HomeHome')
        }

        return (
           <React.Fragment>
               <Navbar />
               <div className="container attForm">
               <div>
                   <h2>Login</h2>
                   </div>
               <div className="login-form" style={{width:"400px",margin:"auto"}} >
                       <form className="row gy-2 g-3 gx-3 align-items-center" onSubmit={this.handleSubmit} >
                           <div className="form-group">
                               <label>Email</label>
                               <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input type="password" name="password" value={password} className="form-control" onChange={this.handleChange} />
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
