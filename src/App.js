import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {userSignupRequest} from "./actions/signupActions";
import PropTypes from 'prop-types';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/signup" render={()=><SignUp userSignupRequest={userSignupRequest}/>}/>
            <Route exact path="/signin" component={SignIn}/>
        </Switch>
        </BrowserRouter>
        </Provider>

    </div>
  );
}

export default App;
