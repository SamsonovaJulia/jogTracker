import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import { useHistory } from "react-router-dom";
import Privateroutes from "./Privateroutes";
import "./App.scss";

function App() {
  const history = useHistory();
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/login" exact>
              <LoginForm />
            </Route>
            <Route path="/jogs" component={Privateroutes} />
            <Route path="/info" component={Privateroutes} />
            <Route path="/contacts" component={Privateroutes} />
            <Route path="/" component={Privateroutes} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
