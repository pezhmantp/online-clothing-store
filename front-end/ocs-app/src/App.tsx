import React, { useEffect } from 'react';
import './App.css';
import {banner} from './components/exports'
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GetAllClothesDocument } from './gql/graphql';
import secureLocalStorage from 'react-secure-storage';
import ClothesCard from './components/clothesCard/ClothesCard';
import {defaultImg} from './components/exports';
import Grid from '@mui/material/Grid2';
import SearchBar from './components/searchBar/SearchBar';
import { Box } from '@mui/material';

function App() {
//   const [fetchAllClothes,{ loading, data }] = useLazyQuery(GetAllClothesDocument,{
//     context: { headers: { authorization: `Bearer ${secureLocalStorage.getItem("access_token")}` } }
// });
const {loading, data} = useQuery(GetAllClothesDocument,{
  context: { headers: { authorization: `Bearer ${secureLocalStorage.getItem("access_token")}` } }
});

// useEffect(()=>{
//     fetchAllClothes();
//   },[data])
  data?.getAllClothes?.map((i)=>{
        console.log(JSON.stringify(i));
  })
  return (
    <>
    <SearchBar/>
    <Grid container spacing={2} sx={{justifyContent:"center",backgroundColor:"rgba(248, 152, 248, 0.5)",
      width:"70%",margin:"auto",marginTop:"50px",padding:"18px",borderRadius:"10px"}}>
      
      {(() => {
        return data?.getAllClothes?.map((item: any) => {
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
