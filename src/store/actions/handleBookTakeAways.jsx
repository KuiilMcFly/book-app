import { firebase } from "../../components/Axios";



const FETCH_TAKEAWAYS_START = "FETCH_TAKEAWAYS_START";
const FETCH_TAKEAWAYS_SUCCESS = "FETCH_TAKEAWAYS_SUCCESS";
const FETCH_TAKEAWAYS_FAIL = "FETCH_TAKEAWAYS_FAIL";

const PUSH_TAKEAWAYS_START = "PUSH_TAKEAWAYS_START";
const PUSH_TAKEAWAYS_SUCCESS = "PUSH_TAKEAWAYS_SUCCESS";
const PUSH_TAKEAWAYS_FAIL = "PUSH_TAKEAWAYS_FAIL";



export const fetchTakeAways = (chiave, chapterKey) => {
    return async dispatch => {
        dispatch(fetchTakeAwaysStart());
        try {
            const takeAwayData = await firebase.get(
              `booksData/${chiave}/chapters/${chapterKey}.json`
            );
            dispatch(fetchTakeAwaysSuccess(takeAwayData.data));
          } catch (error) {
            dispatch(fetchTakeAwaysFail(error));
            console.log(error);
          }
    }
}

export const fetchTakeAwaysStart = () => {
    return {
      type: FETCH_TAKEAWAYS_START,
    };
  };
  
  export const fetchTakeAwaysSuccess = takeAwayData => {
    return {
      type: FETCH_TAKEAWAYS_SUCCESS,
      takeAwayData: takeAwayData,
    };
  };
  
  export const fetchTakeAwaysFail = (error) => {
    return {
      type: FETCH_TAKEAWAYS_FAIL,
      error: error,
    };
  };




  export const pushTakeAways = (chiave, chapterKey, inputText) => {
    return async (dispatch, getState) => {
        dispatch(pushTakeAwaysStart());
        const takeAwayList = getState().takeAwaysReducer.takeAwayList;
        try {
            const response = await firebase.put(
              `booksData/${chiave}/chapters/${chapterKey}/.json`,
              [...takeAwayList, inputText]
            );
            dispatch(pushTakeAwaysSuccess(inputText));
          } catch (error) {
            dispatch(pushTakeAwaysFail(error));
            console.log(error);
          }
        
    }
}

  export const pushTakeAwaysStart = () => {
    return {
      type:  PUSH_TAKEAWAYS_START,
    };
  };
  
  export const pushTakeAwaysSuccess = inputText => {
    return {
      type:  PUSH_TAKEAWAYS_SUCCESS,
      inputText,
    };
  };
  
  export const pushTakeAwaysFail = (error) => {
    return {
      type:  PUSH_TAKEAWAYS_FAIL,
      error: error,
    };
  };



export {
    FETCH_TAKEAWAYS_START,
    FETCH_TAKEAWAYS_SUCCESS,
    FETCH_TAKEAWAYS_FAIL,
    PUSH_TAKEAWAYS_START,
    PUSH_TAKEAWAYS_SUCCESS,
    PUSH_TAKEAWAYS_FAIL,
}