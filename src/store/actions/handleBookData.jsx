import {googleBooks} from '../../components/Axios'


const FETCH_BOOK_DATA = "FETCH_BOOK_DATA";
const GET_SAVED_BOOKS_IDS = "GET_SAVED_BOOKS_IDS";
const ADD_BOOK = "ADD_BOOK";
const FETCH_SINGLE_BOOK = "FETCH_SINGLE_BOOK";

export const fetchBookData = (inputText) => {
    return async dispatch => {
        const myData = await googleBooks.get(`/?q=${inputText}`);
        dispatch({
            type: FETCH_BOOK_DATA,
            booksData: myData.data,
        })
    }
}

export const addNewBook = (bookName) => {
    return {
        type: ADD_BOOK,
        bookName: bookName,
    }
}


export {
    FETCH_BOOK_DATA,
    FETCH_SINGLE_BOOK,
    GET_SAVED_BOOKS_IDS,
    ADD_BOOK,
    
}