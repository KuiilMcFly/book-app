import { useEffect} from 'react';
import Message from '../components/message';
import '../components/componentsStyles/MyBooksStyle/mybooks.css'
import '../components/componentsStyles/bookItem/bookItem.css'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSavedBooks } from '../store/actions/handleBookData';
import filaBook from "../images/filabook.png"

function MyBooks() {


  const bookData = useSelector(state => state.bookReducer.savedBooks);
  const loading = useSelector(state => state.bookReducer.loading);
  const error = useSelector(state => state.bookReducer.error);
  const token = useSelector(state => state.authReducer.token);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSavedBooks());
  }, [dispatch]);

  
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

  if(!token) {
    return (
      <div className='no-login-box'>
          <p className='no-login-allert'>Effettua il login per salvere i tuoi libri preferiti</p>
          <img src={filaBook} alt="" />
      </div>
    )
  }
    return (
      <div className='mybooks-title'>
        <h1>Libri salvati:</h1>

        {error ? <Message message="Errore di Network"/> : loading ? <Message message="Carico..."/> : <ListBook key={ListBook}/>}
        
      </div>
  )
  }
  
  export default MyBooks;