import * as actionTypes from '../actions/handleBookData';

const initialState = {
 booksData: [],
 savedIDs: [],

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.FETCH_BOOK_DATA:
           return {
               ...initialState,
               booksData: action.booksData,
           }

        case actionTypes.ADD_BOOK:
            return initialState

          
    
        default:
            return state;
    }
}

export default reducer