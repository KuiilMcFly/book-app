import {useEffect} from 'react';
import './style/style.css';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import Result from './components/result';
import axios from 'axios';

function App() {

  const fetchData = async ()  => {
    const myData = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');
    console.log(myData);
  }
  
  useEffect(() => {
    fetchData();
  }, [])


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
