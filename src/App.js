import React from "react";
import { Router } from "react-router-dom";
import history from "./routes/History";
import Routes from "./routes/Routes";
import { IntlProvider } from "react-intl";

class App extends React.Component {
    render() {
        return (
            <IntlProvider>
                <div dir={"ltr"}>
                    <Router history={history}>{<Routes />}</Router>
                </div>
            </IntlProvider>
        );
    }
}

export default App;
