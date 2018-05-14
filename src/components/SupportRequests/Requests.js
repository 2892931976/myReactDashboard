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
            const users = res.data.slice(0,5);
            this.setState({ users });
        })
    }
    
    render() {
        return (
            <div>
                <h1 className="block-title"> Support Requests </h1>
                <div className="columns table-header is-hidden-mobile">
                    <div className="column"> NAME </div>
                    <div className="column"> EMAIL </div>
                    <div className="column"> PHONE </div>
                    <div className="column"> WEBSITE </div>
                    <div className="column"> CITY </div>
                    <div className="column is-1"> STATUS </div>
                </div>
                
                {this.state.users.map(user => 
                    <div key={user.id} className="">
                        <div className="table-columns"> 
                            <div className="columns">
                                <div className="column is-2"> <span className="is-hidden-tablet">NAME: </span>  {user.name} </div>
                                <div className="column is-2"> <span className="is-hidden-tablet">EMAIL: </span> {user.email} </div>
                                <div className="column"> <span className="is-hidden-tablet">PHONE: </span> {user.phone} </div>
                                <div className="column"> <span className="is-hidden-tablet">WEBSITE: </span> {user.website} </div>
                                <div className="column"> <span className="is-hidden-tablet">CITY: </span> {user.address.city} </div>
                                <div className="column is-1"> 
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
