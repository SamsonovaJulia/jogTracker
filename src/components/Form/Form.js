import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addNewJog } from "../../redux/actions/index";
import AddNewJogThunk from "../../redux/thunks/jogListTunk";
import "./Form.scss";

function Form({ onClose }) {
  const dispatch = useDispatch();
  const [distance, setDistanse] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  // let jogs = useSelector((state) => state.jogs.jogs);
  // console.log("jogs", jogs);

  const handleSubmit = () => {
    
    // let newId;
    // jogs.forEach((element) => {
    //   const getRundomInt = () => Math.floor(Math.random());
    //   let generatedId = getRundomInt();
    //   if (generatedId !== element.id) {
    //     newId = generatedId;
    //   } else {
    //     getRundomInt();
    //   }
    // });

    const newJog = {
      distance: distance,
      time: time,
      date: date,
    };
    console.log("newJog", newJog);
    dispatch(AddNewJogThunk, newJog);
    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <a href="#" className="close" onClick={() => onClose(false)}></a>
      <div className="formInner">
        <div className="fild">
          <label for="distance">Distance</label>
          <input
            id="distance"
            type="text"
            value={distance}
            name="distance"
            onChange={(e) => setDistanse(e.target.value)}
          />
        </div>
        <div className="fild">
          <label for="time">Time</label>
          <input
            id="time"
            type="text"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="fild">
          <label for="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            placeholder="2018-07-22"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <input type="submit" value="Save" />
      </div>
    </form>
  );
}

export default Form;
