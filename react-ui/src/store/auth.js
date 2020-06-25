import axios from "axios";
import { toast } from "react-toastify";
import { produce } from "immer";

const initialState = {
  auth: {},
};
//action type

const authRequested = "authRequested";
const authRecieved = "authRecieved";
const authRequestFailed = "authRequestFailed";

//Toast

const notify = (message) => toast(message);

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

export const auth = (data, signInType) => {
  return (dispatch, getState) => {
    // alert("yo4");
    // console.log(data);
    dispatch(authUserRequested());
    if (signInType == "organisation") {
      axios
        .post("https://wallet.sabpaisa.in/sabMeets/ologin", {
          emailId: data.emailId,
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
    } else if (signInType == "user") {
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
    }
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
    if (action.payload.response == "Success") {
      localStorage.setItem("token", "active");
      localStorage.setItem("userMobile", action.payload.mobileNumber);
      localStorage.setItem("userEmail", action.payload.emailId);
      localStorage.setItem("userType", action.payload.userType);
      toast(action.payload.status);
      return {
        ...state,
        loading: false,
        auth: { currentUser: action.payload },
      };
    } else {
      toast(action.payload.status);
      return {
        ...state,
        loading: false,
        auth: { failedAuth: action.payload },
      };
    }
  }
  if (action.type == "authRequestFailed") {
    toast(action.payload.message + "=>Have to enable CORS at Backend ");
    return {
      ...state,
      loading: false,
      auth: { error: action.payload },
    };
  }
  return state;
};

export default authReducer;
