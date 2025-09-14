import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { btnStyle, selectedStyle } from "../styles/buttonStyles";

const links = [
  {
    title: "ANASAYFA",
    url: "/",
  },
  {
    title: "VARDİYALAR",
    url: "/shifts",
  },
  {
    title: "DÖNGÜLER",
    url: "/cycles",
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ bgcolor: "primary.main", height: "100vh" }}>
      <Toolbar />
      <List>
        {links.map((item) => (
          <ListItem key={item.title}>
            <ListItemButton
              onClick={() => navigate(item.url)}
              sx={item.url === location.pathname ? selectedStyle : btnStyle}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuListItems;
