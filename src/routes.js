import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/index';
import Main from './components/Main/index';
import Profile from './components/Profile/index';
import Login from './components/Login/index';
import Favourites from './components/Favourites/index';
import ErrorPage from './components/ErrorPage/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="profile" component={Profile} />
    <Route path="login" component={Login} />
    <Route path="favourites" component={Favourites} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
