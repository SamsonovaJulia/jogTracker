import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddNewJogThunk from "../../redux/thunks/AddNewJogThunk";
import "./Form.scss";

function Form({ onClose }) {
  const dispatch = useDispatch();
  const [distance, setDistanse] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("2017-06-01");

  const handleSubmit = () => {
    const newJog = {
      distance: parseFloat(distance, 10),
      time: parseInt(time),
      date: date,
    };
    dispatch(AddNewJogThunk(newJog));
    onClose(false);
  };

  return (
    <form>
      <a href="#" className="close" onClick={() => onClose(false)}></a>
      <div className="formInner">
        <div className="fild">
          <label htmlFor="distance">Distance</label>
          <input
            id="distance"
            type="text"
            value={distance}
            name="distance"
            onChange={(e) => setDistanse(e.target.value)}
          />
        </div>
        <div className="fild">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="text"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="fild">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <input type="button" onClick={handleSubmit} defaultValue="Save" disabled={!distance || !time}/>
        <input
          type="button"
          onClick={() => onClose(false)}
          defaultValue="Close"
        />
      </div>
    </form>
  );
}

export default Form;
