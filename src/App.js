import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import SearchBar from './component/SearchBar';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ResPage from './pages/ResPage';
import EditPage from './pages/EditPage';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import MyNav from './component/MyNav';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activeUser:{
        "id": 1,
        "fname": "Tamar",
        "lname": "Cohen",
        "email": "tanar@gmail.com",
        "pwd": "123"
      }
          
    }
    // this.state={
    //   activeUser: null
          
    // }
    this.handleLogout =  this.handleLogout.bind(this)
  }

  handleLogout(){
    this.setState({activeUser:null})
  }
  render(){
    return (
      <HashRouter>
      
      <container>
          <Route exact path={["/","/res"]}>
              <MyNav activeUser={this.state.activeUser} handleLogout={this.handleLogout}/>
          </Route>
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
      </container>
    </HashRouter>
    

    )
  }
}



export default App;
