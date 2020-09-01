import React from "react";
import {Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search/index";
import Profile from "../Routes/Profile";

//explore를 username보다 앞에다 둔 이유는 edit-profile로 가는 사람도
//profile을 받게 되기 때문 요러면 explore로 가질 못한다
//이곳에서의 작업이 중요한 이유는 페이지의 순서를 결정하므로 task의 흐름을 알아야함
const LoggedInRoutes = ()=>(
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route path="/explore" component={Explore}/>
        <Route path="/search" component={Search}/>
        <Route path = "/:username" component = {Profile}/>
    </Switch>
);

const LoggedOutRoutes = ()=>(
    <Switch>
        <Route exact path="/" component={Auth}/>
    </Switch>
);
const AppRouter = ({isLoggedIn})=>
    isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>;


AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;