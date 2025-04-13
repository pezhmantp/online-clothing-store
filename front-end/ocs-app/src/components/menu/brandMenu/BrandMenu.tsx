import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/Store';
import { Button, Checkbox, FormControlLabel, FormGroup, Menu, Radio, RadioGroup } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { updateBrands, updateFilter, updateFilterAppliedStatus } from '../../../redux/slices/ClothesSlice';
import './brandMenu.css';
export default function BrandMenu() {
    const selector=useSelector((state:any) => state.clothes.clothesFilter);
    const selectorclothesBrands=useSelector((state:any) => state.clothes.brands);
    const dispatch=useDispatch<AppDispatch>();
    const setClothesBrandFunc = (e:any) =>{
        let a:any=[];
        a=[];
        
        a.push(e.target.id);
        a.push(e.target.checked);
          
         dispatch(updateBrands(a));
         
        }
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const applyBrandFilter =()=>{
        
        console.log("^^^^^: " + selectorclothesBrands);
         const filterValues ={
           minPrice: selector.minPrice,
           maxPrice: selector.maxPrice,
           size: selector.size,
           brand: selectorclothesBrands,
           color: selector.color,
           type: selector.type,
           gender: selector.gender,
         }
         dispatch(updateFilterAppliedStatus(true));
         dispatch(updateFilter(filterValues)) 
       }
       

  return (
    <div className="brand-menu1">
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
          Brand
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
           
              <FormGroup>
              <FormControlLabel 
              sx={{".MuiFormControlLabel-label" : {color:"rgb(120, 120, 122)",fontSize:"15px"}}}
              control={<Checkbox id="Gucci" onChange={((e:any)=>{setClothesBrandFunc(e)})} 
              checked={selectorclothesBrands.includes("Gucci") ? true : false} />} label="Gucci" />

              <FormControlLabel 
              sx={{".MuiFormControlLabel-label" : {color:"rgb(120, 120, 122)",fontSize:"15px"}}}
              control={<Checkbox id="Lacoste" onChange={((e:any)=>{setClothesBrandFunc(e)})} 
              checked={selectorclothesBrands.includes("Lacoste") ? true : false} />} label="Lacoste" />
               
              <FormControlLabel 
              sx={{".MuiFormControlLabel-label" : {color:"rgb(120, 120, 122)",fontSize:"15px"}}}
              control={<Checkbox id="Prada" onChange={((e:any)=>{setClothesBrandFunc(e)})} 
              checked={selectorclothesBrands.includes("Prada") ? true : false} />} label="Prada" />

              <FormControlLabel 
              sx={{".MuiFormControlLabel-label" : {color:"rgb(120, 120, 122)",fontSize:"15px"}}}
              control={<Checkbox id="Versace" onChange={((e:any)=>{setClothesBrandFunc(e)})} 
              checked={selectorclothesBrands.includes("Versace") ? true : false} />} label="Versace" />
              
            </FormGroup>
          </div>
  
          <Button
            variant="contained"
            sx={{ marginTop: "12px", marginLeft:"5px" }}
            className="apply-price-btn"
            onClick={() => {
              handleClose();
              applyBrandFilter();
            }}
          >
            Apply
          </Button>
        </Menu>
      </div>
  )
}


