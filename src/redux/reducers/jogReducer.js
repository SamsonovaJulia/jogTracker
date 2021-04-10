export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_NEW_JOG":
      return { ...state, jogNew: action.payload };
    default:
      return state;
  }
}
