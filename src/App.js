import logo from "./logo.svg";
import "./App.css";
import React { useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//react router https://reactrouter.com/web/guides/quick-start
//react route video https://www.youtube.com/watch?v=Law7wfdg_ls

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch ()
  })



  return (
    <div className="App">
      <Router>
        <Route path="./components/card" component={card}></Route>
        <div></div>
      </Router>
    </div>
  );
}
export default App;
