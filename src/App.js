import logo from './logo.svg';
import './App.css';
import { changeColor } from './main';

function App() {
  useEffect(() => {
    changeColor();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={changeColor}>
          Change color
        </button>
      </header>
    </div>
  );
}

export default App;
