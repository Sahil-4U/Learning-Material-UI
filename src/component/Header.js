import React from 'react'
import { Badge, Divider, IconButton, Toolbar, Typography, makeStyles } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from "*.modules.css";

const useStyles=makeStyles((theme)=>({
    title:{
        flexGrow:1,
    },
}))


function Header() {

        const classes=useStyles();

  return (
   <>
   <Toolbar>
    <IconButton >
        <MenuIcon/>
    </IconButton >
    <Typography variant='h6' className={classes.title}>Blogging Website</Typography>
    <IconButton color='inherit'>
    <Badge badgeContent={4} color="primary">
 <NotificationsIcon />
</Badge>
    </IconButton>
    <IconButton color='inherit'>
        <AccountCircleIcon/>
    </IconButton>
   </Toolbar>
   <Divider />
   <Toolbar className={classes.tagline}>
    Express your fellings with words
   </Toolbar>
   </>
  )
}

export default Header