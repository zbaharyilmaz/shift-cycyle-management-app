import { z } from "zod";
import dayjs from "dayjs";

export const SchemaCycles = z
  .object({
    cycleNumber: z
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
            "Üretim Elemanı",
            "Bakım Elemanı",
            "Kalite Kontrol Elemanı",
          ].includes(val),
        { message: "Geçerli iş unvanı seçin" }
      ),
    startDate: z.custom((val) => dayjs.isDayjs(val) && val.isValid(), {
      message: "Geçerli bir tarih giriniz",
    }),
    endDate: z.custom((val) => dayjs.isDayjs(val) && val.isValid(), {
      message: "Geçerli bir bitiş tarihi giriniz",
    }),
  })
  .superRefine((data, ctx) => {
    if (
      dayjs.isDayjs(data.startDate) &&
      dayjs.isDayjs(data.endDate) &&
      data.endDate.isBefore(data.startDate)
    ) {
      ctx.addIssue({
        path: ["endDate"],
        code: z.ZodIssueCode.custom,
        message: "Bitiş tarihi başlangıç tarihinden önce olamaz",
      });
    }
  });
