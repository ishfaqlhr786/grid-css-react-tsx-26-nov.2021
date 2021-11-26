import React,{useRef,useState,useEffect} from 'react'

export const UploadImg = () => {
    const [image,setImage]=useState<FileList>()
    const [preview,setPreview]= useState<string>()
    const FileRef= useRef<HTMLInputElement>()
    useEffect(()=>{
        if(image){
              const reader=new FileReader();
              reader.onload=()=>{
                 setPreview(reader.result as string)   
              }
           //   reader.readAsDataURL(image)
        }else{
             // setPreview(null);
        }

    },[image])
    return (
        <div>
            <h2>upload image in rrecat tsx</h2>
            <form>
                <p>
                    {preview }
                </p>
                
               
                <input type="file"  
                accept="image/*"
                onChange={(event)=>{
                    const file = event.target.files;
                    console.log(file)
                    if(file){
                        setImage(file);
                    }else{
                       // setImage();
                    }
                }}
                />
            </form>
        </div>
    )
}
