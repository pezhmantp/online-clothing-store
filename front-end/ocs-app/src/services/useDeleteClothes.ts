import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const delete_clothes_url = process.env.REACT_APP_DELETE_CLOTHES_URL ?? "";
 const useDeleteClothes = () =>{
    
   async function deleteIt(clothesId:any){
   var response;      
   response = await axios.delete(delete_clothes_url+"/"+clothesId,{
           headers:{
             'Authorization': 'Bearer ' + secureLocalStorage.getItem("access_token"),
             'Content-Type': 'multipart/form-data'
           }
         });
    
   const data=await response.data;
   return data;
    
}

return {deleteIt}
}
export default useDeleteClothes;