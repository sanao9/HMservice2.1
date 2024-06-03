import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BuildIcon from "@mui/icons-material/Build";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

const CustomerSideBar = () => {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Button to open the sidebar */}
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        sx={{ width: "250px" }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
          sx={{ backgroundColor: "#121212", color: "white", height: "100%" }} // Apply background color and text color
        >
          <List>
            {[
              {
                text: "Add Vehicle",
                icon: <DirectionsCarIcon sx={{ color: "white" }} />,
                link: "./AddVehicleForm",
              },
              {
                text: "Add Appointment",
                icon: <BuildIcon sx={{ color: "white" }} />,
                link: "./AddAppointmentForm",
              },
              {
                text: "Service History",
                icon: <HistoryIcon sx={{ color: "white" }} />,
                link: "./ServiceHistory",
              },
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ "&:hover": { background: "red" } }}
              >
                <ListItemButton
                  component={Link}
                  to={item.link}
                  sx={{ color: "white" }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List sx={{ marginTop: "auto" }}>
            <ListItem disablePadding sx={{ "&:hover": { background: "red" } }}>
              <ListItemButton sx={{ color: "white" }}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default CustomerSideBar;
