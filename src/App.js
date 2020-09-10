import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/signup" render={()=><SignUp/>}/>
            <Route exact path="/signin" component={SignIn}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
