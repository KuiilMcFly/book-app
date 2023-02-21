import bookReducer from './bookReducer';
import chapterReducer from './chapterReducer';
import { combineReducers } from 'redux';
import takeAwaysReducer from './takeAwaysReducer'

const mainReducer = combineReducers({
    bookReducer,
    chapterReducer,
    takeAwaysReducer,
});

export default mainReducer
