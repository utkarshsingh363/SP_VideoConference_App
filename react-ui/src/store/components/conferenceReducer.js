import Axios from "axios";

const initialState = {
  meetingId: "",
  password: "",
};

//Action Types
const meetingDetailsRequestedType = "meetingDetailsRequested";
const meetingDetailsRecievedType = "meetingDetailsRecieved";
const meetingDetailsFailedType = "meetingDetailsFailed";

//actions

export const meetingDetailsRequested = () => {
  return {
    type: meetingDetailsRequestedType,
  };
};

export const meetingDetailsRecieved = (meetingDetails) => {
  return {
    type: meetingDetailsRecievedType,
    payload: meetingDetails,
  };
};

export const meetingDetailsFailed = (error) => {
  return {
    type: meetingDetailsFailedType,
    payload: error,
  };
};

export const getMeetingDetails = (data) => {
  return (dispatch, getState) => {
    dispatch(meetingDetailsRequested());

    Axios.post("api for sending meeting");
  };
};

//Reducer
