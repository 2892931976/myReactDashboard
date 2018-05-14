import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
  
    render() {

        let menuActive = this.state.isToggleOn ? 'is-active' : '';

        return (
            <nav className="navbar has-shadow">
                <div className="container">

                    <div className="navbar-brand">
                        <a className="navbar-item" href="">
                            <div className="logo-img"><span></span></div>
                        </a>
                        <div className={'navbar-burger burger ' + menuActive} onClick={this.handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className={'navbar-menu' + menuActive}>
                        <div className="navbar-start">
                            <div className='navbar-item'>
                                <Link to="/" className='navbar-item r-item'> Overview</Link>  
                                <Link to="/campaigns" className='navbar-item r-item'> Campaigns</Link> 
                                <Link to="/analytics" className='navbar-item r-item'> Analytics</Link>
                            </div>  
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <p className="control">
                                    <a className="button is-primary">Premium</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </nav>
        );
    }
}

export default Header;





