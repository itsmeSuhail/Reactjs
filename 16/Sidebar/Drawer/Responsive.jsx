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
  CssBaseline,makeStyles, SwipeableDrawer,useMediaQuery,useTheme, Hidden
} from "@material-ui/core"
import {Book, Delete, ListAltOutlined, Mail, Menu, MenuOutlined, Send} from "@material-ui/icons"
const style=makeStyles(theme=>({
  menuButton:{
    marginRight:theme.spacing(2),

  },
  title:{
    marginRight:"auto",

  },
  content:{
    padding:theme.spacing(3),
    marginLeft:"250px",
    [theme.breakpoints.down("xs")]:{
      margin:"0"
    }

  }
}))
const SimpleDrawer = () => {
  const theme=useTheme();
  const media=useMediaQuery(theme.breakpoints.down("xs"));
  const Classes=style();
  const [showDrawer,setShowDrawer]=useState(false);
  const open=()=>setShowDrawer(!showDrawer);
  const Listmainitem=(
    <List style={{width:"250px",marginTop:"34px"}}>
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
  );
  return <>
  <CssBaseline/>
  <AppBar position='sticky' color='primary' style={{zIndex:"1201"}}>
    <Toolbar>
      {/* hamburgur menu */}
     <Hidden  smUp  implementation='css'>
     <IconButton
      onClick={open}
       color='inherit'
       className={Classes.menuButton}
       edge="start"
       >
        <MenuOutlined/>
      </IconButton>
     </Hidden>
      <Typography variant='h6' className={Classes.title}>
        WebDev
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  {/* SideBar */}
  
  {media?
  <Drawer open={showDrawer} onClose={open}>
    {Listmainitem}
  </Drawer>
  :<Drawer variant='permanent'>
    <Toolbar/>
   {Listmainitem}
  </Drawer>}
  <main className={Classes.content}>
    <Typography variant='h3' >New Reactjs Drawer</Typography>
    <Typography>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi dicta porro numquam in ipsum quis! Beatae quae omnis, laborum quaerat ipsum quasi quas illum delectus dolor asperiores aspernatur placeat dolore facilis laboriosam similique earum quo sequi voluptatum inventore cupiditate corrupti eum? Fugiat nemo sequi nesciunt?
    </Typography>
  </main>
  
  </>
}

export default SimpleDrawer