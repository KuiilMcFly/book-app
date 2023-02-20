import {useState} from 'react';
import '../style/style.css';
import { fetchBookData, addNewBook } from '../store/actions/handleBookData';
//import SearchBar from './components/SearchBar';
import Result from '../components/result';
import '../components/componentsStyles/SearchbarStyle/searchbar.css'
import Message from '../components/message';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const [inputText, setInputText] = useState("");
  


  const data = useSelector(state => state.bookReducer.booksData);
  const savedIDs = useSelector(state => state.bookReducer.savedIDs);
  const error = useSelector(state => state.bookReducer.error);
  const loading = useSelector(state => state.bookReducer.loading);



  const dispatch = useDispatch();


  //Prendere dati dei libri cercati dall'utente
  const fetchData = ()  => {
      dispatch(fetchBookData(inputText));
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

 
  const addBook = async (savedBooks, id, titolo, immagine) => {
    if(savedBooks.includes(id)){
      alert('Questo libro è già nella tua libreria');
      dispatch(addNewBook('nuovo libro 1'));
      return
    }
    dispatch(addNewBook(id, titolo, immagine));
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
