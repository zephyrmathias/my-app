import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    throw new Error('on click bug')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 123<code>src/App.js</code> and save to reload. test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => onClick()}>click</button>
      </header>
    </div>
  );
}

export default App;
