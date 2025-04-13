import React, { use, useEffect, useState } from 'react';
import './App.css';
import ClothesCard from './components/clothesCard/ClothesCard';
import {defaultImg} from './components/exports';
import Grid from '@mui/material/Grid2';
import SearchBar from './components/searchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import useFetchAllClothes from './services/useFetchAllClothes';
import useFetchFilteredClothes from './services/useFetchFilteredClothes';
import { AppDispatch } from './redux/Store';
import { clearAllFilters } from './redux/slices/ClothesSlice';


function App() {
 const isFilterApplied=useSelector((state:any) => state.clothes.filterApplied);
 const fetchAllClothes= useFetchAllClothes();
 const fetchFilteredClothes= useFetchFilteredClothes();  
 const dispatch=useDispatch<AppDispatch>();
 
 function clearAllFiltersFunc(){
   dispatch(clearAllFilters());
 }
 function getResult(){
  
  if(!isFilterApplied)
  {
    return fetchAllClothes.getData()?.getAllClothes;
  }
  else{
    
    return fetchFilteredClothes.getData()?.getFilteredResult;
  }
 }

  return (
    <>
    <SearchBar/>
    {isFilterApplied && <div className='clear-filter' onClick={()=>clearAllFiltersFunc()}>
        Clear Filters
      </div>}
    <Grid container spacing={2} sx={{justifyContent:"center",backgroundColor:"rgba(248, 152, 248, 0.5)",
      width:"70%",margin:"auto",marginTop:"50px",padding:"18px",borderRadius:"10px"}}>
      
      {(() => {
        return getResult()?.map((item: any) => {
          return (
            <Grid>
              <ClothesCard
                key={item.clothes.clothesId}
                img={item.imageUris.length > 0 ? item.imageUris[0] : defaultImg}
                id={item.clothes.clothesId}
                brand={item.clothes.brand}
                price={item.clothes.price}
              />
            </Grid>
          );
        });
      })()}
      
      
    </Grid>
    </>
    
  );
}

export default App;
