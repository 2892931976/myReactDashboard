import React, { Component } from 'react';
import './SideMenu.css';

class SideMenu extends Component {
  
  constructor(props) {
      super(props);
  }

  render() {    
    return (
        <aside>
            <ul>
                <li>Eins</li>
                <li>Zwei</li>
                <li>Drei</li>
            </ul>    
        </aside>
    );
  }
}

export default SideMenu;





