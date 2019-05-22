import { createStore, combineReducers } from 'redux'
import clientsReducer from '../reducers/clients';
import projectsReducer from '../reducers/projects';

const configureStore = () => {
    const store = createStore(combineReducers({
        clients:clientsReducer,
        projects:projectsReducer
    }))
    return store
}

export default configureStore