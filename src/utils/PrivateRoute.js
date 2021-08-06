import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                Auth.isAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={`/login`} />
                )
            }
        />
    );
};

export default PrivateRoute;
