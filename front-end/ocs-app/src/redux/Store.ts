import { configureStore } from "@reduxjs/toolkit";
import uploadImageReducer from './slices/UploadImageSlice';
import clothesDetailsReducer from './slices/ClothesDetailsSlice';

const store = configureStore({
    reducer:{
        uploadImg: uploadImageReducer,
        clothesDetails: clothesDetailsReducer
    }
})
export type AppDispatch = typeof store.dispatch
export default store