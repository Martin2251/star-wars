import "./App.css";
import React { useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//react router https://reactrouter.com/web/guides/quick-start
//react route video https://www.youtube.com/watch?v=Law7wfdg_ls
https://www.youtube.com/watch?v=aZGzwEjZrXc

function App() {
  const [loading, setLoading] = useState(true);
  const

useEffect(() => {
  async function name(params) {

  }


  }
}, [)



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="./components/card" exact component={card}></Route>
          <Route exact path='/'></Route>
          </Switch>
        <div></div>
      </Router>
    </div>
  );
}
export default App;
