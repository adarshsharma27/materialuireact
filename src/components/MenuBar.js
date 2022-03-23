import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar, Badge, Hidden} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
const useStyles = makeStyles({
  menu:{
        display: 'flex',
    justifyContent: 'space-evenly',
    width: '200px',
    alignItems: 'center'
  },
});
const MenuBar = ()=> {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
    <Hidden smDown>
    <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={2} color="secondary">
        <NotificationsActiveIcon />
      </Badge>
    </Hidden>
                          
           
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Avatar alt="Remy Sharp" src="https://assets.website-files.com/5f68b76104965043f88e2647/5f68f3fea3e7a8849cbf16c2_image-testimonial-02-designer-template.jpg" />
            
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} style={{color:'#fff'}}>Profile</MenuItem>
        <MenuItem onClick={handleClose} style={{color:'#fff'}}>My account</MenuItem>
        <MenuItem onClick={handleClose} style={{color:'#fff'}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}


export default MenuBar