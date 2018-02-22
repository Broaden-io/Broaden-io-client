// TODO: Update to include array of rubrics

export default (state = {
  rubricsList: [
    { name: "" }
  ]
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
        rubricsList: [...state.rubrics, action.rubric]
      }

    case 'RUBRICS_INDEX_SUCCESS':
      return {
        isFetching: false,
        errorMessage: '',
        rubricsList: [action.rubrics]
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
