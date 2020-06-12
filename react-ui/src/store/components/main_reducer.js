const initialState={
    open:false,
    drawerView:'admin',
    profileDetails:false,
    openScheduleMeeting:false,
}


const main_reducer= (state=initialState,action)=>{
    switch(action.type){
        case 'OPEN_DRAWER':
            return{
                ...state,
                open:true
            }
        case 'CLOSE_DRAWER':
            return{
                ...state,
                open:false
            }
        case 'SELECT_DRAWER_ADMINVIEW':
            return{
                ...state,
                drawerView:'admin'
            }
        case 'SELECT_DRAWER_SETTINGVIEW':
            return{
                ...state,
                drawerView:'setting'
            }      
        case 'OPEN_PROFILE_DETAILS':
            return{
                ...state,
                profileDetails:true
            }     
        case 'CLOSE_PROFILE_DETAILS':
            return{
                ...state,
                profileDetails:false
            }      
        case 'OPEN_SCHEDULEMEETING_WINDOW':
            return{
                ...state,
                openScheduleMeeting:true
            }     
        case 'CLOSE_SCHEDULEMEETING_WINDOW':
            return{
                ...state,
                openScheduleMeeting:false
        }
       default: return state
    }
}

export default main_reducer