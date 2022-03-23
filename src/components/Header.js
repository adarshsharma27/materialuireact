import { Typography, AppBar, Toolbar, IconButton, Hidden} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from "./SideBar";
import MenuBar from "./MenuBar";
import {useState } from "react";
const Header = () => {
    const[color,setColor]=useState("#3f51b5")
    return (
        <>
            <AppBar position="static" style={{backgroundColor:"transparent"}}>
                <Toolbar>
                <Hidden smUp>
                 <SideBar>
                  <IconButton edge="start" aria-label="menu" color="inherit"><MenuIcon />
                  </IconButton>
                  </SideBar>
                  </Hidden>
                    <Typography  style={{flexGrow:'1'}}variant="h6">Dashboard..</Typography>   
              
                    <MenuBar color={color} setColor={setColor}/>          
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
