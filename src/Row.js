import Square from './Square'

import './css/Row.css';

export default function Row(props) {

      let squares = [];
      for (let i = 1; i <= 100; i++) {
            squares.push(<Square rIndex = {props.rIndex} sIndex = {i} key = {i}/>);
      }


      return (
            <div className="Row" id={`${props.rIndex}`}>
                  {squares}
            </div>
      );
}