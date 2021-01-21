import './App.css';
import HashRouter from 'react-router-dom';


function App() {
  return (
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

  
  );
}

export default App;
