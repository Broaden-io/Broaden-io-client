import serverPath from '../paths'

export const rubricsError = (message) => {
  return {
    type: 'RUBRICS_FAILURE',
    isFetching: false
  }
}

export const requestRubricsIndex = () => {
  return {
    type: 'REQUEST_RUBRICS_INDEX',
    isFetching: true
  }
}

export const receiveRubricsIndex = (rubrics) => {
  return {
    type: 'RUBRICS_INDEX_SUCCESS',
    isFetching: false,
    rubrics
  }
}

// RUBRICS INDEX - get all rubrics
export function getRubrics() {
  let config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }

  return dispatch => {
    dispatch(requestRubricsIndex());

    return fetch(`${serverPath}/rubrics`, config).then((res) => {
      if (res.status !== 200) {
        dispatch(rubricsError(res.message));
        return Promise.reject("Could not get rubrics index")
      }
      return res.json();
    }).then((json) => {
      console.log('Rubrics in getRubrics()', json)
      dispatch(receiveRubricsIndex(json))
    }).catch(err => {
      alert('There was an error: ', err)
    });
  }
}
