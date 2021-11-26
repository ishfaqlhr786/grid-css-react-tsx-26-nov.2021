import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageUploading, { ImageListType } from "react-images-uploading";
export const PostDataLocalApi = () => {
  // const data1 = { username: 'example' ,email:'ishfaq@yahoo.com'};
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpass: "",
  });
  const [message, setMess] = useState("");
  const [user, setUser] = useState([]);
  const [images, setImages] = React.useState([]);
  const getUsers = async () => {
    axios.get(`http://localhost:5555/user`).then((res) => {
      const user = res.data;
      // setProduct(product);
      setUser(user);
      console.log(user);
      // console.log(...Prod);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
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
        getUsers();
        //console.log(message)
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit1 = () => {
    console.log(data);
  };
  return (
    <div>
      <h2>{message}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
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
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
            <th>Picture</th>
          </tr>

          {user?.map((user) => {
            const { id, name, email, password ,pic} = user;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>
                    <img src={pic} alt="ll" height="100px" width="100px"/>
                </td>
              </tr>
            );
          })}
          <tr>
              <td>
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
   // console.log("sss")
    //console.log(addUpdateIndex)
 setImages(imageList as never[]);
 //setImages(imageList[0].file?.name)
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
              Please Choose picture
            </span>
            &nbsp;
           
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="gg" width="300px"  height="200px" style={{
position:"absolute",top:"20px",right:"150px",borderRadius:"20px"

                }}/>
               
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      </div>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
