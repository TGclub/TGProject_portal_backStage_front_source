import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

// 加载组件
import {Hello} from './hello';

// 加载模块
import './common/styles/index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
  </Router>,
  document.getElementById('root')
);
