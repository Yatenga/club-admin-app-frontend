import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export function Private(WrappedComponent){
    let token = null; 
    const user = JSON.parse(window.sessionStorage.getItem("userData"));
    if(!user || (user && user.data) === undefined){
        token = null;
    }else{
        token = user.data.token;
    }
    return class extends Component{
        render(){
            return token ? (<WrappedComponent {...this.props} />):(<Redirect to='/login' />);
        }
    }
}
