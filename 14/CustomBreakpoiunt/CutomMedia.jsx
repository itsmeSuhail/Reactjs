import { withStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
const style=makeStyles(theme=>({
    Root:{
 
        // 1280 above
        [theme.breakpoints.up("xl")]:{
            border:"2px solid orange",
            padding:"5px",
            fontSize:"10px"
        },
        // 1280 down
        [theme.breakpoints.down("xl")]:{
            border:"2px solid red",
            padding:"5px",
        },
        // 996 down
        [theme.breakpoints.down("lg")]:{
            border:"4px solid yellow"
        },
        // 778 down
        [theme.breakpoints.down("md")]:{
            border:"4px solid pink"

        },
        // 556
        [theme.breakpoints.down("sm")]:{
            border:"4px solid orange"

        },
        // 420 down
        [theme.breakpoints.down("xs")]:{
            border:"2px solid green",
            fontSize:"25px"
        },

    }
}))
const CutomMedia = () => {
    const classes=style();
  return <>
  <div className={classes.Root} >
      <h1  style={{textAlign:"center"}}>Goku verma</h1>
  </div>
  </>
}

export default withStyles(style)(CutomMedia)