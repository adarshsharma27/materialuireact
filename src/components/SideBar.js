import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from "@material-ui/icons/Person";
import MyLocationIcon from '@material-ui/icons/MyLocation';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DraftsIcon from '@material-ui/icons/Drafts';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    
});

const SideBar = ({ children }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </NavLink>
                <Divider className={classes.dividerclr}/>
                <NavLink to="/aboutus" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText>About US</ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/contactus" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/blogs" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText>Blogs</ListItemText>
                    </ListItem>
                </NavLink>

                <Divider />
                <NavLink to="/map" style={{ color: "#fff", textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MyLocationIcon />
                        </ListItemIcon>
                        <ListItemText>Maps</ListItemText>
                    </ListItem>
                </NavLink>

                <Divider />

            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)} color="inherit">
                    {children}
                </Button>
                <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)} color="primary">
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default SideBar;
