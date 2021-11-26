import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import {SignIn} from './SignIn'
import {SignUp}  from './SignUp'
import {Products}  from './Products'
import {ProdApi}  from './ProdApi'
import {NavBar}  from './NavBar'
import {UserList}  from './UserList'
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'
function App() {
   const url="../images/pic1.jpg"
   const usersdata={
     name:"ali",
     email:"ali@yahoo.com",
     password:"222",
     cpass:"222"

   }
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
           <Route exact path="/">
            <Products/>
          </Route>
            <Route  path="/UserList">
            <UserList/>
          </Route>
          <Route  path="/SignIn">
            <SignIn />
          </Route>
          <Route  path="/SignUp">
            <SignUp/>
          </Route>
         
        </Switch>
      </Router>

    </div>
  );
}
  


export default App;
