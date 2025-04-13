import React from 'react'
import {banner, logo} from '../exports'
import HomeIcon from '@mui/icons-material/Home';
import './navbar.css';
import { Button, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router';
import { useAuth } from 'react-oidc-context';


function Navbar() {
  const auth = useAuth();
  const matches520px=useMediaQuery('(min-width:520px)');

  return (
    <Grid container >
      <Grid size={12} sx={{backgroundColor:"rgb(113, 6, 106)",padding:"5px"}} justifyItems="right">
      <img src={logo} className={matches520px ? "logo" : "logo520px" }/>
            <div style={{display:"flex",alignItems:"center"}}>
            <Link id='home' style={{marginRight:"10px"}} to="/" ><HomeIcon style={{color:"white",fontSize:"28px"}} id='homeIcon' /></Link>
            <Link id='userPanel' to="/managerPanel" ><AccountCircleIcon style={{color:"white",fontSize:"28px"}} id="userPanelIcon" /></Link>
            {auth.isAuthenticated && <Button id='logout' style={{marginBottom:"3px"}} onClick={()=>auth.signoutRedirect()}  startIcon={<LogoutOutlinedIcon style={{color:"white",fontSize:"27px"}} id="userPanelIcon" />}></Button>}
            </div>
      </Grid>
            <Grid size={12}>
            <img src={banner} className={ matches520px ? "banner" : "banner520px"} />
            </Grid>
    </Grid>
  )
}

export default Navbar
