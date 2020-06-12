import { combineReducers} from 'redux'

// Import different reducers from different slices in the application
import authReducer from './auth'

// import entitiesReducer from './entities'




export default combineReducers({
    auth:authReducer,
    // entities:entitiesReducer
});