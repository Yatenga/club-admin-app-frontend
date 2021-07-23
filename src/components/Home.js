import React, { Component } from 'react'
import Navbar from './layouts/Navbar';
import Posts from './Posts';

class Home extends Component {

    render() {
        //console.log(this.state.data)
            return (
                    <React.Fragment>
                        <Navbar/>
                        <div className="container">
                            <h1>Data from server</h1>
                            <Posts title={this.props.title}  />
                         </div>
                    </React.Fragment>
            )
    }
}

export default Home

/*
if (this.state.error && this.state.errorInfo) {
    return (
      <div>
        <p>Caught an Error: {this.state.error.toString()}</p>
        <div>
          {this.state.errorInfo.componentStack}
        </div>
      </div>
    );
    */
