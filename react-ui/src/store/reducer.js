import { combineReducers} from 'redux'

// Import different reducers from different slices in the application
import authReducer from './auth'

import main_reducer from './components/main_reducer'
import drawer_admin_reducer from './components/drawer_admin_reducer'
import drawer_setting_reducer from './components/drawer_setting_reducer'

// import entitiesReducer from './entities'




export default combineReducers({
    auth:authReducer,
    main:main_reducer,
    drawerAd:drawer_admin_reducer,
    drawerSet:drawer_setting_reducer
    // entities:entitiesReducer
});