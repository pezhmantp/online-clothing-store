import { useDispatch, useSelector } from "react-redux";
import useImageUpload from "./useImageUpload";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "react-oidc-context";
import { AppDispatch } from "../redux/Store";
import { updateDisblAprvImgBtn, updateImgElmntAttr, updateTempImge, updateUploadedImge } from "../redux/slices/UploadImageSlice";
import { updateClothesDetails } from "../redux/slices/ClothesDetailsSlice";

const save_images_url = process.env.REACT_APP_SAVE_IMAGES_URL ?? "";
const save_clothes_url = process.env.REACT_APP_SAVE_CLOTHES_URL ?? "";
var imageUrls:any[]=[];

const useSaveClothes=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const clothesDetailsSelector=useSelector((state:any) => state.clothesDetails);
    const ImgElmntAttrSelector:any[]=useSelector((state:any) => state.uploadImg.imgElmntAttr);
    const newArray = [...ImgElmntAttrSelector];
    const imageUpload = useImageUpload();
    let map = new Map<string, string>();
    map = imageUpload.getUploadedImages();

    function saveClothesFunc(){
        var clothesDetails={
            clothesType: clothesDetailsSelector.clothesDetails.clothesType,
            brand:clothesDetailsSelector.clothesDetails.clothesBrand,
            price:clothesDetailsSelector.clothesDetails.clothesPrice,
            color:clothesDetailsSelector.clothesDetails.clothesColor,
            gender:clothesDetailsSelector.clothesDetails.clothesGender,
            size:clothesDetailsSelector.clothesDetails.clothesSize
        }
        axios.post(save_clothes_url, clothesDetails,).then((resp) => {
            // setResetForm(true);
             // alert(resp.data);
             // setClothedId(resp.data);
           
          if(map.size > 0){
         uploadImage(resp.data);
         }
         
         // setTimeout(() => {
         //   props.setTabValue('1');
         // }, 2000);
         
        // setResetForm(false);
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
          // 'Authorization': 'Bearer ' + secureLocalStorage.getItem("id_token"),
          'Content-Type': 'multipart/form-data'
        }
      }).then(()=>{

        var clothesDetails={
            clothesType: "",
            clothesBrand: "",
            clothesColor: "",
            clothesSize: "",
            clothesGender: "",
            clothesPrice: ""
        }
        dispatch(updateClothesDetails(clothesDetails));
        imageUrls = [];
        imageUpload.clearMap();
        dispatch(updateTempImge(""));
        dispatch(updateUploadedImge(""));
        dispatch(updateDisblAprvImgBtn(true));
        var data;
        data = [...newArray];
        data.splice(0);
        dispatch(updateImgElmntAttr(data));
        alert("Clothes saved successfully");
      }).catch((err) => {console.log("err : " + err)});
    }
    return {saveClothesFunc}
}
export default useSaveClothes;