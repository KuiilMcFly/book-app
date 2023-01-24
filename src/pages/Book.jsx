import axios from 'axios';
import { useState, useEffect} from 'react';
import '../components/componentsStyles/bookStyle/Book.css';
import {useParams} from 'react-router-dom'

function Book(props) {
  const [bookData, setBookData] = useState([])
  const fetchBook = async () => {
    const bookID = props.match.params.id;
    const bookData = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookID}`);
    setBookData(bookData.data.volumeInfo);
    console.log(props)
  }
  useEffect(() => {
    fetchBook();
  }, []);


  
    return (
      <div className='book-informations'>

        <div className="flex-book-box">
          <div className="book-description">
            <h1>{bookData.title}</h1>
            <p>{bookData.desription}</p>
            <h4>Autore: {bookData.authors}</h4>
          </div>

          <div className="bookImages">
              <img src={bookData.imageLinks} alt="" />
          </div>
        </div>

        <div className="chapters-box">

        </div>

      </div>
  )
  }
  
  export default Book;