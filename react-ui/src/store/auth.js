import axios from 'axios'

const initialState={
    auth:{}
}
//action type

const authRequested = "authRequested";
const authRecieved = "authRecieved";
const authRequestFailed = "authRequestFailed";


//actions
export const authUserRequested = () => {
  return {
    type: authRequested,
  };
};
export const authUserRecieved = (currentUser) => {
  return {
    type: authRecieved,
    payload: currentUser,
  };
};

export const authUserRequestFailed = (error) => {
  return {
    type: authRequestFailed,
    payload: error,
  };
};

export const auth = (data) => {
  return (dispatch, getState) => {
    // alert("yo4");
    // console.log(data);
    dispatch(authUserRequested());
    axios
      .post("https://wallet.sabpaisa.in/sabMeets/login", {
        mobileNumber: data.mobileNumber,
        password: data.password,
      })
      .then((response) => {
        const currentUser = response.data;
        // alert("yoyoy34");
        dispatch(authUserRecieved(currentUser));
      })
      .catch((error) => {
        const errorMessage = error.message;
        // alert(errorMessage);
        dispatch(authUserRequestFailed(error));
      });
  };
};




//Reducer
const authReducer = (state = initialState, action) => {
   
    if (action.type == "authRequested") {
      return {
        ...state,
        loading: true,
      };
    }
    if (action.type == "authRecieved") {
      if (action.payload.status == "Success") {
        localStorage.setItem('token',action.payload.token)
        return {
          ...state,
          loading: false,
          auth:{currentUser: action.payload} ,
        };
      } else {
        return {
          ...state,
          loading: false,
          auth: { failedAuth: action.payload },
        };
      }
    }
    if (action.type == "authRequestFailed") {
      return {
        ...state,
        loading: false,
        auth: { error: action.payload },
      };
    }
    return state;
  };
  
 export default authReducer