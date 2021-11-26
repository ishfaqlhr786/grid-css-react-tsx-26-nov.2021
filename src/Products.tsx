import React,{useState,useEffect,useRef} from "react";
import './Products.css'
export const Products = () => {
  const [name,setName]=useState("");
  const f=useRef(5);
  useEffect(()=>{
    console.log('value of f= ',f.current)
  })
  const users=[
    {id:1,name:"asim",image:"../images/pic6.jpg",city:"lhr"},
    {id:2,name:"amir",image:"../images/pic2.jpg",city:"lhr"},
    {id:3,name:"umer",image:"../images/pic3.jpg",city:"lhr"},
    {id:4,name:"asif",image:"../images/pic4.jpg",city:"lhr"},
    {id:5,name:"aslam",image:"../images/pic5.jpg",city:"lhr"},
  ]
  return (
    <div className="wrapperProduct">
      <h2>Users list</h2>
      <button onClick={()=>{
        f.current=8;
        setName("asad");
      }}>change</button>
      <div className="mainContents">
       {
         users.map(user=>{
           const {id,name,image,city}=user;
           return(
             <>
             <div className="item" key={id}>
               <img src={image} alt="kk"/>
               <div className="contents">
               <h4> Name : {name}</h4> 
               <p>city:{city}</p>
               </div>
             </div>
             </>
           )
         })
       }
        
         
      </div>
    </div>
  );
};
