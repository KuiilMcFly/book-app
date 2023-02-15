import { useState, useEffect} from 'react';
import '../components/componentsStyles/bookStyle/Book.css';
import {useLocation, useParams} from 'react-router-dom'
import SingleChapter from '../components/SingleChapter';
import {v4 as uuidv4 } from 'uuid';
import Message from '../components/message';
import { firebase, googleBooks } from '../components/Axios';






function Book() {
  const params = useParams();
  const bookID = params.id;

  
  const location = useLocation();

  console.log(location)
  const bookKey = location.state.bookKey;
  
  
  
  

  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chapterList, setChaptersList] = useState([
    {id: uuidv4()},
    
  ]);



  const fetchBook = async () => {
    setLoading(true);
    try {
    const bookData = await googleBooks.get(`/${bookID}`);
    setBookData(bookData.data.volumeInfo);

    setLoading(false);
    setError(false);
    
       
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true);
    }

  };

  useEffect(() => {
    fetchBook();
    fetchChapterData();
  }, [bookID]);

  const renderChapters = () => {
    return chapterList.map((key, index) => {
   
      return <SingleChapter
      bookName={bookData.title}
      key={key}
      chapterKey={key}
      bookKey={bookKey}
      bookID= {bookID}
      number={index+1}
      /> 
    });
  }
 
  


  const handleInputChange = (e) => {
    setInputText(e.target.value);
}

  const createNewChapter = async (e) => {
    e.preventDefault();
    try {
      const response = await firebase.post(`booksData/${bookKey}/chapters.json`, [inputText]);
      console.log(response);
      const newChapterList = [...chapterList, response.data.name];
      setChaptersList(newChapterList);
      setInputText("");
    } catch (error) {
      console.log(error);
    }
  }

  const fetchChapterData = async () => {
    
    try {
      const response = await firebase.get(`booksData/${bookKey}/chapters.json`);
      const myData = await response.data;
      const chaptersList = [];
      for(let key in myData){
        chaptersList.push(key);
      }
      setChaptersList(chaptersList);
    } catch (error) {
      console.log(error);
    }
  }


  const nextChapterNumber = chapterList.length + 1;

    return error ? <Message message="Errore di Network"/> :
    loading ? <p>Carico...</p> : (
      <div className='book-informations'>

        <div className="flex-book-box">
          <div className="book-description">
            <h1>{bookData.title}</h1>
            <p>{bookData.description}</p>
            <h4>Autore: {bookData.authors}</h4>
          </div>

          <div className="bookImages">
              <img src={bookData.imageLinks.thumbnail} alt="" />
          </div>
        </div>

        <div className="chapters-box">
            {renderChapters()}
            {/*<button onClick={createNewChapter} style={{marginTop: '20px', padding: '6px'}}>
              <img src={PlusIcon} alt="" style={{width: '30px'}} />
    </button>*/}
            <form  onSubmit={createNewChapter}>
              <input onChange={handleInputChange} type="text" value={inputText} placeholder={`aggiungi takeaway al capitolo ${nextChapterNumber}`} />
            </form>
        </div>

      </div>
  )
  }
  
  export default Book;