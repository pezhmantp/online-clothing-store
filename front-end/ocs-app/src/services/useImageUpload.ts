import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/Store';
import { updateDisblAprvImgBtn, updateImgElmntAttr, updateTempImge, updateUploadedImge } from '../redux/slices/UploadImageSlice';
import { v4 as uuidv4 } from 'uuid';

var map = new Map<string, string>();
function useImageUpload (){
    const imageUploadSelector=useSelector((state:any) => state.uploadImg);
    const ImgElmntAttrSelector:any[]=useSelector((state:any) => state.uploadImg.imgElmntAttr);
    const newArray = [...ImgElmntAttrSelector];
    const dispatch=useDispatch<AppDispatch>();

    const uploadImage=(e:any)=>{
        if (e.target.files.length > 0){
            if((e.target.files[0].type != "image/jpeg") && (e.target.files[0].type != "image/png") )
                {
                  alert("Please upload images with JPG or PNG format");
                }
            dispatch(updateDisblAprvImgBtn(false)); 
            dispatch(updateTempImge(e.target.files[0]));
            let url = URL.createObjectURL(e.target.files[0]);
            dispatch(updateUploadedImge(url));
        }
    }
    const addFields = (id:any) => {
        let object = {
            id:id,
            src: imageUploadSelector.uploadedImge,
            width: 120,
            height: 120,
            visibility:true
          }
          const tempArr:any[]=newArray.concat();
          tempArr.push(object);
          dispatch(updateImgElmntAttr(tempArr));
    }
    const approveImage=()=>{
        if(map.size < 3){
            var id=uuidv4();
            map.set(id,imageUploadSelector.tempImge);
            dispatch(updateUploadedImge("")); 
            addFields(id);
        }
        else
        {
            alert("Maximum number of images is 3");
            dispatch(updateUploadedImge("")); 
        }
        dispatch(updateDisblAprvImgBtn(true));
    }
    const removeImage = (index:any,id:any) => {
        let data = [...ImgElmntAttrSelector];
        data.splice(index, 1);
        dispatch(updateImgElmntAttr(data));
        map.delete(id);
    }
    const getUploadedImages=()=>{
        return map;
    
    } 
    const clearMap=()=>{
        map.clear();
    } 
    return {
        uploadImage,
        approveImage,
        removeImage,
        getUploadedImages,
        clearMap
    }
}
export default useImageUpload;