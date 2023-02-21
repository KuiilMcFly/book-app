import * as actionTypes from "../actions/handleBookChapter";

const initialState = {
  chaptersList: [],
  error: false,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHAPTERS_DATA_START:
      return {
        ...state,
        loading: true,
        error: false,   
      };
    case actionTypes.FETCH_CHAPTERS_DATA_SUCCESS:
      return {
        ...state,
        chaptersList: action.chaptersList,
        loading: false,
        error: false,
      };
    case actionTypes.FETCH_CHAPTERS_DATA_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

      case actionTypes.CREATE_NEW_CHAPTER_START:
      return {
        ...state,
        loading: true,
        error: false,   
      };
    case actionTypes.CREATE_NEW_CHAPTER_SUCCESS:
      return {
        ...state,
        chaptersList: [...state.chaptersList, action.newChapter],
        loading: false,
        error: false,
      };
    case actionTypes.CREATE_NEW_CHAPTER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
