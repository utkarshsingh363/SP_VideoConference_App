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
    ],
    adminGroupList:[
        {AdminGroupID:1,
        AdminGroupName:'Technology'},
        {AdminGroupID:2,
        AdminGroupName:'Product'},
        {AdminGroupID:3,
        AdminGroupName:'Support'}
    ],
    privateGroupList:[
        {PrivateGroupID:1,
        PrivateGroupName:'TaskForce:Sabmeets'},
        {PrivateGroupID:2,
        PrivateGroupName:'TechTeam Daily Report'},
        {PrivateGroupID:3,
        PrivateGroupName:'SabPaisa Informal'}
    ],
    organizationUsers:[
        {
            UserID:1,
            UserName:'Utkarsh Singh',
            availability:'online',
            email:'utkarsh.singh@sablends.in',
            designation:'Trainee Data Science'

        },
        {
            UserID:2,
            UserName:'Ramya Jena',
            availability:'offline',
            email:'ramya.jena@sabpaisa.in',
            designation:'DevOps Engineer'
        },
        {
            UserID:3,
            UserName:'Karan Gupta',
            availability:'busy',
            email:'karan.gupta@sabpaisa.in',
            designation:'Android Developer'
        }
    ],
    requestedUsers:[
        {
            UserID:1,
            UserName:'Mukesh Kumar',
            email:'mukeshKumar@gmail.com',
            designation:'Software Engineer'
        },
        {
            UserID:2,
            UserName:'Shreyansh Vashisth',
            email:'shreyansh@sabpaisa.in',
            designation:'AVP'

        },
        {
            UserID:3,
            UserName:'Amit Tyagi',
            email:'cto@sabpaisa.in',
            designation:'CTO'
        },
        {
            UserID:4,
            UserName:'Kumar Manish',
            email:'ceo@sabpaisa.in',
            designation:'CEO'
        }
    ]
}

//action type
const OPEN_PROFILE_WINDOW='OPEN_PROFILE_WINDOW'
const CLOSE_PROFILE_WINDOW='CLOSE_PROFILE_WINDOW'
const OPEN_REQUEST_WINDOW='OPEN_REQUEST_WINDOW'
const CLOSE_REQUEST_WINDOW='CLOSE_REQUEST_WINDOW'
const OPEN_ORGANIZATION_WINDOW='OPEN_ORGANIZATION_WINDOW'
const CLOSE_ORGANIZATION_WINDOW='CLOSE_ORGANIZATION_WINDOW'
const OPEN_DM_WINDOW='OPEN_DM_WINDOW'
const CLOSE_DM_WINDOW='CLOSE_DM_WINDOW'
const OPEN_SUBGROUP_WINDOW='OPEN_SUBGROUP_WINDOW'
const CLOSE_SUBGROUP_WINDOW='CLOSE_SUBGROUP_WINDOW'
const HANDLE_ORGANIZATION_TAB='HANDLE_ORGANIZATION_TAB'
const HANDLE_SUBGROUP_TAB='HANDLE_SUBGROUP_TAB'
const HANDLE_DM_TAB='HANDLE_DM_TAB'
const HANDLE_PROFILE_TAB='HANDLE_PROFILE_TAB'
const HANDLE_REQUEST_TAB='HANDLE_REQUEST_TAB'
const HANDLE_ADMINGROUP_TAB='HANDLE_ADMINGROUP_TAB'
const HANDLE_PRIVATEGROUP_TAB='HANDLE_PRIVATEGROUP_TAB'
const GET_ORGANISATION_LIST='GET_ORGANISATION_LIST'
const GET_ADMINGROUP_LIST='GET_ADMINGROUP_LIST'
const GET_PRIVATEGROUP_LIST='GET_PRIVATEGROUP_LIST'
const GET_ORGUSERS_LIST='GET_ORGUSERS_LIST'
const GET_REQUESTEDUSERS_LIST='GET_REQUESTEDUSERS_LIST'

