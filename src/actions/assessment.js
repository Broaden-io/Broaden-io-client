import serverPath from '../paths';

export const requestAssessment = (userId, rubricId) => ({
  type: 'REQUEST_ASSESSMENT',
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
export function getAssessment(userId, rubricId) {
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
     }
  }

  return dispatch => {
    dispatch(requestAssessment(userId, rubricId));
    return fetch(`${serverPath}/users/${userId}/rubrics/${rubricId}/assessments`, config).then((res) => {
      if (res.status !== 200) {
        dispatch(assessmentError(res.message));
        return Promise.reject("Could not get assessment")
      }
      return res.json();
    }).then((json) => {
      dispatch(receiveAssessment(json.assessment))
    }).catch(err => console.log("Error: " + err));
  }
}
