import serverPath from '../paths';
import axios from 'axios';

export const requestAssessments = (userId) => ({
  type: 'REQUEST_ASSESSMENTS',
  isFetching: true
})

export const receiveAssessments = (assessments) => ({
  type: 'ASSESSMENTS_SUCCESS',
  isFetching: false,
  assessments
})

export const assessmentsError = (message) => ({
  type: 'ASSESSMENTS_FAILURE',
  isFetching: false,
  message
})

// GET ASSESSMENTs BY USERID - assessments index
export function getAssessments(userId){
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }

  return dispatch => {
    dispatch(requestAssessments(userId));
    return fetch(`${serverPath}/users/${userId}/assessments`, config).then((res) => {
      if (res.status !== 200) {
        dispatch(assessmentsError(res.message));
        return Promise.reject("Could not get assessments")
      }
      return res.json();
    }).then((json) => {
      console.log("JSON", json)
      dispatch(receiveAssessments(json.assessments))
    }).catch(err => console.log("Error: " + err));
  }
}
