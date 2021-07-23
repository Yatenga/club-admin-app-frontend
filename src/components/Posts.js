import React, { Component, Error } from 'react'


export class Posts extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:null,
            hasError: false
        };
    }

    // componentDidCatch(error, errorInfo) {
    //     // You can also log the error to an error reporting service
    //     logErrorToMyService(error, errorInfo);
    // }

    componentDidMount(){
        fetch('https://my-json-server.typicode.com/typicode/demo/posts').then(
            res=>{
                if(!res.ok) {
                   throw Error("Hi")
                }
                return res.json()
            }
        ).then(
            posts=>this.setState({data : posts})
        ).catch(
            //posts=>this.setState({setErros: err.message})
            err=>posts=>this.setState({setErros: err.message})
            );
     }

    render() {
        return (
            <div>
                {this.state.data && this.state.data.map(post=>{
                    return(
                        //{<div>{ error }</div>}
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Posts
