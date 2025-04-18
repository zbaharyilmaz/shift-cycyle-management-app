import { cycleSchema } from "../../schemas/cycleShema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Box, Button, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useCycles } from "../../hooks/useCycles";
import { cleanFieldResponse } from "@mui/x-date-pickers/internals";

const jobOptions = [
  "Üretim Elemanı",
  "Bakım Elemanı",
  "Kalite Kontrol Elemanı",
];

const CycleForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(cycleSchema),
    defaultValues: {
      cycleNumber: "",
      job: "",
      startDate: null,
      endDate: null,
    },
  });
  const { addCycleMutation } = useCycles();
  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      cycleNumber: parseInt(data.cycleNumber, 10),
      startDate: data.startDate?.toISOString(),
      endDate: data.endDate?.toISOString(),
    };
    addCycleMutation.mutate(formattedData, {
      onSuccess: () => 
        reset({
          cycleNumber: "",
          job: "",
          startDate: null,
          endDate: null,
        }),
    });
    console.log(formattedData);
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
      }}
    >
      <TextField
        label="Döngü Numarası"
        variant="outlined"
        {...register("cycleNumber")}
        error={!!errors.cycleNumber}
        helperText={errors.cycleNumber?.message}
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
        name="startDate"
        render={({ field }) => (
          <DatePicker
            {...field}
            disablePast
            label="Başlangıç Tarihi"
            value={field.value || null}
            onChange={(date) => field.onChange(date)}
            slotProps={{
              textField: {
                error: !!errors.startDate,
                helperText: errors.startDate?.message,
                fullWidth: true,
              },
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="endDate"
        render={({ field }) => (
          <DatePicker
            {...field}
            label="Bitiş Tarihi"
            value={field.value || null}
            onChange={(date) => field.onChange(date)}
            slotProps={{
              textField: {
                error: !!errors.endDate,
                helperText: errors.endDate?.message,
                fullWidth: true,
              },
            }}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={addCycleMutation.isLoading}
      >
        {addCycleMutation.isLoading ? "Kaydediliyor..." : "Kaydet"}
      </Button>
    </Box>
  );
};

export default CycleForm;
