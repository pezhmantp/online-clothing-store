import { useDispatch, useSelector } from "react-redux";
import useImageUpload from "./useImageUpload";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "react-oidc-context";
import { AppDispatch } from "../redux/Store";
import { clearImgElmntAttr, updateDisblAprvImgBtn, updateImgElmntAttr, updateTempImge, updateUploadedImge } from "../redux/slices/UploadImageSlice";
import { updateClothesDetails } from "../redux/slices/ClothesSlice";
import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";

const save_images_url = process.env.REACT_APP_SAVE_IMAGES_URL ?? "";
const save_clothes_url = process.env.REACT_APP_SAVE_CLOTHES_URL ?? "";
var imageUrls:any[]=[];

const useSaveClothes=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const clothesDetailsSelector=useSelector((state:any) => state.clothes.clothesDetails);
    const ImgElmntAttrSelector:any[]=useSelector((state:any) => state.uploadImg.imgElmntAttr);
    const newArray = [...ImgElmntAttrSelector];
    const imageUpload = useImageUpload();
    let map = new Map<string, string>();
    map = imageUpload.getUploadedImages();

    function saveClothesFunc(){
        var clothesDetails={
            clothesType: clothesDetailsSelector.clothesType,
            brand:clothesDetailsSelector.clothesBrand,
            price:clothesDetailsSelector.clothesPrice,
            color:clothesDetailsSelector.clothesColor,
            gender:clothesDetailsSelector.clothesGender,
            size:clothesDetailsSelector.clothesSize
        }
        axios.post(save_clothes_url, clothesDetails,{
          headers:{
            'Authorization': 'Bearer ' + secureLocalStorage.getItem("access_token"),
          }
        }).then((resp) => {
          if(map.size > 0){
            alert("yes"+map.size)
         uploadImage(resp.data);
         }
         else{
          alert("no" + map.size)
          clothesSavedSuccessfully();
         }
         
         }).catch((err) => console.log(err));
         
    }
    function convertMaptoArray(){
      
        map.forEach((m:any) => { imageUrls.push(m) });
        
      }
    function uploadImage(clothesId:any){
        var formData = new FormData();
        convertMaptoArray();
        formData.append("clothesId",clothesId);
        imageUrls.map((file:any) => {
        formData.append("file1",file);
      });
      axios.post(save_images_url,formData,{
        headers:{
          'Authorization': 'Bearer ' + secureLocalStorage.getItem("access_token"),
          'Content-Type': 'multipart/form-data'
        }
      }).then(()=>{
        clothesSavedSuccessfully();
        
        
      }).catch((err) => {console.log("err : " + err)});
    }

    function clothesSavedSuccessfully() {
      var clothesDetails = {
        clothesType: "",
        clothesBrand: "",
        clothesColor: "",
        clothesSize: "",
        clothesGender: "",
        clothesPrice: "",
      };
      dispatch(updateClothesDetails(clothesDetails));
      imageUrls = [];
      imageUpload.clearMap();
      dispatch(updateTempImge(""));
      dispatch(updateUploadedImge(""));
      dispatch(updateDisblAprvImgBtn(true));
      var data;
      data = [...newArray];
      data.splice(0);
      dispatch(clearImgElmntAttr());
    }
    return {saveClothesFunc}
}
export default useSaveClothes;