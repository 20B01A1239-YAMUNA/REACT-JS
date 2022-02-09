//import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import logo from './images/logo.png'
import Welcome from './Welcome.js';
//create a component
let college = 'SVECW'
let location = 'BVRM'
function  Welcom(){
    //inline styling
    
    return( <div>
    <h1 style={{backgroundColor:'blue',color:'white'}}>Welcome... HI!!!!!This is YAMUNA SRI</h1>
    <h2>Hello...This is Yamuna Sri</h2>
    <h3>Welcome to {college+'  '+location}</h3>
    {/*using string literals*/}
    <h4>Details:{`${college}`}</h4>
    <div className="mydiv">Hii  this is yamuna sri</div>
    {/*handling images*/}
    <img src={logo}/>
    <img src="./logo192.png"/>
   
    </div>
);
}


//show it to the user
ReactDOM.render(
    //what you want to display
    <>
    <Welcom />
    <Welcome />
    </>,
    //where you want to display
    document.getElementById('root')
)