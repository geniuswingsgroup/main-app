import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { course_reducer } from '../Reducers/Course-reducer';
import { contact_reducer } from '../Reducers/contact-reducer';

const rootReducer = combineReducers({
course :course_reducer,
contact:contact_reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
