import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import add from "./add.svg";
import icon from "./icon.svg";
import "./JogsList.scss";
import NoJogs from "../NoJogs/NoJogs";

function JogsList() {
  const jogs = useSelector((state) => state.jogs.jogs);
  const [isAdding, setIsAdding] = useState(false);
  console.log("jogs", jogs);
  const addJog = () => {
    setIsAdding(true);
  };

  return (
    <div className="jogsListWrapper">
      {!jogs && <NoJogs />}
      {jogs && !!jogs.length && (
        <>
          {!isAdding && (
            <>
              <div className="filter">
                <label for="dateFor">Date from </label>
                <input type="date" value="2018-07-22" id="dateFor" />

                <label for="dateTo">Date to </label>
                <input type="date" value="2018-07-22" id="dateTo" />
              </div>
              <div className="jogsList">
                {jogs.map((jogElem) => {
                  return (
                    <div className="jogDescription" key={jogElem.id}>
                      <img src={icon} className="jogIcon" />
                      <div className="description">
                        <p>
                          {new Date(jogElem.date).toLocaleDateString("ru-RU")}
                        </p>
                        <p>
                          <b>Speed: </b>
                          {(jogElem.distance / jogElem.time).toFixed(2)}
                        </p>
                        <p>
                          <b>Distance: </b> {jogElem.distance} km
                        </p>
                        <p>
                          <b>Time: </b> {jogElem.time} min
                        </p>
                      </div>
                    </div>
                  );
                })}
                <button onClick={() => setIsAdding(true)} className="addJog">
                  <img src={add} />
                </button>
              </div>
            </>
          )}
          {isAdding && <Form onClose={setIsAdding} />}
        </>
      )}
    </div>
  );
}

export default JogsList;
