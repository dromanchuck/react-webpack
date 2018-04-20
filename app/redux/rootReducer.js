import {combineReducers} from 'redux';
import postsReducer from './modules/posts/postsReducer'

const rootReducer = combineReducers({
    postsReducer
});

export default rootReducer;