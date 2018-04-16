import serverPath from '../paths';

export const
REQUEST_CREATE_LEARNING_ACTION = 'REQUEST_CREATE_LEARNING_ACTION',
SUCCESS_CREATE_LEARNING_ACTION = 'SUCCESS_CREATE_LEARNING_ACTION',
FAILURE_CREATE_LEARNING_ACTION = 'FAILURE_CREATE_LEARNING_ACTION',
REQUEST_CREATE_OPEN_GRAPH = 'REQUEST_CREATE_OPEN_GRAPH',
SUCCESS_CREATE_OPEN_GRAPH = 'SUCCESS_CREATE_OPEN_GRAPH',
FAILURE_CREATE_OPEN_GRAPH = 'FAILURE_CREATE_OPEN_GRAPH'

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
        return Promise.reject(`Could not create Learning Action: ${res.message}`)
      }
      return res.json();
    }).then((json) => {
      dispatch(successCreateLearningAction(json.action))
    }).catch(err => console.log("There was an error: " + err));
  }
}

export const requestCreateOpenGraph = () => ({
  type: REQUEST_CREATE_OPEN_GRAPH,
  isFetching: true
})

export const successCreateOpenGraph = (action) => ({
  type: SUCCESS_CREATE_OPEN_GRAPH,
  isFetching: false,
  action
})

export const errorCreateOpenGraph = (message) => ({
  type: FAILURE_CREATE_OPEN_GRAPH,
  isFetching: false,
  message
})

// CREATE OPEN GRAPH
export function createOpenGraph(action) {
  let config = {
    method: 'POST',
    body: JSON.stringify(action),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
  console.log("createOpenGraph called!")

  return dispatch => {
    dispatch(requestCreateOpenGraph());
    return fetch(`${serverPath}/opengraph`, config).then((res) => {
      if (res.status !== 200) {
        dispatch(errorCreateOpenGraph(res.message));
        return Promise.reject(`Could not create Open Graph because: ${res.message}`)
      }
      return res.json();
    }).then((json) => {
      dispatch(successCreateOpenGraph(json.action))
    }).catch(err => {
      console.log("There was an error: " + err)
      dispatch(errorCreateOpenGraph(err));
    });
  }
}
