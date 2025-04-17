// src/components/Sidebar.jsx

import React from "react";
import { Drawer, Box } from "@mui/material";
import MenuListItems from "./MenuListItems"; // Menü bileşenin varsa

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar"
    >
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
        <MenuListItems />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
