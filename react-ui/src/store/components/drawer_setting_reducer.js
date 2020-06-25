const initialState={
    openSettingTab:true,
    openSetting:false,
    openSetting:false,
    openSettingTab:true
}

//action type
const HANDLE_SETTING_TAB= 'HANDLE_SETTING_TAB'
const OPEN_SETTING_WINDOW='OPEN_SETTING_WINDOW'
const CLOSE_SETTING_WINDOW='CLOSE_SETTING_WINDOW'

//actions
export function handleSettingTab(){
    return{
        type:HANDLE_SETTING_TAB  
    }
}

export function settingWindowOpen(){
    return{
        type:OPEN_SETTING_WINDOW
    }
}

export function settingWindowClose(){
    return{
        type:CLOSE_SETTING_WINDOW 
    }
}

//reducers
export const  drawer_setting_reducer= (state=initialState, action)=>{
    switch(action.type){
        case HANDLE_SETTING_TAB:
            const currentHandleSetting=state.openSettingTab
            return{
                ...state,
                openPrivateGroupTab:!currentHandleSetting
            }
        case OPEN_SETTING_WINDOW:
            return{
                ...state,
                openSetting:true
            }
        case CLOSE_SETTING_WINDOW:
            return{
                ...state,
                openSetting:false
            }
        default: return state
    }
}


