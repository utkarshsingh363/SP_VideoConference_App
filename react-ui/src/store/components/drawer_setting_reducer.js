const initialState={
    openSettingTab:true,
    openSetting:false,
    openSetting:false,
    openSettingTab:true
}


const drawer_setting_reducer= (state=initialState, action)=>{
    switch(action.type){
        case 'HANDLE_SETTING_TAB':
            const currentHandleSetting=state.openSettingTab
            return{
                ...state,
                openPrivateGroupTab:!currentHandleSetting
            }
        case 'OPEN_SETTING_WINDOW':
            return{
                ...state,
                openSetting:true
            }
        case 'CLOSE_SETTING_WINDOW':
            return{
                ...state,
                openSetting:false
            }
        default: return state
    }
}

export default drawer_setting_reducer
