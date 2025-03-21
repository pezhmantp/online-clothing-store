import { createSlice } from "@reduxjs/toolkit"

const initialState:any ={
    uploadedImge:"",
    tempImge:"",
    disblAprvImgBtn:true,
    imgElmntAttr:[{
        id:"",   
        src: null,
        width:0 ,
        height:0,
        visibility: false
       }
    ]
}

const uploadImageSlice=createSlice({
    name:"uploadImg",
    initialState,
    reducers:{
        updateUploadedImge(state,action){
            state.uploadedImge=action.payload
        },
        updateTempImge(state,action){
            state.tempImge=action.payload
        },
        updateDisblAprvImgBtn(state,action){
            state.disblAprvImgBtn=action.payload
        },
        updateImgElmntAttr(state,action){
            state.imgElmntAttr=action.payload;
        },
    }
})

export const{updateUploadedImge,updateTempImge,updateDisblAprvImgBtn,updateImgElmntAttr}=uploadImageSlice.actions;

export default uploadImageSlice.reducer