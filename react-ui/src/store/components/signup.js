import Axios from "axios";
import { produce } from "immer";
import { toast } from "react-toastify";
const notify = (message) => toast(message);

const initialState = {
  apiLoader: false,
  signUpStep1Response: {},
};

//Actions Type

const signUpStep1RequestedAction = "signUpStep1Requested";
const signUpStep1RecievedAction = "signUpStep1Recieved";
const signUpStep1RequestFailedAction = "signUpStep1RequestFailed";

const signUpStep2Requested = "signUpStep2Requested";
const signUpStep2Recieved = "signUpStep2Recieved";
const signUpStep2RequestFailed = "signUpStep2RequestFailed";

// Actions

export const signUpStep1Requested = () => {
  return {
    type: signUpStep1RequestedAction,
  };
};

export const signUpStep1Recieved = (response) => {
  return {
    type: signUpStep1RecievedAction,
    payload: response,
  };
};

export const signUpStep1RequestFailed = (error) => {
  return {
    type: signUpStep1RequestFailedAction,
    payload: error,
  };
};

export const signUpStep1 = (data) => {
  return (dispatch, getState) => {
    dispatch(signUpStep1Requested());
    Axios.post("https://wallet.sabpaisa.in/sabMeets/signup", {
      ...data,
    })
      .then((response) => {
        const response_data = response.data;
        dispatch(signUpStep1Recieved(response_data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(signUpStep1RequestFailed(error));
      });
  };
};
//Reducers

const signUpReducer = (state = initialState, action) => {
  if (action.type == "signUpStep1Requested") {
    return produce(state, (changedState) => {
      changedState.apiLoader = true;
    });
  }
  if (action.type == "signUpStep1Recieved") {
    return produce(state, (changedState) => {
      changedState.signUpStep1Response = action.payload;
    });
  }
  if (action.type == "signUpStep1RequestFailed") {
    toast(action.payload.message);
    return produce(state, (changedState) => {});
  }
  return state;
};

export default signUpReducer;
