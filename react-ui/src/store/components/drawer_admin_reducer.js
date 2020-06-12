const initialState={
    openProfile: false,
    openOrganization:false,
    openSubgroup:false,
    openDM:false,
    openRequest:false,
    openOrganizationTab:false,
    openSubgroupTab:false,
    openDMTab:false,
    openProfileTab:false,
    openRequestTab:false,
    openAdminGroupTab:false,
    openPrivateGroupTab:false,
    organizationList:[
        {OrgID:1,
        OrgName:'SabPaisa'
        },
        {OrgID:2,
        OrgName:'SabLends'}
    ]
}

const drawer_admin_reducer= (state=initialState, action)=>{
    switch(action.type){
        case 'OPEN_PROFILE_WINDOW':
            return{
                ...state,
                openProfile:true
            }
        case 'CLOSE_PROFILE_WINDOW':
            return{
                ...state,
                openProfile:false
            }
        case 'OPEN_REQUEST_WINDOW':
            return{
                ...state,
                openRequest:true
            }
        case 'CLOSE_REQUEST_WINDOW':
            return{
                ...state,
                openRequest:false
            }
        case 'OPEN_ORGANIZATION_WINDOW':
            return{
                ...state,
                openOrganization:true
            }
        case 'CLOSE_ORGANIZATION_WINDOW':
            return{
                ...state,
                openOrganization:false
            }
        case 'OPEN_DM_WINDOW':
            return{
                ...state,
                openDM:true
            }
        case 'CLOSE_DM_WINDOW':
            return{
                ...state,
                openDM:false
            }
        case 'OPEN_SUBGROUP_WINDOW':
            return{
                ...state,
                openSubgroup:true
            }
        case 'CLOSE_SUBGROUP_WINDOW':
            return{
                ...state,
                openSubgroup:false
            }
        case 'HANDLE_ORGANIZATION_TAB':
            const currentOrganizationTab=state.openOrganizationTab
            return{
                ...state,
                openOrganizationTab:!currentOrganizationTab
            }
        case 'HANDLE_SUBGROUP_TAB':
            const currentSubgroupTab=state.openSubgroupTab
            return{
                ...state,
                openSubgroupTab:!currentSubgroupTab
            }
        case 'HANDLE_DM_TAB':
            const currentDMTAb=state.openDMTab
            return{
                ...state,
                openDMTab:!currentDMTAb
            }
        case 'HANDLE_PROFILE_TAB':
            const currentProfileTab=state.openProfileTab
            return{
                ...state,
                openProfileTab:!currentProfileTab
            }
        case 'HANDLE_REQUEST_TAB':
            const currentRequestTab=state.openRequestTab
            return{
                ...state,
                openRequestTab:!currentRequestTab
            }
        case 'HANDLE_ADMINGROUP_TAB':
            const currentAdminGroupTab=state.openAdminGroupTab
            return{
                ...state,
                openAdminGroupTab:!currentAdminGroupTab
            }
        case 'HANDLE_PRIVATEGROUP_TAB':
            const currentProfileGroupTab=state.openPrivateGroupTab
            return{
                ...state,
                openPrivateGroupTab:!currentProfileGroupTab
            }
        case 'GET_ORGANISATION_LIST':
            return {
                ...state
            }
        default: return state
    }
}

export default drawer_admin_reducer