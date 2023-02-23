import bookReducer from './bookReducer';
import chapterReducer from './chapterReducer';
import { combineReducers } from 'redux';
import takeAwaysReducer from './takeAwaysReducer';
import authReducer from './authReducer';

const mainReducer = combineReducers({
    bookReducer,
    chapterReducer,
    takeAwaysReducer,
    authReducer,
});

export default mainReducer
