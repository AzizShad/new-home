import elmo from './elmo.gif';
import './App.css';
import { ResourceButton } from './Components.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={elmo} alt='fire' />
        <ResourceButton name='Test'></ResourceButton>
      </header>
    </div>
  );
}

export default App;
