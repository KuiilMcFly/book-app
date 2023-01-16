import './style/style.css';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import Result from './components/result';

function App() {
  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      
      <div className="searchbar-box">
        <SearchBar/>
      </div>

      <div className="result-box">
        <Result/>
      </div>
      
    </div>
  );
}

export default App;
