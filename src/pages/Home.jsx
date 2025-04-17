import { Box, Paper, Typography } from "@mui/material";

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
        <Typography variant="h4" gutterBottom>
          Hoş Geldiniz 💼
        </Typography>
        <Typography variant="body1" gutterBottom>
          Bu uygulama, çalışan vardiya/döngü yönetimi için geliştirilmiştir.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Başlamak için yan menüden bir kategori seçin ve veri eklemeye
          başlayın.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Çalışanlarınızın vardiya döngülerini ve programlarını yönetmek artık
          daha kolay!
        </Typography>
      </Paper>
    </Box>
  );
};
export default Home;
