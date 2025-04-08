import { createSlice } from "@reduxjs/toolkit";

const initialState:any ={
    clothesDetails:{
        clothesType: "",
        clothesBrand: "",
        clothesColor: "",
        clothesSize: "",
        clothesGender: "",
        clothesPrice: ""
    },
    allClothes:[],
    selectedClothes:""
}

const clothesSlice=createSlice({
    name:"clothes",
    initialState,
    reducers:{
        updateClothesDetails(state,action){
            state.clothesDetails=action.payload
        },
        updateAllClothes(state,action){
            state.allClothes = action.payload;
        },
        updateSelectedClothes(state,action){
            state.selectedClothes = action.payload;
        }
    }
})

export const{updateClothesDetails,updateAllClothes,updateSelectedClothes}=clothesSlice.actions;
export default clothesSlice.reducer