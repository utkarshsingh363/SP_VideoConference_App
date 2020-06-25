const initialState={
    open:false,
    drawerView:'admin',
    profileDetails:false,
    openScheduleMeeting:false,
}


//action type
const Open_Drawer='OPEN_DRAWER'
const Close_Drawer='CLOSE_DRAWER'
const Select_Drawer_AdminView='SELECT_DRAWER_ADMINVIEW'
const Select_Drawer_SettingView='SELECT_DRAWER_SETTINGVIEW'
const Open_Profile_Details='OPEN_PROFILE_DETAILS'
const Close_Profile_Details='CLOSE_PROFILE_DETAILS'
const Open_ScheduleMeeting_Window='OPEN_SCHEDULEMEETING_WINDOW'
const Close_ScheduleMeeting_Window='CLOSE_SCHEDULEMEETING_WINDOW'

//actions
export function handleDrawerOpen(){
    return{
        type:Open_Drawer  
    }
}

export function handleDrawerClose(){
    return{
        type:Close_Drawer
    }
}

export function selectDrawerAdminView(){
    return{
        type:Select_Drawer_AdminView
    }
}

export function selectDrawerSettingView(){
    return{
        type:Select_Drawer_SettingView
    }
}

export function openProfileDetails(){
    return{
        type:Open_Profile_Details
    }
}

export function closeProfileDetails(){
    return{
        type:Close_Profile_Details
    }
}


export function scheduleMeetingWindowOpen(){
    return{
        type:Open_ScheduleMeeting_Window
    }
}

export function scheduleMeetingWindowClose(){
    return{
        type:Close_ScheduleMeeting_Window
    }
}


// reducer
export const main_reducer= (state=initialState,action)=>{
    switch(action.type){
        case Open_Drawer:
            return{
                ...state,
                open:true
            }
        case Close_Drawer:
            return{
                ...state,
                open:false
            }
        case Select_Drawer_AdminView:
            return{
                ...state,
                drawerView:'admin'
            }
        case Select_Drawer_SettingView:
            return{
                ...state,
                drawerView:'setting'
            }      
        case Open_Profile_Details:
            return{
                ...state,
                profileDetails:true
            }     
        case Close_Profile_Details:
            return{
                ...state,
                profileDetails:false
            }      
        case Open_ScheduleMeeting_Window:
            return{
                ...state,
                openScheduleMeeting:true
            }     
        case Close_ScheduleMeeting_Window:
            return{
                ...state,
                openScheduleMeeting:false
        }
       default: return state
    }
}
