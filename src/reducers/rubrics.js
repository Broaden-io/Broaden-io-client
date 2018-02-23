// TODO: Update to include array of rubrics

export default (state = [], action) => {
  switch (action.type) {
    case 'RUBRICS_INDEX_SUCCESS':
      return [
        ...action.rubrics
      ]
    case 'RUBRIC_FAILURE':
      return state
    default:
      return state
  }
}
