import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../../store";
import {getHello} from "../../services/simpleGet"

export default ({...props}) => {
  const [globalState, globalDispatch] = useContext(AppContext);
  const [hello, setHelloState] = useState("Not Hello")
  useEffect(async () => {
    const helloResponse = await getHello()
    helloResponse ? setHelloState(helloResponse) : console.log("bad")
  }, [globalState.currentGlobalState]);

return (
  <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        {hello}
        </div>
      </header>
  </div>
)}