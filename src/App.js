import React, { Component } from 'react';
import './App.css';
import RouterConfig from './config/router.jsx';
import { observable } from 'mobx';

@observable
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>gfdsgsdf</h1>
        <a href="/">首页</a>
        <a href="/about">关于</a>
        <a href="/other">其他</a>
        <a href="/userinfo/123">个人信息</a>
        <a href="/abcdefg">错啦</a>
        <div>
          <RouterConfig />
        </div>
      </React.Fragment>
    );
  }
}

export default App;