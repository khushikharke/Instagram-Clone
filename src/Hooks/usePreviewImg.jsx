import { useState } from "react";
import useShowToast from "./useShowToast";

function usePreviewImg(){
   const[selectedFile, setSelectedFile]= useState(null);
   const showToast = useShowToast();
//     2 bytes max hona chhaiye file size 1 byte = 1024 bits
   const maxFileSizeInBytes = 2 * 1024 * 1024;
   const handleImageChange = (e)=>{
    const file = e.target.files[0];
    if(file && file.type.startsWith("image/")){
        if(file.size > maxFileSizeInBytes){
            showToast("Error","file size must be less than 2MB", " error");
            setSelectedFile(null);
            return;
        }
        const reader = new FileReader();

        reader.onloadend = () =>{
            setSelectedFile(reader.result);
        }

        reader.readAsDataURL(file);
    }
    else{
        showToast("Error","Please select an image file","error");
    }
   }
   return {selectedFile, handleImageChange, setSelectedFile};

}
export default usePreviewImg;