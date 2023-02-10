import { useEffect, useState } from 'react';
import Message from '../components/message';
import {firebase} from '../components/Axios';
import '../components/componentsStyles/MyBooksStyle/mybooks.css'
import '../components/componentsStyles/bookItem/bookItem.css'
import {Link} from 'react-router-dom';

function MyBooks() {

  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    setLoading(true);
    try {
      const response = await firebase.get('booksData.json');
      const bookList = [];
      for(let key in response.data) {
        bookList.push({
          titolo: response.data[key].bookTitle,
          id: response.data[key].bookId,
          img: response.data[key].bookImg,
          key: key,
        })
        console.log('booklist', bookList)
      }
      const uniqueValueBooks = [...new Set(bookList.map(JSON.stringify))].map(JSON.parse);
      console.log(response);
      setBookData(uniqueValueBooks);
      setBookData(bookList);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  const bookItem = (book) => {
    return(
      
      <Link style={{textDecoration: "none"}} state={{ bookKey: book.key}} to={{pathname: `../Book/${book.id}`}}  >
        
        <div key={book.id} className='bookTitle-box'>
          <p>{book.titolo}</p>
          <img src={book.img} alt="" />
        </div>
      </Link>
    )
  }


    const ListBook = () => {
    return bookData.map((item) => {
     return bookItem(item)
     })
 }

    return (
      <div className='mybooks-title'>
        <h1>Libri salvati:</h1>

        {error ? <Message message="Errore di Network"/> : loading ? <Message message="Carico..."/> : <ListBook key={ListBook}/>}
        
      </div>
  )
  }
  
  export default MyBooks;