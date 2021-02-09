import logo from './logo.svg';
import './App.css';
import React, {useEffect, useReducer} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import {AppContext, appReducer, initialState} from "./store";
import InitialPage from './components/pages/InitialPage';



function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <div className="App">
        <AppContext.Provider value={[state, dispatch]}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                  <InitialPage/>
              </Route>
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
    </div>
  );
}

export default App;
