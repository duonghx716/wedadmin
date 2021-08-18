import React from "react";
import { Router } from "react-router-dom";
import history from "./routes/History";
import Routes from "./routes/Routes";
import { IntlProvider } from "react-intl";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

class App extends React.Component {
    render() {
        return (
            <IntlProvider>
                <div dir={"ltr"}>
                    <Router history={history}>{<Routes />}</Router>
                </div>
                <ToastContainer />
            </IntlProvider>
        );
    }
}

export default App;
