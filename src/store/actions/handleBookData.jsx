import {googleBooks, firebase} from '../../components/Axios'


const FETCH_BOOK_DATA = "FETCH_BOOK_DATA";
const GET_SAVED_BOOKS_IDS = "GET_SAVED_BOOKS_IDS";
const ADD_BOOK = "ADD_BOOK";
const FETCH_SINGLE_BOOK = "FETCH_SINGLE_BOOK";
const FETCH_BOOK_DATA_START = "FETCH_BOOK_DATA_START";
const FETCH_BOOK_DATA_SUCCESS = "FETCH_BOOK_DATA_SUCCESS";
const FETCH_BOOK_DATA_FAIL = "FETCH_BOOK_DATA_FAIL";

export const fetchBookData = (inputText) => {
    if(inputText.trim() === "") {
        return
      }
    return async dispatch => {
        dispatch(fetchBookDataStart());
        try {
            dispatch(getSavedBooksIDs());
            const myData = await googleBooks.get(`/?q=${inputText}`);
            dispatch({
                type: FETCH_BOOK_DATA,
                booksData: myData.data,
            })
            dispatch(fetchBookDataSuccess(myData.data));
        } catch (error) {
            console.log(error);
            dispatch(fetchBookDataFail(error));
        }
    }
}

export const fetchBookDataStart = () => {
return{
    type: FETCH_BOOK_DATA_START
}
}

export const fetchBookDataSuccess = (booksData) => {
    return{
        type: FETCH_BOOK_DATA_SUCCESS,
        booksData: booksData,
    }
    }

export const fetchBookDataFail = (error) => {
    return{
        type: FETCH_BOOK_DATA_FAIL,
        error: error,
    }
    }



export const getSavedBooksIDs = () => {
    return async dispatch => {
        try {
            const response = await firebase.get('booksData.json');
            const data = response.data;
            const allIDs = [];
            for(let key in data) {
              allIDs.push(data[key].bookId);
            }
           dispatch({
            type: GET_SAVED_BOOKS_IDS,
            savedIDs: allIDs,
           })
          } catch (error) {
            console.log(error);
          }
    }
}

export const addNewBook = (id, titolo, immagine) => {
    return async dispatch => {
        try {
            const data = await firebase.post("booksData.json",
           {
            bookId: id,
            bookTitle: titolo,
            bookImg: immagine,
          }); 
          await dispatch(getSavedBooksIDs());
          console.log(data);
         // setLoading(false);
         // setError(false);
      
          } catch (error) {
            console.log(error);
           // setLoading(false);
            //setError(true)
          } 
    }
}


export {
    FETCH_BOOK_DATA,
    FETCH_SINGLE_BOOK,
    GET_SAVED_BOOKS_IDS,
    ADD_BOOK,
    FETCH_BOOK_DATA_START,
    FETCH_BOOK_DATA_SUCCESS,
    FETCH_BOOK_DATA_FAIL,
    
}