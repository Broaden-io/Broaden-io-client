import serverPath from '../paths'

export const
    REQUEST_RUBRICS_INDEX = 'REQUEST_RUBRICS_INDEX',
    RUBRICS_INDEX_SUCCESS = 'RUBRICS_INDEX_SUCCESS',
    RUBRICS_FAILURE = 'RUBRICS_FAILURE'

export const requestRubricsIndex = () => {
    return {
        type: REQUEST_RUBRICS_INDEX,
        isFetching: true
    }
}

export const receiveRubricsIndex = (rubrics) => {
    return {
        type: RUBRICS_INDEX_SUCCESS,
        isFetching: false,
        rubrics
    }
}

export const rubricsError = (message) => {
    return {
        type: RUBRICS_FAILURE,
        isFetching: false,
        error: message
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
        return fetch(`${serverPath}/rubrics`, config)
            .then((res) => {
                return res.json();
            }).then((json) => {
                dispatch(receiveRubricsIndex(json))
            }).catch(err => {
                dispatch(rubricsError(err.message));
            });
    }
}
