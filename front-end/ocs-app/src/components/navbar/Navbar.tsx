import React from 'react'
import {logo} from '../exports'
import HomeIcon from '@mui/icons-material/Home';
import './navbar.css';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router';
import { useAuth } from 'react-oidc-context';
function Navbar() {
  const auth = useAuth();
  return (
    <div className='navbar'>
        <img src={logo} className='logo'/>
            <div style={{display:"flex",alignItems:"center"}}>
            <Link id='home' style={{marginRight:"10px"}} to="/" ><HomeIcon style={{color:"white",fontSize:"28px"}} id='homeIcon' /></Link>
            <Link id='userPanel' to="/managerPanel" ><AccountCircleIcon style={{color:"white",fontSize:"28px"}} id="userPanelIcon" /></Link>
            {auth.isAuthenticated && <Button id='logout' style={{marginBottom:"3px"}} onClick={()=>auth.signoutRedirect()}  startIcon={<LogoutOutlinedIcon style={{color:"white",fontSize:"27px"}} id="userPanelIcon" />}></Button>}
            </div>
    </div>
  )
}

export default Navbar