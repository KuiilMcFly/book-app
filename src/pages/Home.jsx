import {useState, useEffect} from 'react';
import '../style/style.css';
import { googleBooks, firebase } from '../components/Axios';

//import SearchBar from './components/SearchBar';
import Result from '../components/result';
import '../components/componentsStyles/SearchbarStyle/searchbar.css'
import Message from '../components/message';
import { useSelector } from 'react-redux';

function App() {

  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [savedIDs, setSavedIDs] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const reduxData = useSelector(state => state);

  console.log('dati da redux', reduxData);


  //Prendere dati dei libri cercati dall'utente
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
  };


  //Prendere Id dei libri salvati
  const getSavedBooksID = async () => {
    try {
      const response = await firebase.get('booksData.json');
      const data = response.data;
      const allIDs = [];
      for(let key in data) {
        allIDs.push(data[key].bookId);
      }
     setSavedIDs(allIDs);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getSavedBooksID();
  }, [])


  const addBook = async (savedBooks, id, titolo, immagine) => {
    if(savedBooks.includes(id)){
      alert('Questo libro è già nella tua libreria');
      return
    }

    try {
      const data = await firebase.post("booksData.json",
     {
      bookId: id,
      bookTitle: titolo,
      bookImg: immagine,
    }); 
    await getSavedBooksID();
    console.log(data);
    setLoading(false);
    setError(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true)
    } 
  };

  
 
  

  const showResult = () => {
    if(data.totalItems === 0) {
      return <Message error={true} message= "Ricerca senza risultati"/>
    } else if(data.lenght === 0){
      return <Message message= "Cerca qualcosa"/>
    } else {
      return loading ? <Message message= "carico..."/> : <Result addBook={addBook} savedIDs={savedIDs} data={data} />
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
