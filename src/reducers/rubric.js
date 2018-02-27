export default (state = {}, action) => {
  switch (action.type) {
    case 'RUBRIC_SUCCESS':
      return action.rubric
    case 'RUBRIC_FAILURE':
      return {
        errorMessage: action.message
      }
    default:
      return state
  }
}
