
import './App.css';
import Login from './comps/Login.js'
import Header from './comps/Header.js'
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Home from "./Pages/Home.js"

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
        <Switch>

        <Route exact path='/'>



        <Login/>

        </Route>
        <Route path='/home'>

        <Home/>

        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
