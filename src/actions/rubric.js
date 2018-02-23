import history from '../routers/history';
import serverPath from '../paths';

export const requestRubric = (id) => ({
  type: 'REQUEST_RUBRIC_BY_ID',
  isFetching: true
})

export const receiveRubric = (rubric) => ({
  type: 'RUBRIC_SUCCESS',
  isFetching: false,
  rubric
})

export const rubricError = (message) => ({
  type: 'RUBRIC_FAILURE',
  isFetching: false,
  message
})

// GET RUBRIC BY ID - rubrics show
export function getRubricById(id) {
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded' }
  }

  return dispatch => {
    dispatch(requestRubric(id));
    console.log("calling dispatch")

    return fetch(`${serverPath}/rubrics/${id}`, config).then((res) => {
      console.log(res);
      if (res.status !== 200) {
        dispatch(rubricError(res.message));
        return Promise.reject("Could not get rubric")
      }
      return res.json();
    }).then((json) => {
      console.log(json);
      dispatch(receiveRubric(json.rubric))
    }).catch(err => console.log("Error: " + err));
  }
}
