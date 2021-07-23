import React, { Component } from 'react'
import Navbar from './layouts/Navbar'

class About extends Component {
    render() {
        return (
           <React.Fragment>
               <Navbar/>
               <div className="container">
                   <h2>This is about page</h2>
               </div>
           </React.Fragment>
        )
    }
}

export default About
