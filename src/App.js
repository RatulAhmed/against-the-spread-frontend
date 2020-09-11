import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard"
import {BrowserRouter, Route, Switch, HashRouter, Router} from "react-router-dom";
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import history from './history';


const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Router history={history}>
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exac path="/dashboard" component={Dashboard}/>
        </Switch>
        </Router>
        </Provider>

    </div>
  );
}

export default App;
