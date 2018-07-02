import serverPath from '../paths';
import axios from 'axios';

export const
REQUEST_RUBRIC_BY_ID = 'REQUEST_RUBRIC_BY_ID',
RUBRIC_SUCCESS = 'RUBRIC_SUCCESS',
RUBRIC_FAILURE = 'RUBRIC_FAILURE',
CREATE_RUBRIC = 'CREATE_RUBRIC',
CREATE_RUBRIC_SUCCESS = 'CREATE_RUBRIC_SUCCESS',
CREATE_RUBRIC_FAILURE = 'CREATE_RUBRIC_FAILURE'

// REQUEST RUBRIC
export const requestRubric = () => ({
  type: REQUEST_RUBRIC_BY_ID,
  isFetching: true
})

export const receiveRubric = (rubric) => ({
  type: RUBRIC_SUCCESS,
  isFetching: false,
  rubric
})

export const rubricError = (message) => ({
  type: RUBRIC_FAILURE,
  isFetching: false,
  message
})

// CREATE NEW RUBRIC
export const createRubric = (id) => ({
  type: CREATE_RUBRIC,
  isFetching: true
})

export const createRubricSuccess = (rubric) => ({
  type: CREATE_RUBRIC_SUCCESS,
  isFetching: false,
  rubric
})

export const createRubricFailure = (message) => ({
  type: CREATE_RUBRIC_FAILURE,
  isFetching: false,
  message
})


// GET RUBRIC BY ID - rubrics show
export function getRubricById(id) {
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }

  return dispatch => {
    dispatch(requestRubric());

    return fetch(`${serverPath}/rubrics/${id}`, config).then((res) => {
      if (res.status !== 200) {
        dispatch(rubricError(res.message));
        return Promise.reject("Could not get rubric")
      }
      return res.json();
    }).then((response) => {
      dispatch(receiveRubric(response.rubric))

    }).catch(err => console.log("Error: " + err));
  }
}

// Create a New Rubric
export function createNewRubric(userId, rubric) {
  return dispatch => {
    dispatch(createRubric());

    return axios.post(`${serverPath}/users/${userId}/rubrics/create`, rubric).then((res) => {
      if (res.status !== 200) {
        dispatch(createRubricFailure(res.message));
        return Promise.reject("Could not create rubric")
      }
      return res.data;
    }).then((response) => {
      console.log('RESPONSE', response.rubric)
      dispatch(createRubricSuccess(response.rubric))
    }).catch(err => console.log("Error: " + err));
  }
}
