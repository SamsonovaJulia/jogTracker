import { addNewJog } from "../actions/index";

const AddNewJogThunk = (dispatch) => {
  console.log("datanewJog");
  //   dispatch(toggleLoading(true));
  fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
    method: "POST",
    body: "date=\u00272021-03-31\u0027&time=100&distance=100",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + window.localStorage.access_token,
    },
  })
    .then(async (resp) => {
      const data = await resp.json();
      console.log("resp", resp);
      dispatch(addNewJog(data.response));
    })
    .catch((error) => {
      console.log(error);
      //   dispatch(toggleLoading(false));
    });
};

export default AddNewJogThunk;
