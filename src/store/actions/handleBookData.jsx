import { googleBooks, firebase } from "../../components/Axios";

const FETCH_BOOK_DATA = "FETCH_BOOK_DATA";
const GET_SAVED_BOOKS_IDS = "GET_SAVED_BOOKS_IDS";
const ADD_BOOK = "ADD_BOOK";
const FETCH_SINGLE_BOOK = "FETCH_SINGLE_BOOK";

const FETCH_BOOK_DATA_START = "FETCH_BOOK_DATA_START";
const FETCH_BOOK_DATA_SUCCESS = "FETCH_BOOK_DATA_SUCCESS";
const FETCH_BOOK_DATA_FAIL = "FETCH_BOOK_DATA_FAIL";

const FETCH_SAVED_BOOKS_START = "FETCH_SAVED_BOOKS_START";
const FETCH_SAVED_BOOKS_SUCCESS = "FETCH_SAVED_BOOKS_SUCCESS";
const FETCH_SAVED_BOOKS_FAIL = "FETCH_SAVED_BOOKS_FAIL";

export const fetchBookData = (inputText) => {
  if (inputText.trim() === "") {
    return;
  }
  return async (dispatch) => {
    dispatch(fetchBookDataStart());
    try {
      dispatch(getSavedBooksIDs());
      const myData = await googleBooks.get(`/?q=${inputText}`);
      dispatch({
        type: FETCH_BOOK_DATA,
        booksData: myData.data,
      });
      dispatch(fetchBookDataSuccess(myData.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchBookDataFail(error));
    }
  };
};

export const fetchBookDataStart = () => {
  return {
    type: FETCH_BOOK_DATA_START,
  };
};

export const fetchBookDataSuccess = (booksData) => {
  return {
    type: FETCH_BOOK_DATA_SUCCESS,
    booksData: booksData,
  };
};

export const fetchBookDataFail = (error) => {
  return {
    type: FETCH_BOOK_DATA_FAIL,
    error: error,
  };
};

export const fetchSavedBooks = () => {
  return async (dispatch) => {
    dispatch(fetchSavedBooksStart());
    try {
      const response = await firebase.get("booksData.json");
      const bookList = [];
      for (let key in response.data) {
        bookList.push({
          titolo: response.data[key].bookTitle,
          id: response.data[key].bookId,
          img: response.data[key].bookImg,
          key: key,
        });
      }
      const uniqueValueBooks = [...new Set(bookList.map(JSON.stringify))].map(
        JSON.parse
      );
      dispatch(fetchSavedBooksSuccess(bookList, uniqueValueBooks));
    } catch (error) {
      console.log(error);
      dispatch(fetchSavedBooksFail(error));
    }
  };
};

export const fetchSavedBooksStart = () => {
  return {
    type: FETCH_SAVED_BOOKS_START,
  };
};

export const fetchSavedBooksSuccess = (savedBooks) => {
  return {
    type: FETCH_SAVED_BOOKS_SUCCESS,
    savedBooks: savedBooks,
  };
};

export const fetchSavedBooksFail = (error) => {
  return {
    type: FETCH_SAVED_BOOKS_FAIL,
    error: error,
  };
};

export const getSavedBooksIDs = () => {
  return async (dispatch) => {
    try {
      const response = await firebase.get("booksData.json");
      const data = response.data;
      const allIDs = [];
      for (let key in data) {
        allIDs.push(data[key].bookId);
      }
      dispatch({
        type: GET_SAVED_BOOKS_IDS,
        savedIDs: allIDs,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewBook = (id, titolo, immagine, token) => {
  return async (dispatch) => {
    try {
      const data = await firebase.post(`booksData.json?auth=${token}`, {
        bookId: id,
        bookTitle: titolo,
        bookImg: immagine,
      });
      await dispatch(getSavedBooksIDs());
      console.log(data);
    } catch (error) {
      console.log(error);
      
    }
  };
};

export {
  FETCH_BOOK_DATA,
  FETCH_SINGLE_BOOK,
  GET_SAVED_BOOKS_IDS,
  ADD_BOOK,
  FETCH_BOOK_DATA_START,
  FETCH_BOOK_DATA_SUCCESS,
  FETCH_BOOK_DATA_FAIL,
  FETCH_SAVED_BOOKS_START,
  FETCH_SAVED_BOOKS_SUCCESS,
  FETCH_SAVED_BOOKS_FAIL,
};
