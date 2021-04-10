import "./Header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import filter from "./filter.svg";
import filterActive from "./filter-active.svg";
import { activateFilter } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [isLogedIn, setIsLogedIn] = useState();

  const isUsingFilter = useSelector(
    (state) => state.filterIsActive.filterIsActive
  );

  const isJogs = useSelector((state) => state.jogs.jogs);

  useEffect(() => {
    isJogs ? setIsLogedIn(true) : setIsLogedIn(false);
  }, []);

  const toggleFilter = () => {
    dispatch(activateFilter(!isUsingFilter));
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      {isLogedIn && (
        <div className="menuWrapper">
          <nav>
            <Link className="one" to="/jogs">
              JOGS
            </Link>
            <Link className="two" to="/info">
              INFO
            </Link>
            <Link className="three" to="/contacts">
              CONTACT US
            </Link>
          </nav>
          {window.location.pathname === "/jogs" && (
            <img
              src={isUsingFilter ? filterActive : filter}
              className={isUsingFilter ? "filterActive" : "filterNActive"}
              onClick={toggleFilter}
            ></img>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
