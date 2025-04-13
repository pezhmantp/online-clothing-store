import { Button, FormControlLabel, Menu, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react'
import './sizeMenu.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../../redux/Store';
import { updateSize, updateFilter, updateFilterAppliedStatus } from '../../../redux/slices/ClothesSlice';

function SizeMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setAnchorEl(event.currentTarget);
  };
  
  const filterSelector = useSelector((state:any) => state.clothes.clothesFilter);
  const sizeSelector=useSelector((state:any) => state.clothes.size);
  
 const dispatch=useDispatch<AppDispatch>();
  const applySizeFilter=()=>{
    const filterValues ={
                minPrice: filterSelector.minPrice,
                maxPrice: filterSelector.maxPrice,
                size: sizeSelector,
                brand: filterSelector.brand,
                color: filterSelector.color,
                type: filterSelector.type,
                gender: filterSelector.gender,
            }
            dispatch(updateFilterAppliedStatus(true));
            dispatch(updateFilter(filterValues));
    
  }




  const handleClose = () => {
    setAnchorEl(null);
  };
  const setSize=(e:any)=>{
    dispatch(updateSize(e.target.value));
  }
  return (
    <div className="size-menu1">
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
            Size
          </Button>
          <Menu
            sx={{ ".MuiPaper-root": { width: "100px", height: "265px",paddingLeft:"20px" } }}
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
                  value="10"
                  onClick={((e:any)=>{setSize(e)})}
                  sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"16px"}}}
                  control={<Radio />}
                  label="10"
                />
                <FormControlLabel onClick={((e:any)=>{setSize(e)})} className='radioLbl' value="12"
                sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"16px"}}}
                 control={<Radio />} label="12" />

                <FormControlLabel onClick={((e:any)=>{setSize(e)})} className='radioLbl' value="14"
                sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"16px"}}}
                control={<Radio />} label="14" />

                <FormControlLabel onClick={((e:any)=>{setSize(e)})} className='radioLbl' value="16"
                sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"16px"}}}
                control={<Radio />} label="16" />

                <FormControlLabel onClick={((e:any)=>{setSize(e)})} className='radioLbl' value="18"
                sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"16px"}}}
                control={<Radio />} label="18" />

                <FormControlLabel onClick={((e:any)=>{setSize(e)})} className='radioLbl' value="20"
                sx={{".MuiFormControlLabel-label" : { color:"rgb(120, 120, 122)",fontSize:"16px"}}}
                control={<Radio />} label="20" />

                
              </RadioGroup>
            </div>
    
            <Button
              variant="contained"
              sx={{ marginTop: "12px", marginLeft:"5px" }}
              className="apply-price-btn"
              onClick={() => {
                handleClose();
                applySizeFilter();
              }}
            >
              Apply
            </Button>
          </Menu>
        </div>
    
  );
}

export default SizeMenu


