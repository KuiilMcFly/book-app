import {useState} from 'react';
import '../style/style.css';
import { googleBooks } from '../components/Axios';

//import SearchBar from './components/SearchBar';
import Result from '../components/result';
import '../components/componentsStyles/SearchbarStyle/searchbar.css'
import Message from '../components/message';

function App() {

  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async ()  => {
    setLoading(true);
    try {
      if(inputText.trim() === "") {
        return
      }
      await setLoading(true);
      const myData = await googleBooks.get(`/?q=${inputText}`);
      await setData(myData.data);
      await setLoading(false);
      setError(false);
      
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
    
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  }

  const showResult = () => {
    if(data.totalItems === 0) {
      return <Message error={true} message= "Ricerca senza risultati"/>
    } else if(data.lenght === 0){
      return <Message message= "Cerca qualcosa"/>
    } else {
      return loading ? <Message message= "carico..."/> : <Result data={data} />
    }
  }

  return (
    <div>
      
      <div className="searchbar-box">
          <div>
              <h1>Cerca un libro</h1>
              <input value={inputText} onChange={handleInput} placeholder='Esempio: Harry Potter e la pietra filosofale' type="text" />
              <button onClick={fetchData}>Cerca</button>
          </div>
      </div>
          {error ? <Message message="Errore di Network"/> :
    loading ? <p>Carico...</p> : showResult()}
    </div>
  );
}

export default App;