//actions
export function profileWindowOpen(){
    return{
        type:OPEN_PROFILE_WINDOW 
    }
}
export function profileWindowClose(){
    return{
        type:CLOSE_PROFILE_WINDOW 
    }
}
export function requestWindowOpen(){
    return{
        type:OPEN_REQUEST_WINDOW 
    }
}
export function requestWindowClose(){
    return{
        type:CLOSE_REQUEST_WINDOW 
    }
}
export function organizationWindowOpen(){
    return{
        type:OPEN_ORGANIZATION_WINDOW
    }
}
export function organizationWindowClose(){
    return{
        type:CLOSE_ORGANIZATION_WINDOW
    }
}
export function dmWindowOpen(){
    return{
        type:OPEN_DM_WINDOW
    }
}
export function dmWindowClose(){
    return{
        type:CLOSE_DM_WINDOW
    }
}
export function subgroupWindowOpen(){
    return{
        type:OPEN_SUBGROUP_WINDOW
    }
}
export function subgroupWindowClose(){
    return{
        type:CLOSE_SUBGROUP_WINDOW
    }
}
export function handleOrganizationTab(){
    return{
        type:HANDLE_ORGANIZATION_TAB
    }
}
export function handleSubgroupTab(){
    return{
        type:HANDLE_SUBGROUP_TAB
    }
}
export function handleDMTab(){
    return{
        type:HANDLE_DM_TAB
    }
}
export function handleProfileTab(){
    return{
        type:HANDLE_PROFILE_TAB
    }
}
export function handleRequestTab(){
    return{
        type:HANDLE_REQUEST_TAB
    }
}
export function handleAdminGrouptTab(){
    return{
        type:HANDLE_ADMINGROUP_TAB
    }
}
export function handlePrivateGroupTab(){
    return{
        type:HANDLE_PRIVATEGROUP_TAB
    }
}
export function getOrganizationList(){
    return{
        type:GET_ORGANISATION_LIST
    }
}
export function getAdminGroupList(){
    return{
        type:GET_ADMINGROUP_LIST
    }
}
export function getPrivateGroupList(){
    return{
        type:GET_PRIVATEGROUP_LIST
    }
}
export function getOrgUsersList(){
    return{
        type:GET_ORGUSERS_LIST
    }
}
export function getRequestedUsersList(){
    return{
        type:GET_REQUESTEDUSERS_LIST
    }
}




//reducers
export const drawer_admin_reducer= (state=initialState, action)=>{
    switch(action.type){
        case OPEN_PROFILE_WINDOW:
            return{
                ...state,
                openProfile:true
            }
        case CLOSE_PROFILE_WINDOW:
            return{
                ...state,
                openProfile:false
            }
        case OPEN_REQUEST_WINDOW:
            return{
                ...state,
                openRequest:true
            }
        case CLOSE_REQUEST_WINDOW:
            return{
                ...state,
                openRequest:false
            }
        case OPEN_ORGANIZATION_WINDOW:
            return{
                ...state,
                openOrganization:true
            }
        case CLOSE_ORGANIZATION_WINDOW:
            return{
                ...state,
                openOrganization:false
            }
        case OPEN_DM_WINDOW:
            return{
                ...state,
                openDM:true
            }
        case CLOSE_DM_WINDOW:
            return{
                ...state,
                openDM:false
            }
        case OPEN_SUBGROUP_WINDOW:
            return{
                ...state,
                openSubgroup:true
            }
        case CLOSE_SUBGROUP_WINDOW:
            return{
                ...state,
                openSubgroup:false
            }
        case HANDLE_ORGANIZATION_TAB:
            const currentOrganizationTab=state.openOrganizationTab
            return{
                ...state,
                openOrganizationTab:!currentOrganizationTab
            }
        case HANDLE_SUBGROUP_TAB:
            const currentSubgroupTab=state.openSubgroupTab
            return{
                ...state,
                openSubgroupTab:!currentSubgroupTab
            }
        case HANDLE_DM_TAB:
            const currentDMTAb=state.openDMTab
            return{
                ...state,
                openDMTab:!currentDMTAb
            }
        case HANDLE_PROFILE_TAB:
            const currentProfileTab=state.openProfileTab
            return{
                ...state,
                openProfileTab:!currentProfileTab
            }
        case HANDLE_REQUEST_TAB:
            const currentRequestTab=state.openRequestTab
            return{
                ...state,
                openRequestTab:!currentRequestTab
            }
        case HANDLE_ADMINGROUP_TAB:
            const currentAdminGroupTab=state.openAdminGroupTab
            return{
                ...state,
                openAdminGroupTab:!currentAdminGroupTab
            }
        case HANDLE_PRIVATEGROUP_TAB:
            const currentProfileGroupTab=state.openPrivateGroupTab
            return{
                ...state,
                openPrivateGroupTab:!currentProfileGroupTab
            }
        case GET_ORGANISATION_LIST:
            return {
                ...state
            }
        case GET_ADMINGROUP_LIST:
            return{
                ...state
            }
        case GET_PRIVATEGROUP_LIST:
            return{
                ...state
            }
        case GET_ORGUSERS_LIST:
            return{
                ...state
            }
        case GET_REQUESTEDUSERS_LIST:
            return{
                ...state
            }
        default: return state
    }
}

