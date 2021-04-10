export default function (state = {}, action) {
  switch (action.type) {
    case "APPLY_JOGS":
      return { ...state, jogs: action.payload };
    default:
      return state;
  }
}
