import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import SearchBar from './component/SearchBar';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ResPage from './pages/ResPage';
import EditPage from './pages/EditPage';


function App() {
  return (
    <div class="temp-div">
      <HashRouter>
      <div className="App">
          <Switch>
            <h1>Lets start!</h1>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/login">
              <LogInPage/>
            </Route>
            <Route exact path="/signup">
              <SignUpPage/>
            </Route>
            <Route exact path="/res">
              <ResPage/>
            </Route>
            <Route exact path="/edit">
              <EditPage/>
            </Route>
              
          </Switch>
      </div>
    </HashRouter>
    <SearchBar/>
    </div>
    

  
  );
}

export default App;
