// TODO: Update to include array of rubrics

const rubricsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RUBRICS_INDEX_SUCCESS':
      return {
        ...state,
        rubrics: [...action.rubrics]
      }
    case 'RUBRICS_FAILURE':
      return {
        ...state
      }
    case 'REQUEST_RUBRICS_INDEX':
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}

export default rubricsReducer
