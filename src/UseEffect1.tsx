import React from 'react'
import { useEffect ,useState,useRef} from 'react';
export const UseEffect1 = () => {
    const [name,setName]=useState("asad")
    const [city,setCity]=useState("lahore")
   const f=useRef(6);
//let f=6;
  useEffect(() => {
   
  console.log("value of f=", f.current)
  });
  return (

  <div>
      <button onClick={()=>(
        f.current= 8 )
     // setCity("islamabad")
    }>
      change value
    </button>
    <div>
         
    </div>
  </div>
  );
}
   

