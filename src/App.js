import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import SearchBar from './component/SearchBar';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ResPage from './pages/ResPage';
import EditPage from './pages/EditPage';
// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import MyNav from './component/MyNav';
import { Container } from 'react-bootstrap';
import dietJSON from './data/diet.json';


class App extends React.Component{
  constructor(props){
    super(props);
    let dietData;
    if (localStorage.getItem('localDiet')){
      dietData = JSON.parse(localStorage.getItem('localDiet'));
    }
    else{
      dietData = dietJSON;
    }

    this.state={
      // activeUser: null,
      activeUser:{
        "id": 1,
        "fname": "תמר",
        "lname": "כהן יוגב",
        "email": "tanar@gmail.com",
        "pwd": "123"
      },
      dietData: dietData,
          
    }
  
   
    this.handleLogout =  this.handleLogout.bind(this)
    // this.handleLogin =  this.handleLogin.bind(this)
    this.addDiet = this.addDiet.bind(this)


  }

  // handleLogin(userObj){
  //   this.setState({activeUser:userObj})
  // }
  handleLogout(){
    this.setState({activeUser:null})
  }
  addDiet(dietObj){
    this.setState({dietData:this.state.dietData.concat(dietObj)});
    localStorage.setItem('localDiet',JSON.stringify(this.state.dietData.concat(dietObj)))
  }

 


  render(){
    return (
      <HashRouter>
        <div>
      
          <Route exact path={["/","/res","/edit"]}>
              <MyNav activeUser={this.state.activeUser} handleLogout={this.handleLogout}/>
          </Route>
          <Switch>
            <Route exact path="/login">
      
              <LogInPage  handleLogin={this.handleLogin}/>
            </Route>
            <Route exact path="/signup">
              <SignUpPage/>
            </Route>
            <Route exact path="/res">
              <ResPage/>
            </Route>
            <Route exact path="/edit">
              <EditPage addDiet={this.addDiet} dietData={this.state.dietData} activeUser={this.state.activeUser}/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
              
          </Switch>
          </div>
    </HashRouter>
    

    )
  }
}



export default App;
