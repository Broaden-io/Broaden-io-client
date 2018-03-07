export default (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_ASSESSMENT':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'ASSESSMENT_SUCCESS':
      return {
        ...state,
        assessment: action.assessment,
        isFetching: action.isFetching
      }
    case 'ASSESSMENT_FAILURE':
      return {
        ...state,
        errorMessage: action.message,
        isFetching: action.isFetching
      }
    default:
      return {...state}
  }
}
