import React,{useEffect,useState} from 'react'
import {useQuery} from 'react-query';
import axios from 'axios'
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

  
export const ProdApi = () => {
    const [product,setProduct]=useState([]);
    const getProducts = async () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const product = res.data;
      setProduct(product);
      console.log(product);
      // console.log(...Prod);
    });
  };
useEffect(() => {
    getProducts();
  }, []);
  //  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);
 // console.log(data);
 // if(isLoading) return <h2>please wait</h2>
 // if(error) return <div>Some thing went wrong</div>
    return (
       <div className="wrapperProduct">
      <h2>Products list</h2>
      <div className="mainContents">
       {
         product?.map(product=>{
           const {id,category,image,price}=product;
           return(
             <>
             <div className="item" key={id}>
               <img src={image} alt="kk"/>
               <div className="contents">
               <h4> Name : {category}</h4> 
               <p>Price:{price}</p>
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
