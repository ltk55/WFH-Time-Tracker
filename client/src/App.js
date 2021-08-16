import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import { AttDataContextProvider } from "./context/AttDataContext";
import "./index.css";

const App = () => {
  return (
    <AttDataContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/attdata/:id/update" component={UpdatePage} />
          </Switch>
        </Router>
      </div>
    </AttDataContextProvider>
  );
};

export default App;
