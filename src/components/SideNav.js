import { Box } from "@material-ui/core";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MyLocationIcon from '@material-ui/icons/MyLocation';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DraftsIcon from '@material-ui/icons/Drafts';
import { NavLink } from "react-router-dom";

const SideNav = () => {
    return (
        <Box boxShadow={3} style={{ height: "100vmax" }}>
            <List>
                <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon style={{ color: "#fff"}}/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/aboutus" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MenuBookIcon style={{ color: "#fff"}} />
                        </ListItemIcon>
                        <ListItemText>About US</ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/contactus" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon  style={{ color: "#fff"}}/>
                        </ListItemIcon>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/blogs" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon style={{ color: "#fff"}}/>
                        </ListItemIcon>
                        <ListItemText>Blogs</ListItemText>
                    </ListItem>
                </NavLink>

                <Divider />
                <NavLink to="/map" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MyLocationIcon style={{ color: "#fff"}}/>
                        </ListItemIcon>
                        <ListItemText>Maps</ListItemText>
                    </ListItem>
                </NavLink>

                <Divider />
                
            </List>
        </Box>
    );
};

export default SideNav;
