import { Button, Menu } from '@mui/material';
import React, { useState } from 'react'
import './colorMenu.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../../redux/Store';
import { updateColor, updateFilter, updateFilterAppliedStatus } from '../../../redux/slices/ClothesSlice';

function ColorMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setAnchorEl(event.currentTarget);
  };
  
  const filterSelector = useSelector((state:any) => state.clothes.clothesFilter);
  const colorSelector=useSelector((state:any) => state.clothes.color);
  
 const dispatch=useDispatch<AppDispatch>();
  const applyColorFilter=()=>{
    const filterValues ={
                minPrice: filterSelector.minPrice,
                maxPrice: filterSelector.maxPrice,
                size: filterSelector.size,
                brand: filterSelector.brand,
                color: colorSelector,
                type: filterSelector.type,
                gender: filterSelector.gender,
            }
            dispatch(updateFilterAppliedStatus(true));
            dispatch(updateFilter(filterValues));
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  const getColor=(e:any)=>{
    dispatch(updateColor(e.target.id));
  }
  return (
    <div className='color-menu1'>
        <Button
      className='btn'
      startIcon={<KeyboardArrowUpOutlinedIcon style={{marginRight:"-7px"}}/>}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Color
      </Button>
      <Menu
      sx={{ ".MuiPaper-root": { width: "260px", height: "183px"} }}
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      
        <div className='colorPallet'>
            <div className='color-div' id='blue' onClick={((e:any)=>{getColor(e)})}></div>
            <div className='color-div' id='brown' onClick={((e:any)=>{getColor(e)})}></div>
            <div className='color-div' id='black' onClick={((e:any)=>{getColor(e)})}></div>
            <div className='color-div' id='white' onClick={((e:any)=>{getColor(e)})}></div>
            <div className='color-div' id='green' onClick={((e:any)=>{getColor(e)})}></div>
            <div className='color-div' id='yelow' onClick={((e:any)=>{getColor(e)})}></div>
            
        </div>

        <Button
          variant="contained"
          sx={{ marginTop: "12px", marginLeft:"5px" }}
          className="apply-price-btn" onClick={(()=>{applyColorFilter();handleClose()})}>
          Apply
        </Button>
      
    </Menu>
    </div>
    
  );
}

export default ColorMenu