import { z } from "zod";

export const cycleSchema = z.object({
  cycleNumber: z
    .number()
    .min(1, "Döngü numarası 1'den küçük olamaz")
    .max(10, "Döngü numarası 10'dan büyük olamaz")
    .int("Döngü numarası tam sayı olmalıdır"),
  job: z
    .string()
    .nonempty("Görev alanı boş olamaz")
    .refine(
      (val) =>
        ["Üretim Elemanı", "Bakım Elemanı", "Kalite Kontrol Elemanı"].includes(
          val
        ),
      { message: "Geçerli iş unvanı seçin" }
    ),
  startDate: z.date().refine((date) => date >= new Date(), {
    message: "Başlangıç tarihi bugünden önce olamaz",
  }),
  endDate: z.date().refine(
    (date, ctx) => {
      if (date < ctx.parent.startDate) {
        return false;
      }
      return true;
    },
    {
      message: "Bitiş tarihi başlangıç tarihinden önce olamaz",
    }
  ),
});
