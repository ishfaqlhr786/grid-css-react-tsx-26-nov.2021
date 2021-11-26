import React,{useState} from 'react'

export const PostData = () => {
   // const data1 = { username: 'example' ,email:'ishfaq@yahoo.com'};
    const [data,setData]=useState({
       username:"",
       email:""
    }
    )
    const [message,setMess]=useState("");
const save=()=>{
//POST request with body equal on data in JSON format
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
 // body:name
})
.then((response) => response.json())
//Then with the data from the response in JSON...
.then((data) => {
 // console.log('Success:', data);
 setMess(data.username +"  is saved sussessfully")
 //console.log(message)
})
//Then with the error genereted...
.catch((error) => {
  console.error('Error:', error);
});

}
const handleSubmit1=()=>{
    console.log(data)
}
    return (
        <div>
            <h2>{message}</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                 console.log(data)
            }}>
            name:
            <input type="text" value={data.username}
            name="username"
            onChange={event=>{
              setData({...data,[event.target.name]:event.target.value})
            }}/>
             name:
            <input type="email" value={data.email}
            name="email"
            onChange={event=>{
              setData({...data,[event.target.name]:event.target.value})
            }}/>
            <input type="submit" value="submit" onClick={save}/>
            </form>
        </div>
    )
}



