import React, {memo} from "react";
import HeaderUI from "../../layout/header";
import HomeUI from "../home";
import FooterUI from "../../layout/footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddApplicationModule from "../add-application-module";

const MainUI = () => {

    return (
        <>
            <Router>
                <HeaderUI/>
                <Switch>
                    <Route exact path="/" component={HomeUI}/>
                    <Route path="/add-app" component={AddApplicationModule}/>
                    <Route path="/:id" component={AddApplicationModule}/>
                </Switch>
                <FooterUI/>
            </Router>
        </>
    );

}

export default memo(MainUI);
