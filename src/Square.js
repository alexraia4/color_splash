import React, { useState } from 'react';
import './css/Square.css';




export default function Row(props) {

      const [r, setR] = useState(255);
      const [g, setG] = useState(255);
      const [b, setB] = useState(255);

      let changeColor = () =>{
            setR(Math.random()*255);
            setG(Math.random()*255);
            setB(Math.random()*255);
      }      

      return (
            <div className="Square" id={`${props.rIndex}_${props.sIndex}`} onMouseOver={changeColor} style={{backgroundColor: `rgb(${r},${g},${b})`}}/>
      );
}