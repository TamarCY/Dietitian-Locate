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
      activeUser: null,
      // activeUser:{
      //   "id": 1,
      //   "fname": "תמר",
      //   "lname": "כהן יוגב",
      //   "email": "tanar@gmail.com",
      //   "pwd": "123"
      // },
      dietData: dietData,
          

      filteredData: []
          
    }
  
   
    this.handleLogout =  this.handleLogout.bind(this)
    this.handleLogin =  this.handleLogin.bind(this)
    this.addDiet = this.addDiet.bind(this)
    this.searchDiet = this.searchDiet.bind(this)
    this.searchLang = this.searchLang.bind(this)
    this.searchExper = this.searchExper.bind(this)
    this.checker = this.checker.bind(this)
    this.searchClinic = this.searchClinic.bind(this)
    this.contain = this.contain.bind(this)
    this.searchLocation = this.searchLocation.bind(this)

    

    

  }

  handleLogin(userObj){
    this.setState({activeUser:userObj})
    
  }

  handleLogout(){
    this.setState({activeUser:null})
  }

  addDiet(dietObj){
    dietObj.id = this.state.dietData.length;
    this.setState({dietData:this.state.dietData.concat(dietObj)});
    localStorage.setItem('localDiet',JSON.stringify(this.state.dietData.concat(dietObj)))
  }

  searchDiet(dietObj){
    const resLocation = this.searchLocation(dietObj,this.state.dietData);
    const resLang = this.searchLang(dietObj,resLocation);
    const resExper = this.searchExper(dietObj,resLang);
    const resClinic = this.searchClinic(dietObj,resExper); 
    const resultsArr= resClinic;
    this.setState({filteredData:resultsArr})
    console.log(resultsArr)
  }

  searchLang(dietObj, resArr){   
    const langFilteredArr = resArr.filter(obj => obj.languages.includes(dietObj.languages));   
    return langFilteredArr;
  }

  checker(arr, target){
    return(target.every(v => arr.includes(v)))
   
  }
 


  searchExper(dietObj, resArr){
    const experFilteredArr = resArr.filter(arr=>(this.checker(arr.expertis,dietObj.expertis)));
    return experFilteredArr;
    
  }
   
  contain(arr1,arr2){
    return (arr1.some(r=> arr2.indexOf(r) >= 0))
  }

  searchClinic(dietObj,resArr){   
    const clinicFilteredArr = resArr.filter(arr=>(this.contain(arr.clinics,dietObj.clinics)));
    return clinicFilteredArr;
  }

  searchLocation(dietObj,resArr){
    const locationFilteredArr = resArr.filter(obj => (obj.location == dietObj.location));
    return locationFilteredArr
  }

  
 


  render(){
    return (
      <HashRouter>
        <div>
      
          {/* <Route exact path={["/","/res","/edit"]}>
              <MyNav activeUser={this.state.activeUser} handleLogout={this.handleLogout}/>
          </Route> */}
          <Switch>
            <Route exact path="/login">
      
              <LogInPage  handleLogin={this.handleLogin}/>
            </Route>
            <Route exact path="/signup">
              <SignUpPage/>
            </Route>
            <Route exact path="/res" >
              <ResPage results={this.state.filteredData}/>
            </Route>
            <Route exact path="/edit">
              <EditPage addDiet={this.addDiet} dietData={this.state.dietData} activeUser={this.state.activeUser}/>
            </Route>
            <Route exact path="/">
            
              <HomePage/>
              <SearchBar searchDiet={this.searchDiet}/>
            </Route>
              
          </Switch>
          </div>
    </HashRouter>
    

    )
  }
}



export default App;
