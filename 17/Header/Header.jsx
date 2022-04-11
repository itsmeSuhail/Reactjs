import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { VerifiedUser } from '@material-ui/icons'
import React, { useState } from 'react'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return <>
  <AppBar elevation={0} sx={{backgroundColor:"white"}}>
<Toolbar>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}} component="div">
        <Typography>Menumania</Typography>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography style={{marginRight:"20px",cursor:"pointer"}}>
                Live Classes
            </Typography>
            <Typography
           id="demo-positioned-button"
           aria-controls={open ? 'demo-positioned-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           color="inherit"
           onClick={handleClick}
            style={{marginRight:"20px",cursor:"pointer"}}>
                
                Home tuition
            </Typography>
            {/* drop down menu */}
            <Menu
           id="demo-positioned-menu"
           aria-labelledby="demo-positioned-button"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
           anchorOrigin={{
             vertical: 'top',
             horizontal: 'left',
           }}
           transformOrigin={{
             vertical: 'top',
             horizontal: 'left',
           }}
            >
                <MenuItem>My Requirement</MenuItem>
                <MenuItem>Search Tutor</MenuItem>
                <MenuItem>Matching Tutor</MenuItem>
                <MenuItem>Responded Tutor</MenuItem>


            </Menu>
            <Typography style={{marginRight:"20px",cursor:"pointer"}}>
                Profile
            </Typography>
            <Typography style={{marginRight:"20px",cursor:"pointer"}}>
                Setting
            </Typography>
            <Typography style={{marginRight:"20px",cursor:"pointer"}}>
                Logout
            </Typography>
        </Box>
        <Box>
            <VerifiedUser/>
        </Box>

    </Box>
</Toolbar>
  </AppBar>
  </>
}

export default Header