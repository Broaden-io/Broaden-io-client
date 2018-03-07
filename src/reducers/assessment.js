export default (state = {}, action) => {
  switch (action.type) {
    case 'ASSESSMENT_SUCCESS':
      return action.assessment
    case 'ASSESSMENT_FAILURE':
      return {
        errorMessage: action.message
      }
    default:
      return state
  }
}
