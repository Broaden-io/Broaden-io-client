export default (state = {
  isFetching: true,
  assessmentsObject: []
}, action) => {
  switch (action.type) {
    case 'REQUEST_ASSESSMENTS':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'ASSESSMENTS_SUCCESS':
      console.log("state", state)
      console.log(action)
      return {
        ...state,
        errorMessage: '',
        isFetching: action.isFetching,
        assessmentsObject: action.assessments
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
