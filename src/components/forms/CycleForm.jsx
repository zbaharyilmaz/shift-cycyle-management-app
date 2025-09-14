import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers";
import { useCycles } from "../../hooks/useCycles";
import { SchemaCycles } from "../../schemas/SchemaCycles";

const jobs = [
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

const CycleForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(SchemaCycles),
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
        {jobs.map((job) => (
          <MenuItem key={job} value={job}>
            {job}
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
        {addCycleMutation.isLoading ? "Kaydediliyor..." : "Kaydet"}
      </Button>
    </Box>
  );
};

export default CycleForm;
