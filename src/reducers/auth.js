

const authDefaultState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') ? true : false
}

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case 'LOGIN_SUCCESS':
      return {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: ''
      }
    case 'SIGNUP_FAILURE':
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: 'Could not sign up '
      }
    default:
      return state
  }
}
