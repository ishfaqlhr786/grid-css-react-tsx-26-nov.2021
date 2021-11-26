import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageUploading, { ImageListType } from "react-images-uploading";
import './UserList.css'
export const UserSignup = () => {
  // const data1 = { username: 'example' ,email:'ishfaq@yahoo.com'};
  const [data, setData] = useState({
      id:0,
    name: "",
    email: "",
    password: "",
    cpass: "",
    pic:""
  });
  const [message, setMess] = useState("");
  const [user, setUser] = useState([]);
  const [images, setImages] = React.useState([]);
  const [id1,setId]=useState<number>(0);
  const getUsers = async () => {
    axios.get(`http://localhost:5555/user`).then((res) => {
      const user = res.data;
      
    setUser(user);
 
    });
  };
  useEffect(() => {
    getUsers();
  });
  const save = () => {
    //POST request with body equal on data in JSON format
    fetch("http://localhost:5555/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // body:name
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        // console.log('Success:', data);
        setMess(data.name + "  is saved sussessfully");
        
       // setData(data)
      //  getUsers();
        //console.log(message)
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
 
  return (
    <div>
        <div className="userList">
      <h2>{message}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
         getUsers();
        }}
      >
        name:
        <input
          type="text"
          value={data.name}
          name="name"
          onChange={(event) => {
            setData({ ...data, [event.target.name]: event.target.value });
          }}
        />
        <br />
        <br />
        Email:
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={(event) => {
            setData({ ...data, [event.target.name]: event.target.value });
          }}
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          value={data.password}
          name="password"
          onChange={(event) => {
            setData({ ...data, [event.target.name]: event.target.value });
          }}
        />
        <br />
        <br />
        Confirm password:
        <input
          type="password"
          value={data.cpass}
          name="cpass"
          onChange={(event) => {
            setData({ ...data, [event.target.name]: event.target.value });
          }}
        />
        <br />
        <br />
        <input type="submit" value="submit" onClick={save} />
      </form>
      <br />
      <br />
      
      <table table-align ="center">
        <tbody>
          <tr>
              <th>Id:</th>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
            <th>Picture</th>
          </tr>

          {user?.map((user) => {
            const { id, name, email, password ,pic} = user;
            return (
              <tr key={id}>
                  <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>
                    <img src={pic} alt="ll" height="100px" width="100px"/>
                </td>
                <td>
                    <button onClick={async()=>{
                       // const appMode = {id}
                       // console.log(appMode)
                         axios.delete(`http://localhost:5555/user/${id}`).then((res) => {
   
   getUsers();
                    })
                    }}>Delete</button>
                </td>
              </tr>
            );
          })}
               <div>
                    <ImageUploading
      //  multiple
        value={images}
        onChange={(
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    console.log(imageList[0].file?.name);
   data.pic= "../images/"+imageList[0].file?.name;
   
  console.log(data.pic)
 
 setImages(imageList as never[]);
 
  }

}
      
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <span
              style={isDragging ? { color: "red" ,width:"500px"
            } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
           <div className="uploadText">Please Choose picture
             {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="gg" width="300px"  height="200px" style={{
position:"absolute",top:"100px",right:"100px",borderRadius:"20px"

                }}/>
              
               
              </div>
            ))}
           </div>   
            </span>
            &nbsp;
           
          
          </div>
        )}
      </ImageUploading>
      </div>
        </tbody>
      </table>
      </div>
      <br />
        <br />
        delete id:
        <input
          type="number"
          value={id1}
         // name=id
          
        />
    </div>
  );
};
