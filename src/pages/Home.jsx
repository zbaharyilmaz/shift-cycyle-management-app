import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginLeft: { sm: "240px", xs: 0 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 600,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Hoş Geldiniz 💼
        </Typography>
        <Typography variant="body1" gutterBottom>
          Bu uygulama, çalışan vardiya/döngü yönetimi için geliştirilmiştir.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Link to="/shifts"
           style={{
            textDecoration: "none",
            color: "purple",
            fontWeight: "bold",
            marginRight: 4,
          }}
          >Vardiyalar</Link> 

          ve
          {" "}
          <Link
            to="/cycles"
            style={{
              textDecoration: "none",
              color: "purple",
              fontWeight: "bold",
              marginRight: 4,
            }}
          >
            Döngüler
          </Link>
          bölümlerinden çalışanlarınızın
          vardiya döngülerini ve programlarını kolayca yönetebilirsiniz.
        </Typography>
      </Paper>
    </Box>
  );
};
export default Home;
