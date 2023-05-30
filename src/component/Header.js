import React from 'react'
import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from "@mui/system";

const useStyles=styled((theme)=>({
    title:{
       flexGap:1,
    },
    tagline:{
        fontSize:20,
        justifyContent:'center',
    }
}));
function Header() {
   
   const classes=useStyles();

    return (
        <>
            <Toolbar>
                <IconButton >
                    <MenuIcon />
                </IconButton >
                <Typography variant='h6' className={classes.title}>Blogging Website</Typography>
                <IconButton color='inherit'>
                    <Badge badgeContent={4} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color='inherit'>
                    <AccountCircleIcon />
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