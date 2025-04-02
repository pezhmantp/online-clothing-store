import axios from "axios";

const delete_clothes_url = process.env.REACT_APP_DELETE_CLOTHES_URL ?? "";
 const useDeleteClothes = () =>{
    
   async function deleteIt(clothesId:any){
   var response;      
   response = await axios.delete(delete_clothes_url+"/"+clothesId);
    
   const data=await response.data;
   return data;
    
}

return {deleteIt}
}
export default useDeleteClothes;