import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { GetClothesByIdDocument } from '../../gql/graphql';
import secureLocalStorage from 'react-secure-storage';
import ManIcon from '@mui/icons-material/Face';
import WomanIcon from '@mui/icons-material/Face4';
import './clothesDetails.css'
import  Grid from '@mui/material/Grid2';
import { useMediaQuery } from '@mui/material';
import {defaultImg} from '../exports';

var imgUris:any[]=[];
function ClothesDetails() {
  const matches1100px=useMediaQuery('(min-width:1100px)');
  const matches600px=useMediaQuery('(min-width:600px)');
    const clothesId=useSelector((state:any) => state.clothes.selectedClothes);
    const {loading, data} = useQuery(GetClothesByIdDocument,{
        variables:{clothesId},
      context: { headers: { authorization: `Bearer ${secureLocalStorage.getItem("access_token")}` } }
    });
    const [currentImgToDisply,setCurrentImgToDisply] = useState<any>(null);
  const setCurrentImgToDisplyFunc =(e:any)=>{
    setCurrentImgToDisply(e.target.src);
  }
    const getColor =(color:any)=>{
      switch (color)
      {
        case "blue" : return "rgb(0, 68, 255)";
        case "red" : return "rgb(246, 21, 1)";
        case "black" : return "rgb(0, 0, 0)";
        case "white" : return "rgb(220, 220, 220)";
        case "gray" : return "rgb(116, 116, 116)";
        case "pink" : return "rgb(255, 86, 227)";
        case "green" : return "rgb(2, 203, 72)";
        case "brown" : return "rgb(238, 89, 2)";
        case "yellow" : return "rgb(238, 234, 2)";
      }
     }
  return (
    <Grid container sx={{ backgroundColor: "rgb(227, 227, 227)", width: matches1100px ? "60%" : "88%" , margin: "auto",borderRadius:"12px",marginTop:"50px",padding:"20px"}}>
      <Grid justifyContent={matches600px ? "initial" : "space-between"} alignItems={matches600px ? "initial" : "center"} container direction={matches600px ? "column" : "row"} size={matches600px ? 4 : 12} spacing={3}>
       <Grid>
        <div style={{ display: "flex", gap: "9px" }}>
          <div className="titles">Type:</div>
          <div className="values">
            {data?.getClothesById?.clothes?.clothesType}
          </div>
        </div>
       </Grid>
       <Grid>
        <div style={{ display: "flex", gap: "9px" }}>
          <div className="titles">Brand:</div>
          <div className="values">
            {data?.getClothesById?.clothes?.brand}
          </div>
        </div>
       </Grid>
       <Grid>
        <div style={{ display: "flex", gap: "9px" }}>
          <div className="titles">Gender:</div>
          <div className="values">
            {data?.getClothesById?.clothes?.gender}
          </div>
        </div>
       </Grid>
       <Grid>
        <div style={{ display: "flex", gap: "9px",alignItems:"center"}}>
          <div className="titles">Color:</div>
          <div className='colorDiv' style={{backgroundColor: getColor(data?.getClothesById?.clothes?.color)}}></div>
        </div>
       </Grid>
       <Grid>
        <div style={{ display: "flex", gap: "9px" }}>
          <div className="titles">Price:</div>
          <div className="values">
            {data?.getClothesById?.clothes?.price}$
          </div>
        </div>
       </Grid>
      </Grid>
      
      <Grid container spacing={1} size={matches600px ? 8 : 12} marginTop="15px">
        <Grid size={12}>
          {
          (()=>{
            if(data?.getClothesById?.imageUris != null && data?.getClothesById?.imageUris?.length != undefined){
              return(<img style={{width:"100%",height:"300px",borderRadius:"10px"}} src={currentImgToDisply === null ? data?.getClothesById?.imageUris[0] : currentImgToDisply}/>)
            }
            else{
              return(<img style={{width:"100%",height:"300px",borderRadius:"10px"}} src={defaultImg}/>)
            }
            
          })()
        }
        </Grid>
        
        <Grid container direction="row">
        {
          (()=>{
            return(data?.getClothesById?.imageUris?.map((img:any)=>{
              return (<Grid><img style={{width: "100%",height: matches600px ? "180px" : "80px",borderRadius:"7px"}} src={img} onClick={((e)=>{setCurrentImgToDisplyFunc(e)})} /></Grid>)
            }))
          })()
        }
        </Grid>
        
      </Grid>
    </Grid>
  );
}

export default ClothesDetails