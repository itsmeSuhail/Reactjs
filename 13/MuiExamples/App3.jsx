import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar,
    Card, CardActions, CardContent, CardHeader, Grid, Hidden, IconButton, Menu, Paper, Toolbar, Typography } from '@material-ui/core'
import { ExpandMore, Mail, MenuOutlined } from '@material-ui/icons'
import React from 'react'
import { Button } from 'react-bootstrap'

const App = () => {
    const border={
        border:"2px solid orange",
    }
  return <>
  
  <Grid container spacing={-65} style={border} justifyContent="center">
      <Grid xs={12}style={border} md={4} lg={3} sm={6}>hello</Grid>
            <Grid xs={12}style={border} md={4} lg={3} sm={6}>hello</Grid>
                  <Grid xs={12}style={border} md={4} lg={3} sm={6}>hello</Grid>
      <Grid xs={12}style={border} md={4} lg={3} sm={6}>hello</Grid>
            <Grid xs={12}style={border} md={4} lg={3} sm={6}>hello</Grid>
<Hidden xsDown>
<Grid xs={12}style={border} md={4} lg={3} sm={6}>hello90909</Grid>

</Hidden>
  </Grid>
  <h1>paper</h1>
  <Paper elevation={1} variant="contained">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quis.
  </Paper>
  <h1>Card</h1>
  <Grid container>
      <Grid item={true} xs={12} justifyContent="center" alignItems='center'>
         <Grid container justifyContent='center' alignItems='center'>
         <Card style={{width:"23%",margin:"6px"}}>
              <CardHeader title={"card hai ye"} subheader="pro player"/>
              <CardContent>
                  <Typography color='textSecondary'>
                      Material UI
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant='outlined'>Learn</Button>
              </CardActions>
          </Card>
          <Card style={{width:"23%",margin:"6px"}}>
              <CardHeader title={"card hai ye"} subheader="pro player"/>
              <CardContent>
                  <Typography color='textSecondary'>
                      Material UI
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant='outlined'>Learn</Button>
              </CardActions>
          </Card>
          <Card style={{width:"23%",margin:"6px"}}>
              <CardHeader title={"card hai ye"} subheader="pro player"/>
              <CardContent>
                  <Typography color='textSecondary'>
                      Material UI
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant='outlined'>Learn</Button>
              </CardActions>
          </Card>
          <Card style={{width:"23%",margin:"6px"}}>
              <CardHeader title={"card hai ye"} subheader="pro player"/>
              <CardContent>
                  <Typography color='textSecondary'>
                      Material UI
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant='outlined'>Learn</Button>
              </CardActions>
          </Card>
         </Grid>
          
      </Grid>
  </Grid>
  <h1>Accordion</h1>
  <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMore/>}
      aria-controls="panella-content"
      id="jaadu"
      >
          <Mail/>
          <Typography>Pro aryan</Typography>
      </AccordionSummary>
      <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim?
      </AccordionDetails>
  </Accordion>
  <h1>App Bar</h1>
  <AppBar position='static'>
      <Toolbar>
          <IconButton edge="start" color="inherit"
          aria-label='menu'>
              <MenuOutlined/>
          </IconButton>
          <Typography>Helllo ji</Typography>
          <Button color="primary.main">Logina</Button>
      </Toolbar>
  </AppBar>
  </>
}

export default App