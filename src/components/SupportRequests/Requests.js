import React, { Component } from 'react';
import axios from "axios";
import './Requests.css';

class Requests extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.slice(0,10);
            this.setState({ users });
        })
    }
    
    render() {
        return (
            <div className="">
                <div className="columns ">
                    <div className="column"> Name </div>
                    <div className="column"> Email </div>
                    <div className="column"> Phone </div>
                    <div className="column"> Website </div>
                    <div className="column"> Status </div>
                </div>
                
                {this.state.users.map(user => 
                    <div key={user.id} className="">
                        <div className=""> 
                            <div className="columns ">
                                <div className="column"> {user.name} </div>
                                <div className="column"> {user.email} </div>
                                <div className="column"> {user.phone} </div>
                                <div className="column"> {user.website} </div>
                                <div className="column"> 
                                    <p className="control">
                                        <a className="button is-primary"> Sent </a>
                                    </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Requests;
