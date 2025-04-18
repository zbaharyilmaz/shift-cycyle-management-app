import { useShifts } from "../../hooks/useShifts";
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

const ShiftTable = () => {
  const {shifts, isLoading, isError, deleteShiftMutation } = useShifts();
  const handleDelete=(id)=>{
    deleteShiftMutation.mutate(id)
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
              <strong>Vardiya Numarası</strong>
            </TableCell>
            <TableCell>
              <strong>Görev</strong>
            </TableCell>
            <TableCell>
              <strong>Başlangıç Saati</strong>
            </TableCell>
            <TableCell>
              <strong>Bitiş Satti</strong>
            </TableCell>
            <TableCell align="right">
              <strong>İşlem</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shifts?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                Henüz eklenmiş vardiya yok.
              </TableCell>
            </TableRow>
          ) : (
            shifts.map((shift) => (
              <TableRow key={shift.id}>
                <TableCell>{shift.shiftNumber}</TableCell>
                <TableCell>{shift.job}</TableCell>
                <TableCell>{shift.startTime}</TableCell>
                <TableCell>{shift.endTime}</TableCell>
                <TableCell align="right">
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => handleDelete(shift.id)}
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
  )
}

export default ShiftTable;