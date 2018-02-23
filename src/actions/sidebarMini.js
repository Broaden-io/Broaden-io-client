export const TOGGLE_MINI_SIDEBAR = 'TOGGLE_MINI_SIDEBAR'

export const toggleMiniSidebar = (sidebarIsMini = false) => ({
  type: TOGGLE_MINI_SIDEBAR,
  sidebarIsMini: sidebarIsMini
})

export function toggleSidebar() {
  return dispatch => {
    dispatch(toggleMiniSidebar());
  }
}
