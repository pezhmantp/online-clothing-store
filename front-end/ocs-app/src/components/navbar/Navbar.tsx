import React from 'react'
import {logo} from '../exports'
import HomeIcon from '@mui/icons-material/Home';
import './navbar.css';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} className='logo'/>
            <div>
            <Button id='home' startIcon={<HomeIcon style={{color:"white",fontSize:"28px"}} id='homeIcon' />}/>
            <Button id='userPanel' startIcon={<AccountCircleIcon style={{color:"white",fontSize:"28px"}} id="userPanelIcon" />}/>
            
            </div>
    </div>
  )
}

export default Navbar