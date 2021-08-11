import Row from './Row'

import './css/App.css';

function App() {
      
      let rows = [];
      for (let i = 1; i <= 100; i++) {
            rows.push(<Row rIndex={i} key = {i}/>);
      }

      return (
            <div className="App">
                  {rows}  
            </div>
      );
}

export default App;
