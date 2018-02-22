export default (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_RUBRIC':
      return {
        isFetching: true,
        errorMessage: ''
      }
    case 'RUBRIC_SUCCESS':
      return {
        isFetching: false,
        errorMessage: '',
        rubric: action.rubric
      }
    case 'RUBRIC_FAILURE':
      return {
        isFetching: false,
        errorMessage: action.message
      }
    default:
      return state
  }
}
