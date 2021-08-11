import { ONBOARDING_COMPLETE } from './actions';
const initialState = {
  onboarded: false,
};
function appReducer(state = initialState, action) {
  switch (action.type) {
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