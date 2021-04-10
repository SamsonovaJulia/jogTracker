import logo from "./bear-face.svg";
import "./LoginForm.scss";
import getToken from "../../helpers/getToken";
import JogsListThunk from "../../redux/thunks/jogListTunk";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const logIn = async () => {
    await getToken();
    await dispatch(JogsListThunk);
    history.push("/jogs");
  };
  return (
    <div className="LoginForm">
      <img src={logo} className="bearFace" />
      <button className="logInButton" onClick={logIn}>
        Let me in
      </button>
    </div>
  );
}

export default LoginForm;
