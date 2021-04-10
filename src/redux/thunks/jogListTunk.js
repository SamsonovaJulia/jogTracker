import { applyJogs } from "../actions/index";

const JogsListThunk = (dispatch) => {
  //   dispatch(toggleLoading(true));
  fetch("https://jogtracker.herokuapp.com/api/v1/data/sync", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + window.localStorage.access_token,
    },
  })
    .then(async (resp) => {
      const data = await resp.json();
      dispatch(applyJogs(data.response.jogs));
    })
    .catch((error) => {
      console.log(error);
      //   dispatch(toggleLoading(false));
    });
};

export default JogsListThunk;
