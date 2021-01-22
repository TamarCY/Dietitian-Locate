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
      <HashRouter>
      
      <h1>I am the APP</h1>
      <div className="App">
          <Switch>
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
            <Route exact path="/">
              <HomePage/>
            </Route>
              
          </Switch>
      </div>
    </HashRouter>
    

  
  );
}

export default App;
