export default function (state = { filterIsActive: false }, action) {
  switch (action.type) {
    case "ACTIVATE_FILTER":
      return { ...state, filterIsActive: action.payload };
    default:
      return state;
  }
}
