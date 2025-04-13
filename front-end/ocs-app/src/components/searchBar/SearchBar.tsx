import React from 'react'
import BrandMenu from '../menu/brandMenu/BrandMenu'
import TypeMenu from '../menu/typeMenu/TypeMenu'
import ColorMenu from '../menu/colorMenu/ColorMenu'
import SizeMenu from '../menu/sizeMenu/SizeMenu'
import './searchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/Store'
import { clearAllFilters } from '../../redux/slices/ClothesSlice'
import { useMediaQuery } from '@mui/material'

function SearchBar() {
  const matches470px=useMediaQuery('(min-width:470px)');
  return (
    <div className={matches470px ? "searchBarDiv" : "searchBarDiv470px"} >
      
      <BrandMenu/>
      <TypeMenu/>
      <ColorMenu/>
      <SizeMenu/>
      
      
    </div>
  )
}

export default SearchBar