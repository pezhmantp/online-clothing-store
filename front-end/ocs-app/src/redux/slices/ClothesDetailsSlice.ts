import { createSlice } from "@reduxjs/toolkit";

const initialState:any ={
    clothesDetails:{
        clothesType: "",
        clothesBrand: "",
        clothesColor: "",
        clothesSize: "",
        clothesGender: "",
        clothesPrice: ""
    }
}

const clothesDetailsSlice=createSlice({
    name:"clothesDetails",
    initialState,
    reducers:{
        updateClothesDetails(state,action){
            state.clothesDetails=action.payload
        }
    }
})

export const{updateClothesDetails}=clothesDetailsSlice.actions;
export default clothesDetailsSlice.reducer