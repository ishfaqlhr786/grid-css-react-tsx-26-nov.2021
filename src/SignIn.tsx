import React,{useState} from "react";
import './SignIn.css'
/*
interface signIn{
  email:"",
  password:""
}*/
export const SignIn = () => {
  const [email1,setEmail]= useState("");
  const [pass,setPass]=useState("");
  const [logged,setLogged]=useState(false);
 // const {email,password}= login;
  //setEmail(email)
 // setPass(password)
  const user=[
    {id:1,name:"asim",email:"asim@yahoo.com",password:"111"},
    {id:2,name:"amir",email:"amir@yahoo.com",password:"222"},
    {id:3,name:"asif",email:"asif@yahoo.com",password:"333"},
  ]
  //console.log(email)
  
   const Check = () => {
    setLogged(false);
    // console.log(email1);
    {
      user.map((element) => {
        const { id, name, email, password } = element;

        if (email1 === email && pass === password) {
          setLogged(true);
          //setName(name);
        }
      });
    }
  };
 
  return (
    <div  className="wrapperSignIn">
       {
     (logged? "welcome": null)
    }
      <h2>Sign in please</h2>
      <div className="MaincontentSignin ">
        <div className="userInput">

          <div className="item1">
        <label>Email</label>
        </div>
        <div className="item1">
        <input type="email" id="email"  value={email1} onChange={(e)=>{
            setEmail(e.target.value)
        } }/>
        </div>
        <div className="item1">
        <label >Password</label>
        </div>
        <div className="item1">
        <input type="password" 
        id="pass"  value={pass} onChange={(e)=>{
            setPass(e.target.value)} }/>
            </div>
            <div className="item1 itembtn">
            <button onClick={Check}>Login</button>
            </div>
        
      </div>
      </div>
    </div>
  );
};
