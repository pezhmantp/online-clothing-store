import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import './clothesCard.css'
import {defaultImg} from '../exports';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/Store';
import { updateSelectedClothes } from '../../redux/slices/ClothesSlice';
import { useNavigate } from 'react-router';
function ClothesCard(prop:any) {
  const dispatch=useDispatch<AppDispatch>();
  const nav=useNavigate();
  function cardHandleOnClick(id:any){
      dispatch(updateSelectedClothes(id));
      nav("/clothesDetails");
  }
  return (
    // <div className='clothesCard' >
    //   <div className='clothesInfo'>
    //     <div className='brand'>
    //       <div className='brand-title'>برند</div>
    //       <div className='brand-name'>{prop.brand}</div>
    //     </div>
    //     <div className='price'>
    //       <div className='price-title'>تومان</div>
    //       <div className='price-value'>{prop.price}</div>
    //     </div>
    //   </div>
    //   {/* <img src={prop.img} id={prop.id} onClick={((e:any)=>{setSelectedShoeFunc(e);nav("/shoeDetails")})}/> */}
    //   <img src={prop.img} id={prop.id} />
    // </div>

    

    <Card
      className="card"
      sx={{ maxWidth: 305, width: "200px", height: "190px",borderRadius:"10px" }}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%", height: "140px", objectFit: "fill" }}
        image={prop.img}
      />

      <CardActions className="clothesInfo" id={prop.id} onClick={()=>cardHandleOnClick(prop.id)}>
        <div className="brand">
          
          <div className="brand-name">{prop.brand}</div>
        </div>
        <div className="price">
          <div className="price-value">{prop.price}</div>
          <div className="price-title">$</div>
        </div>
      </CardActions>
    </Card>
  );
}

export default ClothesCard