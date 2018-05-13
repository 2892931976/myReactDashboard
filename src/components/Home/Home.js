import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../../actions/index.js";
import './Home.css';
import Requests from "../SupportRequests/Requests";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="container section-cont">
                <h1 className="section-title">Data overview</h1>
                <div className="home-cont">
                    <Requests></Requests>
                </div>
            </section>
        );
    }
}

export default Home;





