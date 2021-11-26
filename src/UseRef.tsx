import React,{useEffect,useState,useRef} from 'react'

export const UseRef = () => {
    const [name,setName]=useState("")
   const f=useRef(6)
  // var f=9;
    useEffect(()=>{
        console.log(f.current);
        console.log(name)
    })
    return (
        <div>
            <h2>use ref</h2>
            <button onClick={
                ()=>{
                    f.current=66;
                    setName("shah jee")
                }
            }>change</button>
        </div>
    )
}
