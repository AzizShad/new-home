import elmo from './elmo.gif';
import './App.css';
import { ResourceButton } from './Components.js'
import Inventory from './Core.js'

function App() {
  let inventory = new Inventory()
  return (
    <div className="App">
      <header className="App-header">
        <img src={elmo} alt='fire' />
        <ResourceButton resource={inventory.get('branch')}></ResourceButton>
      </header>
    </div>
  );
}

export default App;
