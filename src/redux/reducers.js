import { ONBOARDING_COMPLETE, LOGIN, LOGOUT} from './actions';
const initialState = {
  onboarded: false,
  loggedIn: false
};
function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      }
    case LOGOUT:
      return  {
        ...state,
        loggedIn: false
      }
    case ONBOARDING_COMPLETE:
      return {
        ...state,
        onboarded: true
      };
    default:
      return state;
  }
}
export default appReducer;