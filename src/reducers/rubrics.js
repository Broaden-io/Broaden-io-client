export default (state = {
  rubric: {
    name:"",
    id: 0
  }
}, action) => {
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
