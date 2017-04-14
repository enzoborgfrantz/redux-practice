import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Main from './Main/Main';

render(
  <HashRouter>
    <Route path="/" component={Main} />
  </HashRouter>
  ,
  document.getElementById('root'),
);
