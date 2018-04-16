import serverPath from '../paths';

export const
REQUEST_CREATE_LEARNING_ACTION = 'REQUEST_CREATE_LEARNING_ACTION',
SUCCESS_CREATE_LEARNING_ACTION = 'SUCCESS_CREATE_LEARNING_ACTION',
FAILURE_CREATE_LEARNING_ACTION = 'FAILURE_CREATE_LEARNING_ACTION'

export const requestCreateLearningAction = () => ({
  type: REQUEST_CREATE_LEARNING_ACTION,
  isFetching: true
})

export const successCreateLearningAction = (action) => ({
  type: SUCCESS_CREATE_LEARNING_ACTION,
  isFetching: false,
  action
})

export const errorCreateLearningAction = (message) => ({
  type: FAILURE_CREATE_LEARNING_ACTION,
  isFetching: false,
  message
})

// CREATE LEARNING ACTION - action create
export function createLearningAction(userId, criteriaId, action) {
  let config = {
    method: 'POST',
    body: JSON.stringify(action),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }

  return dispatch => {
    dispatch(requestCreateLearningAction());

    return fetch(`${serverPath}/criteria/${criteriaId}/actions/create`, config).then((res) => {
      if (res.status !== 200) {
        dispatch(errorCreateLearningAction(res.message));
        return Promise.reject("Could not create Learning Action")
      }
      return res.json();
    }).then((json) => {
      dispatch(successCreateLearningAction(json.action))
    }).catch(err => console.log("There was an error: " + err));
  }
}
