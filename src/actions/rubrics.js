import serverPath from '../paths';

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

    return fetch(`${serverPath}/rubrics`, config).then((res) => {
      if (res.status !== 200) {
        dispatch(rubricError(res.message));
        return Promise.reject("Could not get rubrics index")
      }
      return res.json();
    }).then((json) => {
      dispatch(receiveRubricsIndex(json))
    }).catch(err => {
      alert('There was an error: ', err)
    });
  }
}
