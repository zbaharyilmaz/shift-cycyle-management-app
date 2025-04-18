import { zodResolver } from "@hookform/resolvers/zod";
import { shiftSchema } from "../../schemas/shiftSchema";
import { useShifts } from "../../hooks/useShifts";
import { Controller, useForm } from "react-hook-form";
import { TextField, Box, Button, MenuItem } from "@mui/material";

const jobOptions = [
  "İşçi",
  "Mühendis",
  "Tekniker",
  "Yönetici",
  "Asistan",
  "Analist",
  "Danışman",
  "Uzman",
  "Araştırmacı",
  "Geliştirici",
];
const ShiftForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(shiftSchema),
    defaultValues: {
      shiftNumber: "",
      job: "",
      startTime: "",
      endTime: "",
    },
  });
  const { addShiftMutation } = useShifts();
  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      shiftNumber: parseInt(data.shiftNumber, 10),
      startTime: data.startTime,
      endTime: data.endTime,
    };
    addShiftMutation.mutate(formattedData, {
      onSuccess: () =>
        reset({
          shiftNumber: "",
          job: "",
          startTime: "",
          endTime: "",
        }),
    });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <TextField
        label="Vardiya Numarası"
        variant="outlined"
        {...register("shiftNumber")}
        error={!!errors.shiftNumber}
        helperText={errors.shiftNumber?.message}
        type="number"
        inputProps={{ min: 1, max: 10 }}
        fullWidth
      />
      <TextField
        select
        label="Görev Seçimi"
        {...register("job")}
        error={!!errors.job}
        helperText={errors.job?.message}
        fullWidth
      >
        <MenuItem value="">Seçiniz</MenuItem>
        {jobOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <Controller
        control={control}
        name="startTime"
        render={({ field }) => (
          <TextField
            {...field}
            label="Başlangıç Saati"
            type="time"
            error={!!errors.startTime}
            helperText={errors.startTime?.message}
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="endTime"
        render={({ field }) => (
          <TextField
            {...field}
            label="Bitiş Saati"
            type="time"
            error={!!errors.endTime}
            helperText={errors.endTime?.message}
            fullWidth
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={addShiftMutation.isLoading}
        sx={{
          backgroundColor: "primary.main",
          width: "20%",
          margin: "0 auto",
          color: "white",
          "&:hover": {
            backgroundColor: "secondary.main",
            color: "primary.main",
          },
        }}
      >
        {addShiftMutation.isLoading ? "Kaydediliyor..." : "Kaydet"}
      </Button>
    </Box>
  );
};

export default ShiftForm;
