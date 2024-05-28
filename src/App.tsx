import logo from './logo.svg';
import { Movies } from './features/movies/Movies';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Movies />
      </header>
    </div>
  );
}

export default App;
