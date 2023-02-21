import * as actionTypes from "../actions/handleBookTakeAways";

const initialState = {
  takeAwayList: [],
  error:false,
  loading:false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TAKEAWAYS_START:
        return {
            ...state,
            loading: true,
            error: false,
        }

        case actionTypes.FETCH_TAKEAWAYS_SUCCESS:
        return {
            ...state,
            takeAwayList: action.takeAwayData,
            loading: false,
            error: false,
        }

        case actionTypes.FETCH_TAKEAWAYS_FAIL:
        return {
            ...state,
            loading: false,
            error: action.error,
        }

        case actionTypes.PUSH_TAKEAWAYS_START:
            return {
                ...state,
                loading: true,
                error:false
            }
        case actionTypes.PUSH_TAKEAWAYS_SUCCESS:
            return {
                ...state,
                loading: false,
                error:false,
                takeAwayList: [...state.takeAwayList, action.inputText],
            }
        
        case actionTypes.PUSH_TAKEAWAYS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
   
   
    default:
      return state;
  }
};

export default reducer;
