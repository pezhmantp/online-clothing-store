import { configureStore } from "@reduxjs/toolkit";
import uploadImageReducer from './slices/UploadImageSlice';
import clothesReducer from './slices/ClothesSlice';

const store = configureStore({
    reducer:{
        uploadImg: uploadImageReducer,
        clothes: clothesReducer
    }
})
export type AppDispatch = typeof store.dispatch
export default store