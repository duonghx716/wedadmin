import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Loader from "../components/Loader/Loader";
import Login from "../components/Login/Login";
import history from "./History";
const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Home} />
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;
