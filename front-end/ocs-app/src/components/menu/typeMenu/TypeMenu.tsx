import { Button, FormControlLabel, Menu, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import './typeMenu.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/Store';
import { updateFilter, updateFilterAppliedStatus, updateType } from '../../../redux/slices/ClothesSlice';

export default function TypeMenu() {
    const dispatch=useDispatch<AppDispatch>();
    const setTypeFunc = (e:any) =>{
        dispatch(updateType(e.target.value))
      }
      
 
      const selector=useSelector((state:any) => state.clothes.clothesFilter);
      const typeSelector=useSelector((state:any) => state.clothes.type);
      const applyTypeFilter =()=>{
        const filterValues ={
            minPrice: selector.minPrice,
            maxPrice: selector.maxPrice,
            size: selector.size,
            brand: selector.brand,
            color: selector.color,
            type: typeSelector,
            gender: selector.gender,
        }
        dispatch(updateFilterAppliedStatus(true));
        dispatch(updateFilter(filterValues));
        
      }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="type-menu1">
      <Button
        className="btn"
        startIcon={
          <KeyboardArrowUpOutlinedIcon style={{ marginRight: "-7px" }} />
        }
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Type
      </Button>
      <Menu
        sx={{ ".MuiPaper-root": { width: "120px", height: "195px",paddingLeft:"20px" } }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="radioDiv">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Jacket"
              onClick={((e:any)=>{setTypeFunc(e)})} checked={typeSelector === "Jacket" ? true : false}
              sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"15px"}}}
              control={<Radio />}
              label="Jacket"
            />
            <FormControlLabel onClick={((e:any)=>{setTypeFunc(e)})} className='radioLbl' value="Jeans"
            checked={typeSelector === "Jeans" ? true : false}
            sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"15px"}}}
             control={<Radio />} label="Jeans" />

            <FormControlLabel onClick={((e:any)=>{setTypeFunc(e)})} className='radioLbl' value="Shirt"
            checked={typeSelector === "Shirt" ? true : false}
            sx={{".MuiFormControlLabel-label" : {color:"rgb(120, 120, 122)",fontSize:"15px"}}}
            control={<Radio />} label="Shirt" />

            <FormControlLabel onClick={((e:any)=>{setTypeFunc(e)})} className='radioLbl' value="Dress"
            checked={typeSelector === "Dress" ? true : false}
            sx={{".MuiFormControlLabel-label" : {color:"rgb(120, 120, 122)",fontSize:"15px"}}}
            control={<Radio />} label="Dress" />

            <FormControlLabel onClick={((e:any)=>{setTypeFunc(e)})} className='radioLbl' value="Coat"
            checked={typeSelector === "Coat" ? true : false}
            sx={{".MuiFormControlLabel-label" : {color:"rgb(120, 120, 122)",fontSize:"15px"}}}
            control={<Radio />} label="Coat" />
          </RadioGroup>
        </div>

        <Button
          variant="contained"
          sx={{ marginTop: "12px", marginLeft:"5px" }}
          className="apply-price-btn"
          onClick={() => {
            handleClose();
            applyTypeFilter();
          }}
        >
          Apply
        </Button>
      </Menu>
    </div>
  )
}
