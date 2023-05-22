import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      {/* <Divider /> */}

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Platform"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-button">
              <p>UseCase</p>
              <ArrowDropDownIcon />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Markets</p>
                <p>Use Case Builder</p>
              </div>
            )}
          </div>
        </ListItem>
        <ListItem disablePadding>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-button">
              <p>About Us</p>
              <ArrowDropDownIcon />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Our History</p>
                <p>Our Team</p>
                <p>Our Marketplace</p>
                <p>Our Vision</p>
              </div>
            )}
          </div>
        </ListItem>
        <ListItem disablePadding>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-button">
              <p>Resources</p>
              <ArrowDropDownIcon />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Case Study</p>
                <p>Article</p>
                <p>Events</p>
                <p>Academy</p>
              </div>
            )}
          </div>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Contact US"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Demo"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Login"} />
          </ListItemButton>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} style={{ bgcolor: "white" }}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        style={{
          backgroundColor: "trans",
          boxShadow: "0px 0px 0px 0px",
          color: "black",
        }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        // }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="logo-container">
            <a href="https://sriya.ai/">
              <img
                height="60"
                width="130"
                src="https://ml1ygrea7hcj.i.optimole.com/w:300/h:116/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/04/cropped-Color-logo-no-background-1.png"
                alt="ariya.ai"
              />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
