import { addNewJog } from "../actions/index";

const AddNewJogThunk = (newJog) => {
  return (dispatch) => {
    console.log("datanewJog");
    //   dispatch(toggleLoading(true));
    fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
      method: "POST",
      body: `date=${newJog.date}&time=${newJog.time}&distance=${newJog.distance}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + window.localStorage.access_token,
      },
    })
      .then(async (resp) => {
        const data = await resp.json();
        const formatedDataJog = {
          distance: data.response.distance,
          time: data.response.time,
          date: Math.floor(new Date(data.response.date).valueOf() / 1000) + "",
        };
        dispatch(addNewJog(formatedDataJog));
      })
      .catch((error) => {
        console.log(error);
        //   dispatch(toggleLoading(false));
      });
  };
};
export default AddNewJogThunk;
