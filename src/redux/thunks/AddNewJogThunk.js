import { addNewJog } from "../actions/index";

const AddNewJogThunk = (dispatch, newJog) => {
  console.log("datanewJog", newJog);
  //   dispatch(toggleLoading(true));
  fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
    method: "POST",
    body: newJog,
    headers: {
      Accept: "application/json",
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
