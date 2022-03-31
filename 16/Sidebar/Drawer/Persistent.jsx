import React, { useState } from 'react'
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,makeStyles, SwipeableDrawer
} from "@material-ui/core"
import {Book, Delete, ListAltOutlined, Mail, Menu, MenuOutlined, Send} from "@material-ui/icons"
import classNames from 'classnames'
const style=makeStyles(theme=>({
  menuButton:{
    marginRight:theme.spacing(2),

  },
  title:{
    marginRight:"auto",

  },
  content:{
    padding:theme.spacing(3),

  },
  shift:{
    width:`calc(100% - 250px)`,
    marginLeft:"250px",
    transition:theme.transitions.create(["margin","width"],{
      easing:theme.transitions.easing.easeInOut,
      duration:theme.transitions.duration.shorter
    })
  }
}))
const Persistent = () => {
  const Classes=style();
  const [showDrawer,setShowDrawer]=useState(false);
  const open=()=>setShowDrawer(!showDrawer);
  return <>
  <CssBaseline/>
  <AppBar position='sticky' color='primary' className={classNames({[Classes.shift]:showDrawer})}>
    <Toolbar>
      {/* hamburgur menu */}
      <IconButton
      onClick={open}
       color='inherit'
       className={Classes.menuButton}
       edge="start"
       >
        <MenuOutlined/>
      </IconButton>
      <Typography variant='h6' className={Classes.title}>
        WebDev
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  {/* SideBar */}
  
  <Drawer open={showDrawer}  onClose={open} variant={"persistent"}>
    <List style={{width:"250px"}}>
      <ListItem button>
        <Delete className={Classes.menuButton}/>
        <ListItemText primary="first item" />
      </ListItem>
      <ListItem button>
        <Mail className={Classes.menuButton}/>
        <ListItemText primary="two item" />
      </ListItem>
      <ListItem button>
        <Book className={Classes.menuButton}/>
        <ListItemText primary="thrid item" />
      </ListItem>
      <ListItem button>
        <ListAltOutlined className={Classes.menuButton}/>
        <ListItemText primary="four item" />
      </ListItem>
      <ListItem button>
        <Send className={Classes.menuButton}/>
        <ListItemText primary="five item" />
      </ListItem>
    </List>
  </Drawer>
  <main className={Classes.content} style={{marginLeft:showDrawer?"250px":0}}>
    <Typography variant='h3' >New Reactjs Drawer</Typography>
    <Typography>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi dicta porro numquam in ipsum quis! Beatae quae omnis, laborum quaerat ipsum quasi quas illum delectus dolor asperiores aspernatur placeat dolore facilis laboriosam similique earum quo sequi voluptatum inventore cupiditate corrupti eum? Fugiat nemo sequi nesciunt?
    </Typography>
  </main>
  
  </>
}

export default Persistent