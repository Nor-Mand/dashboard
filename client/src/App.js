import logo from './logo3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome!
        </p>
        <a
          className="App-link"
          href="https://normandcode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>NOR_CODE</b>
        </a>
      </header>
    </div>
  );
}

export default App;
