const React = require("react");
const Main = require('../components/Main');
const Home = require('../components/Home');
const Profile = require("../components/Profile");
const { Route, IndexRoute } = require('react-router');

module.exports = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile}> </Route>
        <IndexRoute component={Home} />
    </Route>
)
