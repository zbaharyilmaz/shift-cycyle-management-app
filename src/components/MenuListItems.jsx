import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { btnStyle, selectedStyle } from "../styles/buttonStyles";

const icon = (name) => `/assets/navbar/${name}.svg`;

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
    <Box sx={{ bgcolor: "customColors.color2", height: "100vh" , color:"white"}}>
      <Toolbar />
      <List >
        {links.map((item, index) => (
          <ListItem key={item.title} >
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

