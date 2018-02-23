export default rubricReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RUBRIC_SUCCESS':
      return action.rubric
    case 'RUBRIC_FAILURE':
      return state
    default:
      return state
  }
}
