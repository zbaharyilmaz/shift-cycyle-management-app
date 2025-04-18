export const btnStyle = {
    color: "secondary.second",
    borderRadius: "1rem",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "secondary.second",
      color: "primary.main",
      "& .MuiBox-root": {
        bgcolor: "secondary.main",
      },
    },
  }

  export const selectedStyle = {
    backgroundColor: "secondary.main",
    color: "primary.main",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "customColors.color",
      color: "white",
    },
  }
  
