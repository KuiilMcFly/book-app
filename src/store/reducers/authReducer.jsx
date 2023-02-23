import * as actionTypes from '../actions/handleAuth';

const initialState = {
 loading: false,
 error: false,
 token: null,
 userID: null,

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false,
            }

        case actionTypes.AUTH_SUCCESS:
           return {
               ...state,
               token: action.token,
               userID: action.userID,
               loading: false,
               error: false,
           }

        case actionTypes.LOGOUT:
            return {
                ...state,
                token: null,
            }

    
        default:
            return state;
    }
}

export default reducer