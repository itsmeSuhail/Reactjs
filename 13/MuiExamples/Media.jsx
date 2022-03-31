import React from 'react'
import { Grid, TextField, Button ,makeStyles,useMediaQuery,useTheme} from "@material-ui/core"
const style=makeStyles(theme=>({
    TextFiled:{
        width:400
    },
    one:{
        // up 
        [theme.breakpoints.up("xs")]:{
            border:"2px solid green",
            width:"170px"
        },
        // 600

        [theme.breakpoints.up("sm")]:{
            border:"2px solid blue",
            width:"430px"
        },
        //900
        [theme.breakpoints.up("md")]:{
            border:"2px solid red",
            width:"700px"
        },
        // 1200
        [theme.breakpoints.up("lg")]:{
            border:"2px solid pink",
            width:"800px"
        },

    },
    two:{}
}))
const App = () => {
const theme=useTheme()
    const tag=useMediaQuery(theme.breakpoints.up("sm"));

    console.log(tag , "pro")
    const classes=style();
    return <Grid container justifyContent='center' mt={10}>
        <Grid item style={{border:"2px solid orange"}} lg={9}>
            <TextField
            className={classes.one}
                label="Search for tutor"
                variant="outlined"
                fullWidth
                
            />
        </Grid>
        <Grid item style={{border:"2px solid orange"}}lg={3}>
            <Button variant="contained" color="primary">Small</Button>
        </Grid>

    </Grid>
}

export default App