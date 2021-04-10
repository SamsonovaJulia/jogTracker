import React, { useState, useEffect } from "react";
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
  const [resultJogData, setResultJogData] = useState(jogs);
  const [dateFor, setDateFor] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    new Date(dateFor).toLocaleDateString("ru-RU") >
      new Date(dateTo).toLocaleDateString("ru-RU") && setErrorMessage(true);
    let result = jogs.filter((jog) => {
      var date = new Date(jog.date).toLocaleDateString("ru-RU");
      if (dateFor && dateTo && dateFor < dateTo) {
        setErrorMessage(false);
        return (
          date >= new Date(dateFor).toLocaleDateString("ru-RU") &&
          date <= new Date(dateTo).toLocaleDateString("ru-RU")
        );
      } else {
        return jog;
      }
    });
    setResultJogData(result);
  }, [dateFor, dateTo]);

  return (
    <div className="jogsListWrapper">
      {!resultJogData && <NoJogs />}
      {errorMessage && <p>Check you filter parametrs</p>}
      {resultJogData && !!resultJogData.length && (
        <>
          {!isAdding && (
            <>
              {isUsingFilter && (
                <div className="filter">
                  <label htmlFor="dateFor">Date from </label>
                  <input
                    type="date"
                    value={dateFor}
                    id="dateFor"
                    onChange={(e) => setDateFor(e.target.value)}
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
                {resultJogData.map((jogElem) => {
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
