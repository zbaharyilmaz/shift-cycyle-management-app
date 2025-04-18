import { z } from "zod";
export const SchemaShifts = z.object({
  shiftNumber: z
    .string()
    .regex(/^[1-9]$|^10$/, "Döngü numarası 1 ile 10 arasında olmalıdır")
    .transform((val) => parseInt(val, 10))
    .refine((val) => val >= 1 && val <= 10, {
      message: "Döngü numarası 1 ile 10 arasında olmalıdır",
    }),
  job: z
    .string()
    .nonempty("Görev alanı boş olamaz")
    .refine(
      (val) =>
        [
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
        ].includes(val),
      { message: "Geçerli iş unvanı seçin" }
    ),
  startTime: z
    .string()
    .min(1, { message: "Başlangıç saati zorunlu." })
    .regex(/^([0-9]{2}):([0-9]{2})$/, {
      message: "Başlangıç saati geçerli olmalıdır.",
    }),
  endTime: z
    .string()
    .min(1, { message: "Bitiş saati zorunlu." })
    .regex(/^([0-9]{2}):([0-9]{2})$/, {
      message: "Bitiş saati geçerli olmalıdır.",
    }),
});
