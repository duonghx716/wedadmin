import React, { Suspense } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import history from "./History";
// import { createBrowserHistory } from "history";
import * as LazyComponent from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "../utils/PrivateRoute";
// const history = createBrowserHistory();
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Router history={history}>
                <Switch>
                    {/* <LazyComponent.Login path="/login" exact /> */}
                    {/* <PrivateRoute
                        component={LazyComponent.Home}
                        path="/dashboard"
                        exact
                    /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Home} />
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;
