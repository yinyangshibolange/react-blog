import React, { useState } from 'react';
// import './App.css';
import './App.sass'
import { Route, Link,Redirect, Switch, NavLink } from 'react-router-dom'
import ArticalList from './pages/ArticalList'
import Editor from './pages/Editor'

function App() {
  // const [activePage, activeEvent] = useState('index')
  return (
    <div className="App">
      <header className="App-header">
        <div className="links-container">
          <NavLink to="/index" activeClassName="active">首页</NavLink>
          <NavLink to="/editor" activeClassName="active">编辑器</NavLink>
        </div>
      </header>
      <main>
        <Redirect path="" to="/index"></Redirect>
        <Redirect path="/" to="/index"></Redirect>
        <Route path="/index" component={ArticalList}></Route>
        <Route path="/editor" component={Editor}></Route>
      </main>
    </div>
  );
}

export default App;
