import { useState, useEffect} from 'react';
import '../components/componentsStyles/bookStyle/Book.css';
import {useParams} from 'react-router-dom'
import SingleChapter from '../components/SingleChapter';
import PlusIcon from '../images/add.png'
import {v4 as uuidv4 } from 'uuid';
import Message from '../components/message';
import { googleBooks } from '../components/Axios';



function Book() {
  const params = useParams();
  const bookID = params.id

  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [chapterList, setChaptersList] = useState([
    {id: uuidv4()},
    
  ]);



  const fetchBook = async () => {
    setLoading(true);
    try {
    const bookData = await googleBooks.get(`/${bookID}`);
    await setBookData(bookData.data.volumeInfo);
    setLoading(false);
    setError(false);
    console.log(params.id);
       
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true);
    }

  };
  useEffect(() => {
    fetchBook();
  }, [bookID]);

  const renderChapters = () => {
     return chapterList.map((chapter, index) => {
      return <SingleChapter
      bookName={bookData.title}
      key={chapter.id}
      bookID= {bookID}
      chapter={chapter} 
      number={index + 1}
      />
    });
  }

  const addChapter = () => {
    setChaptersList([...chapterList, {id: uuidv4()}]);
  }

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
            <button onClick={addChapter} style={{marginTop: '20px', padding: '6px'}}>
              <img src={PlusIcon} alt="" style={{width: '30px'}} />
            </button>
        </div>

      </div>
  )
  }
  
  export default Book;