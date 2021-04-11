import { Link, useRouteMatch, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import logo from "../../assets/logoHeader.svg";
import filter from "../../assets/filter.svg";
import filterActive from "../../assets/filter-active.svg";
import { activateFilter } from "../../redux/actions/index";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isUsingFilter = useSelector(
    (state) => state.filterIsActive.filterIsActive
  );

  const [IsChecked, setIsChecked] = useState(false);
  let match = useRouteMatch("/jogs");
  const toggleFilter = () => {
    dispatch(activateFilter(!isUsingFilter));
  };

  const showMenu = () => {
    setIsChecked(!IsChecked);
  };

  useEffect(() => {
    setIsChecked(false);
  }, [location]);

  return !IsChecked ? (
    <header>
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div className="menuWrapper">
        <nav>
          <div className="menuitems">
            <Link to="/jogs">JOGS</Link>
            <Link to="/info">INFO</Link>
            <Link to="/contacts">CONTACT US</Link>
          </div>
        </nav>
        {match && (
          <img
            src={isUsingFilter ? filterActive : filter}
            className={isUsingFilter ? "filterActive" : "filterNActive"}
            onClick={toggleFilter}
          ></img>
        )}
        {!IsChecked && (
          <>
            <label className="hamburger" for="hamburger">
              &#9776;
            </label>
            <input type="checkbox" id="hamburger" onClick={showMenu} />
          </>
        )}
      </div>
    </header>
  ) : (
    <BurgerMenu onClose={showMenu} />
  );
}

export default Header;
