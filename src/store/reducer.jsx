import * as actionTypes from './action';

const initialState = {
 data: 'some data'
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOK_DATA:
            return initialState
          
    
        default:
            return state;
    }
}

export default reducer