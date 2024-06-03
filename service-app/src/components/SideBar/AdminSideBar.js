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
import InventoryIcon from "@mui/icons-material/Inventory";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminSideBar = () => {
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
                text: "Vehicles",
                icon: <InventoryIcon sx={{ color: "white" }} />,
                link: "./VehicleTable",
              },
              {
                text: "Package Manager",
                icon: <ManageAccountsIcon sx={{ color: "white" }} />,
                link: "./AdminPackageManager",
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

export default AdminSideBar;
