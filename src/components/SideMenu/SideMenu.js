import React, { Component } from 'react';
import './SideMenu.css';
import imgIndicator from '../../assets/side-1.svg';
import imgChat from '../../assets/side-2.svg';
import imgFolder from '../../assets/side-3.svg';
import imgEmail from '../../assets/side-4.svg';
import imgSettings from '../../assets/side-5.svg';

class SideMenu extends Component {
  
  constructor(props) {
      super(props);
  }

  render() {    
    return (
        <aside className="side-menu">
           {/* <ul>
                <li>
                    <a class="item-side-menu">
                        <img src={imgIndicator} alt="imgIndicator"></img>
                    </a>
                </li>   
                <li>
                    <a class="item-side-menu">
                        <img src={imgChat} alt="imgChat"></img>
                    </a>
                </li>
                <li>
                    <a class="item-side-menu">
                        <img src={imgFolder} alt="imgFolder"></img>
                    </a>
                </li>
                <li>
                    <a class="item-side-menu">
                        <img src={imgEmail} alt="imgEmail"></img>
                    </a>
                </li>
                <li>
                    <a class="item-side-menu">
                        <img src={imgSettings} alt="imgSettings"></img>
                    </a>
                </li>  
            </ul> */}
           
            <a class="item-side-menu">
                <img src={imgIndicator} alt="imgIndicator"></img>
            </a>
        
            <a class="item-side-menu">
                <img src={imgChat} alt="imgChat"></img>
            </a>
        
            <a class="item-side-menu">
                <img src={imgFolder} alt="imgFolder"></img>
            </a>
        
            <a class="item-side-menu">
                <img src={imgEmail} alt="imgEmail"></img>
            </a>
        
            <a class="item-side-menu">
                <img src={imgSettings} alt="imgSettings"></img>
            </a>
                   
        </aside>
    );
  }
}

export default SideMenu;





