import React, { Component } from 'react';
// import { connect } from "react-redux";
// import * as actionCreators from "../../actions/index.js";
import './Home.css';
import Graphics from "../Graphics/Graphics";
import Requests from "../SupportRequests/Requests";
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="container section-cont">
              
                <h1 className="section-title">Data overview</h1>
                <div className="state-bar">
                    <div><span></span></div>
                    <p>643 <span> insertions needed to complete</span></p>
                </div>
                
                <div className="white-cont">
                    <Graphics></Graphics>
                    <Requests></Requests>
                </div>

                <div className="footer-num">
                    <p>Showing <span>1</span> to <span>5</span> of 25 elements</p>
                </div>
                
            </section>
        );
    }
}

export default Home;





