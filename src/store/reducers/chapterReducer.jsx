import * as actionTypes from '../actions/handleBookChapter';

const initialState = {
 data: 'some data'
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_NEW_CHAPTERS:
            return {

            }

        default:
            return state;
    }
}

export default reducer