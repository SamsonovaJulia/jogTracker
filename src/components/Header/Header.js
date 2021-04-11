import { Link, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import logo from "./logo.svg";
import filter from "./filter.svg";
import filterActive from "./filter-active.svg";
import { activateFilter } from "../../redux/actions/index";

function Header() {
  const dispatch = useDispatch();
  const isUsingFilter = useSelector(
    (state) => state.filterIsActive.filterIsActive
  );
  let match = useRouteMatch("/jogs");
  const toggleFilter = () => {
    dispatch(activateFilter(!isUsingFilter));
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
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
        {match && (
          <img
            src={isUsingFilter ? filterActive : filter}
            className={isUsingFilter ? "filterActive" : "filterNActive"}
            onClick={toggleFilter}
          ></img>
        )}
      </div>
    </header>
  );
}

export default Header;
