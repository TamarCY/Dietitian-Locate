import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import SearchBar from './component/SearchBar';


function App() {
  return (
    <div class="temp-div">
      <HashRouter>
      <div className="App">
          <Switch>
            <h1>Lets start!</h1>
            <Route exact path="/">
              {/* add homepage */}
            </Route>
            <Route exact path="/login">
              {/* add login comp*/}
            </Route>
            <Route exact path="/signup">
              {/* add signup */}
            </Route>
            <Route exact path="/res">
              {/* add res page */}
            </Route>
            <Route exact path="/edit">
              {/* add homepage */}
            </Route>
              
          </Switch>
      </div>
    </HashRouter>
    <SearchBar/>
    </div>
    

  
  );
}

export default App;
