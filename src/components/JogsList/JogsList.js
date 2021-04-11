import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import add from "./add.svg";
import icon from "./icon.svg";
import "./JogsList.scss";
import NoJogs from "../NoJogs/NoJogs";

function JogsList() {
  const jogs = useSelector((state) => state.jogs.jogs);
  const isUsingFilter = useSelector(
    (state) => state.filterIsActive.filterIsActive
  );
  const [isAdding, setIsAdding] = useState(false);
  const [dateFrom, setdateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const dateFromUnix = new Date(dateFrom).valueOf();
  const dateToUnix = new Date(dateTo).valueOf();

  const filteredJogs =
    dateFrom && dateTo && dateFromUnix < dateToUnix
      ? jogs.filter((jog) => {
          let date = jog.date * 1000;
          return date >= dateFromUnix && date <= dateToUnix;
        })
      : jogs;

  return (
    <div className="jogsListWrapper">
      {!filteredJogs && <NoJogs />}
      {dateFromUnix > dateToUnix && <p>Check you filter parametrs</p>}
      {filteredJogs && (
        <>
          {!isAdding && (
            <>
              {isUsingFilter && (
                <div className="filter">
                  <label htmlFor="dateFrom">Date from </label>
                  <input
                    type="date"
                    value={dateFrom}
                    id="dateFrom"
                    onChange={(e) => setdateFrom(e.target.value)}
                  />
                  <label htmlFor="dateTo">Date to </label>
                  <input
                    type="date"
                    value={dateTo}
                    id="dateTo"
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                </div>
              )}
              <div className="jogsList">
                {filteredJogs.map((jogElem) => {
                  return (
                    <div className="jogCard" key={jogElem.id}>
                      <img src={icon} className="jogIcon" />
                      <div className="description">
                        <p>
                          {new Date(jogElem.date * 1000).toLocaleDateString(
                            "ru-RU"
                          )}
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
