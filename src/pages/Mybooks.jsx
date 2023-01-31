import { useEffect } from 'react';
import axios from 'axios';

import '../components/componentsStyles/MyBooksStyle/mybooks.css'
import ListBook from '../components/ListBook';

function MyBooks() {

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get('https://book-takeaway-df65d-default-rtdb.europe-west1.firebasedatabase.app/booksData.json');
      const bookList = [];
      for(let key in response.data) {
        
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <div className='mybooks-title'>
        <h1>Libri salvati:</h1>
        <ListBook key={ListBook}/>

      </div>
  )
  }
  
  export default MyBooks;