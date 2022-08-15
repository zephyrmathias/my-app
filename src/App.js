import { Link } from 'react-router-dom';
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
        <Link to="/test/1">
          go to test/1
        </Link>
        <Link to="/test/2">
          go to test/2
        </Link>
        <Link to="/test/3">
          go to test/3
        </Link>
        <button onClick={() => onClick()}>click</button>
      </header>
    </div>
  );
}

export default App;
