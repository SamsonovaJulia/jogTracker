import { Route, Switch, Redirect } from "react-router-dom";
import JogsList from "./components/JogsList/JogsList";
import InfoPage from "./components/InfoPage/InfoPage";
import LoginForm from "./components/LoginForm/LoginForm";
import Contacts from "./components/Contacts/Contacts";

const Privateroutes = () => {
  const accessToken = window.localStorage.access_token;
  if (accessToken) {
    return (
      <>
        <Switch>
          <Route path="/login" render={() => <Redirect to="/" />} />
          <Route path="/jogs" component={JogsList} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/info" component={InfoPage} />
          <Route exact path="*" render={() => <Redirect to="/jogs" />} />
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="*" render={() => <Redirect to="/login" />} />
      </>
    );
  }
};
export default Privateroutes;
