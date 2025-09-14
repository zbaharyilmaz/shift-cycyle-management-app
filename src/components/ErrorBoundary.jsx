import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            padding: 2,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              maxWidth: 500,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" color="error" gutterBottom>
              ⚠️ Bir Hata Oluştu
            </Typography>
            <Typography variant="body1" paragraph>
              Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenilemeyi
              deneyin.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleRetry}
              sx={{ mt: 2 }}
            >
              Tekrar Dene
            </Button>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
