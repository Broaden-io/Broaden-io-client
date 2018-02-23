export default (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_MINI_SIDEBAR':
      return {...state, sidebarIsMini: !action.sidebarIsMini}
    default:
      return {...state}
  }
}
