export default function (state = {}, action) {
  switch (action.type) {
    case "APPLY_JOGS":
      return { ...state, jogs: action.payload };
    case "ADD_NEW_JOG":
      return { ...state, jogs: [action.payload, ...state.jogs] };
    default:
      return state;
  }
}
