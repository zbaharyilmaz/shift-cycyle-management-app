import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MenuListItems from "./MenuListItems";

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
