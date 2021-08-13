import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import { AttDataContextProvider } from "./context/AttDataContext";

const App = () => {
  return (
    <AttDataContextProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
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
