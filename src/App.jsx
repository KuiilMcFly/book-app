import {useState} from 'react';
import './style/style.css';
import Header from './components/header';
//import SearchBar from './components/SearchBar';
import Result from './components/result';
import axios from 'axios';
import './components/componentsStyles/SearchbarStyle/searchbar.css'
import Message from './components/message';

function App() {

  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async ()  => {
    if(inputText.trim() === "") {
      return
    }
    await setLoading(true);
    const myData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputText}`);
    await setData(myData.data);
    await setLoading(false);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  }

  const showResult = () => {
    if(data.totalItems === 0) {
      return <Message message= "Ricerca senza risultati"/>
    } else if(data.lenght === 0){
      return <Message message= "Cerca qualcosa"/>
    } else {
      return loading ? <Message message= "carico..."/> : <Result data={data} />
    }
  }

  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      
      <div className="searchbar-box">
          <div>
              <h1>Cerca un libro</h1>
              <input value={inputText} onChange={handleInput} placeholder='Esempio: Harry Potter e la pietra filosofale' type="text" />
              <button onClick={fetchData}>Cerca</button>
          </div>
      </div>
          {showResult()}
    </div>
  );
}

export default App;
