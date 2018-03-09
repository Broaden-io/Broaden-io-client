export default (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_ASSESSMENTS':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'ASSESSMENTS_SUCCESS':
      return {
        errorMessage: '',
        isFetching: action.isFetching,
        assessmentsObject: action.assessment
      }
    case 'ASSESSMENTS_FAILURE':
      return {
        ...state,
        errorMessage: action.message,
        isFetching: action.isFetching
      }
    default:
      return {...state}
  }
}
