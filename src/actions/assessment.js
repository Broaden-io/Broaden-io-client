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

export const requestUpdateAssessment = () => ({
  type: 'REQUEST_UPDATE',
  isFetching: true
})

export const setUpdatedAssessment = (assessment) => ({
  type: 'UPDATE_ASSESSMENT',
  isFetching: false,
  assessment
})

// takes in a criteriaId and an assessment
// sends a call to the backend to update the assessment with the new value
// for the specified criteriaId
// then sends the updated assessment in an action to set the state with
// the updated assessment
export function updateAssesment(assessment, criteriaId){

  // look through the assessment object to find the criteria
  // with the id criteriaId
  // then toggle the answer on that criteria
  // then send the updated assessment object to the backend


}

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
