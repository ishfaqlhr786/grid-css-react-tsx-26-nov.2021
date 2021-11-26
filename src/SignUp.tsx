import React,{useState,useEffect} from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import './SignUp.css'
 interface Img{
     url:string;
   }
   interface user{
    name:string,
    email:string,
    password:string,
    cpass:string
  }
export const SignUp = () => {
  //const { name,email,password,cpass}= users;
 // const [image,setImage]= useState<File>();
 // imageList: ImageListType;
 
  const [images, setImages] = React.useState([]);
   const [data, setData] = useState({
      id:0,
    name: "",
    email: "",
    password: "",
    cpass: "",
    pic:""
  });
  const [mess,setMess]=useState("");
 // const maxNumber = 69;

  
  

//POST request with body equal on data in JSON format

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
    <div className="wrapperSignUp ">
      <h2>Sign up</h2>
      <p>{mess}</p>
      <form onSubmit={(e
    )=>{
e.preventDefault();
console.log(data)

  //Object.entries(imageList1).map((val,key)=>{
    //console.log(val,key)
//})
// console.log(imageList[0].file?.name);
   // console.log("sss")

//}))
      }}>
      <div className="mainSignUp">
        
        <div className="item2">
        Name:<br/><input type="text" value={data.name}
        name="name" onChange={
          (e)=>{
            setData({...data,[e.target.name]: e.target.value})
          }
        }
        ></input><br/><br/><br/>
        Email:<br/><input type="email" value={data.email}
        name="email" onChange={
          (e)=>{
            setData({...data,[e.target.name]: e.target.value})
          }
        }
        
        ></input><br/><br/><br/>
        Password:<br/><input type="password"
        value={data.password} name="password" onChange={
          (e)=>{
            setData({...data,[e.target.name]: e.target.value})
          }
        }
        ></input>
        </div>
         <div className="item2">
           <div className="imageBox">
             
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
    data.pic="../images/"+imageList[0].file?.name;
   // console.log("sss")
    //console.log(addUpdateIndex)
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
              <div className="uploadText">
              Please Choose picture
             
            
           
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="gg" width="300px"  height="200px" style={{
position:"absolute",top:"120px",right:"150px",borderRadius:"20px"

                }}/>
               
              </div>
            ))}
             </div>
            </span>
          </div>
        )}
      </ImageUploading>
                  

                  

           </div><br/>
           Confirm Paassword: <br/><input type="password"
           value={data.cpass} name="cpass" onChange={
          (e)=>{
            setData({...data,[e.target.name]: e.target.value})
          }
        }
           />

        </div>
        <div className=" itemSubmit">
          <input type="submit" value="submit" onClick={save}/>

        </div>
        
      
      </div>
      </form>
    </div>
  );
};

