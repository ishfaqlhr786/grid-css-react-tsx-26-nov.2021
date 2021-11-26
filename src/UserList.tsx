import React,{useEffect,useState} from 'react'
import {useQuery} from 'react-query';
import axios from 'axios'
import './Products.css'
export interface CartItemType{
  id:number,
  category:string,
  description:string,
  image:string,
  price:number,
  title:string,
  amount:number


}

/*   true code for fetch api
const getProducts= async (): Promise<CartItemType[]>=>{
 // await (await fetch(`https://fakestoreapi.com/products`)).json();
// return  axios.get(`https://fakestoreapi.com/products`)
  return  await (await fetch(`https://fakestoreapi.com/products`)).json();


   
}   */

  
export const UserList = () => {
    const [user,setUser]=useState([]);
    const getUsers = async () => {
    axios.get(`http://localhost:5555/user`).then((res) => {
      const user = res.data;
      setUser(user);
      console.log(user);
      // console.log(...Prod);
    });
  };
useEffect(() => {
    getUsers();
  }, []);
  //  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);
 // console.log(data);
 // if(isLoading) return <h2>please wait</h2>
 // if(error) return <div>Some thing went wrong</div>
    return (
       <div className="wrapperProduct">
      <h2>Users list</h2>
      <div className="mainContents">
       {
         user?.map(user=>{
           const {id,name,email,password,cpass,pic}=user;
           return(
             <>
             <div className="item" key={id}>
               <img src={pic} alt="kk"/>
               <div className="contents">
               <h4> Name : {name}</h4> 
               <p>Email:{email}</p>
               </div>
             </div>
             </>
           )
         })
       }
        
         
      </div>
    </div>
    )
}
