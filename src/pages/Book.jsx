import axios from 'axios';
import { useState, useEffect} from 'react';
import '../components/componentsStyles/bookStyle/Book.css';
import {useParams} from 'react-router-dom'
import SingleChapter from '../components/SingleChapter';
import PlusIcon from '../images/add.png'
import {v4 as uuidv4 } from 'uuid';



function Book() {
  const params = useParams();
  const bookID = params.id

  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chapterList, setChaptersList] = useState([
    {id: uuidv4()},
    
  ]);



  const fetchBook = async () => {
    const bookData = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookID}`);
    await setBookData(bookData.data.volumeInfo);
    setLoading(false);
    console.log(params.id);
  }
  useEffect(() => {
    fetchBook();
  }, []);

  const renderChapters = () => {
     return chapterList.map((chapter, index) => {
      return <SingleChapter
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

    return loading ? <p>Carico</p> : (
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