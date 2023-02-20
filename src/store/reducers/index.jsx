import bookReducer from './bookReducer';
import chapterReducer from './chapterReducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
    bookReducer,
    chapterReducer,
});

export default mainReducer
