import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#593954"
      },
      secondary: {
        main: "#EBC857",
        second: "#f4f0da",
      },
      customColors: {
        color1: "#dd1705",
        color2: "#FFD700",  
        color3: "#8B4513",  
      },
    },
    typography: {
      fontFamily: '"Neucha", serif',
    },
  });