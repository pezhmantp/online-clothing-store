import { createSlice } from "@reduxjs/toolkit";
import { ac } from "react-router/dist/development/route-data-H2S3hwhf";

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
    selectedClothes:"",
    filterApplied: false,
    clothesFilter: {
        color: null,
        minPrice: 1,
        maxPrice: 100000,
        size: null,
        brand: [],
        type: null,
        gender:null,
      },
      brands:[],
      type:null,
      color:null,
      size:null
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
        },
        updateFilter(state,action){
            state.clothesFilter.color=action.payload.color;
            state.clothesFilter.minPrice=action.payload.minPrice;
            state.clothesFilter.maxPrice=action.payload.maxPrice;
            state.clothesFilter.size=action.payload.size;
            state.clothesFilter.brand=action.payload.brand;
            state.clothesFilter.type=action.payload.type;
            state.clothesFilter.gender=action.payload.gender;
            // state.filterApplied = action.payload.filterApplied;
            console.log("#$#$#$#$#$: " + JSON.stringify(state.clothesFilter));
          },
        updateFilterAppliedStatus(state,action){
            
            state.filterApplied=action.payload;
        },
        updateType(state,action){
            state.type=action.payload;
        },
        updateColor(state,action){
            state.color=action.payload;
        },
        updateSize(state,action){
            state.size=action.payload;
        },
        clearAllFilters(state){
            state.filterApplied=false;
            state.clothesFilter= {
                color: null,
                minPrice: 1,
                maxPrice: 100000,
                size: null,
                brand: [],
                type: null,
                gender:null,
              }
              state.brands=[];
              state.type=null;
              state.color=null;
              state.size=null;
        },
        updateBrands(state,action){
            console.log(">>>>>>> " + action.payload[0] + ":" + action.payload[1])
            if(action.payload[1] === false){
                if(state.brands.includes(action.payload[0]))
                {
                 // delete state.shoeFilter.shoeBrands[action.payload[0]];
                 state.brands = state.brands.filter(function(item:any) {
                   return item !== action.payload[0]
               })
                }
              }
              else if(action.payload[1] === true){
               if(!state.brands.includes(action.payload[0]))
               {
                 state.brands.push(action.payload[0]);
               }
             }
        }
    }
})

export const{updateClothesDetails,updateAllClothes,updateSelectedClothes,
    updateBrands,updateFilter,updateColor,updateSize,clearAllFilters,
    updateFilterAppliedStatus,updateType}=clothesSlice.actions;
export default clothesSlice.reducer