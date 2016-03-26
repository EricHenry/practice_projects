const React = require("react");
const Main = require('../components/Main');
const Home = require('../components/Home');
const { Route, IndexRoute } = require('react-router');

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
    </Route>
)
