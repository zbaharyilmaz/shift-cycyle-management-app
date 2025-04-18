import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { useCycles } from "../../hooks/useCycles";

const CycleTable = () => {
  const { cycles, isLoading, isError, deleteCycleMutation } = useCycles();
  const handleDelete = (id) => {
    deleteCycleMutation.mutate(id);
  };

  if (isLoading) return <p>Yükleniyor...</p>;
  if (isError) return <p>Hata oluştu, veriler getirilemedi.</p>;

  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 4, overflowX: "auto", maxWidth: "100%" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Döngü Numarası</strong>
            </TableCell>
            <TableCell>
              <strong>Görev</strong>
            </TableCell>
            <TableCell>
              <strong>Başlangıç Tarihi</strong>
            </TableCell>
            <TableCell>
              <strong>Bitiş Tarihi</strong>
            </TableCell>
            <TableCell align="right">
              <strong>İşlem</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cycles?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                Henüz eklenmiş döngü yok.
              </TableCell>
            </TableRow>
          ) : (
            cycles.map((cycle) => (
              <TableRow key={cycle.id}>
                <TableCell>{cycle.cycleNumber}</TableCell>
                <TableCell>{cycle.job}</TableCell>
                <TableCell>
                  {new Date(cycle.startDate).toLocaleDateString("tr-TR")}
                </TableCell>
                <TableCell>
                  {new Date(cycle.endDate).toLocaleDateString("tr-TR")}
                </TableCell>
                <TableCell align="right">
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => handleDelete(cycle.id)}
                  >
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CycleTable;
