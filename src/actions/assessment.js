import history from '../routers/history';
import serverPath from '../paths';

export const requestAssessment = (id) => ({
  type: 'REQUEST_ASSESSMENT_BY_ID',
  isFetching: true
})

export const receiveAssessment = (assessment) => ({
  type: 'ASSESSMENT_SUCCESS',
  isFetching: false,
  assessment
})

export const assessmentError = (message) => ({
  type: 'ASSESSMENT_FAILURE',
  isFetching: false,
  message
})

// GET ASSESSMENT BY ID - assessments show
export function getAssessmentById(id) {
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
     }
  }

  return dispatch => {
    dispatch(requestAssessment(id));
    console.log("calling dispatch")

    return fetch(`${serverPath}/assessments/${id}`, config).then((res) => {
      console.log(res);
      if (res.status !== 200) {
        dispatch(assessmentError(res.message));
        return Promise.reject("Could not get assessment")
      }
      return res.json();
    }).then((json) => {
      console.log(json);
      dispatch(receiveAssessment(json.assessment))
    }).catch(err => console.log("Error: " + err));
  }
}
