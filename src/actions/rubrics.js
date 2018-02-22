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

export const requestRubricsIndex = () => ({
  type: 'REQUEST_RUBRICS_INDEX',
  isFetching: true
})

export const receiveRubricsIndex = (rubrics) => ({
  type: 'RUBRICS_INDEX_SUCCESS',
  isFetching: false,
  rubrics
})


// RUBRICS INDEX - get all rubrics
export function getRubrics() {
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded' }
  }

  return dispatch => {
    dispatch(requestRubricsIndex());
    console.log("calling dispatch")

    return fetch(`${serverPath}/rubrics`, config).then((res) => {
      console.log(res);
      if (res.status !== 200) {
        dispatch(rubricError(res.message));
        return Promise.reject("Could not get rubrics index")
      }
      return res.json();
    }).then((json) => {
      console.log(json);
      dispatch(receiveRubricsIndex(json.rubrics))
    }).catch(err => console.log("Error: " + err));
  }
}

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
