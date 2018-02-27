// TODO: Update to include array of rubrics

const rubricsReducer = (state = [], action) => {
  switch (action.type) {
    case 'RUBRICS_INDEX_SUCCESS':
      return action.rubrics
    default:
      return state
  }
}

export default rubricsReducer
