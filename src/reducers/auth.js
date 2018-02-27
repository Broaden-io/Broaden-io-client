

const authDefaultState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: {
    id: localStorage.getItem('userId') ? localStorage.getItem('userId') : "",
    username: localStorage.getItem('username') ? localStorage.getItem('username') : "",
    email: localStorage.getItem('email') ? localStorage.getItem('email') : "",
    firstName: localStorage.getItem('firstName') ? localStorage.getItem('firstName') : "",
    lastName: localStorage.getItem('lastName') ? localStorage.getItem('lastName') : "",
    avatarURL: localStorage.getItem('avatarURL') ? localStorage.getItem('avatarURL') : "",
  }
}

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: ''
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: '',
        user: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: ''
      }
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: 'Could not sign up '
      }
    default:
      return state
  }
}
