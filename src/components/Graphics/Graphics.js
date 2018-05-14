import React, { Component } from 'react';
import './Graphics.css';

class Graphics extends Component {
    
    render() {
        
        const values = {
            graph1: [{id:1, x:"a", y:50}, {id:2, x:"b", y:20}, {id:3, x:"c", y:100}, {id:4, x:"d", y:50}, {id:5, x:"e", y:70}, {id:6, x:"f", y:40}, {id:7, x:"g", y:40}, {id:8, x:"h", y:50}, {id:9, x:"i", y:60}, {id:10, x:"j", y:80}, {id:11, x:"k", y:40}],
            graph2: [{id:1, x:"a", y:60}, {id:2, x:"b", y:100}, {id:3, x:"c", y:100}, {id:4, x:"d", y:70}, {id:5, x:"e", y:70}, {id:6, x:"f", y:60}, {id:7, x:"g", y:40}, {id:8, x:"h", y:40}, {id:9, x:"i", y:40}, {id:10, x:"j", y:40}, {id:11, x:"k", y:40}],
        }

        return (
            <div className="columns border-gray">
                <div className="column">
                    <div className="graph-cont color-blue">
                        <h1> General results </h1>
                        <p className="graph-txt"> 9.401 <span> Followers</span> </p>
                        <ul className="graph-items "> 
                            {values.graph1.map(val => 
                                <li key={val.id}>
                                    <div style={{ height: (val.y)*50/100 }}></div>
                                    <label>{ val.x }</label>
                                </li>
                            )}
                        </ul>
                        <div className="garph-circle"></div>
                    </div>
                </div> 

                <div className="column">
                    <div className="graph-cont color-red">
                        <h1> Ratings by categoriy </h1>
                        <p className="graph-txt"> 3.900 <span> Followers</span> </p>
                        <ul className="graph-items"> 
                            {values.graph2.map(val => 
                                <li key={val.id} className="">
                                    <div style={{ height: (val.y)*50/100 }}></div>
                                    <label>{ val.x }</label>
                                </li>
                            )}
                        </ul>
                        <div className="garph-circle"></div>
                    </div>
                </div> 

                <div className="column graph-list is-2">
                    <div className="columns is-mobile">
                        <div className="column"> TERM 1 </div>
                        <div className="column"> 3.14 </div>
                    </div> 
                    <div className="columns is-mobile">
                        <div className="column"> TERM 2 </div>
                        <div className="column"> 3.14 </div>
                    </div> 
                    <div className="columns is-mobile">
                        <div className="column"> TERM 3 </div>
                        <div className="column"> 3.14 </div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column"> TERM 4 </div>
                        <div className="column"> 3.14 </div>
                    </div> 
                </div> 

            </div>
        );
    }
}

export default Graphics;
