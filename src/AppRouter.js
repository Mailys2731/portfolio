import React from "react";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import HomePage from "./Pages/HomePage"

const history = createBrowserHistory();


class AppRouter extends React.Component {

  
 
  
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' component ={HomePage}/>
                    <Route path="*" component={() => "404 NOT FOUND"}/>
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;