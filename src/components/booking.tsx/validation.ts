import * as z from "zod";

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export const bookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  date: z.string().min(1, {
    message: "Please select a date.",
  }),
  time: z.string().min(1, {
    message: "Please select a time.",
  }),
  movieTheme: z.string().optional(),
  numberOfGuests: z.string().min(1, {
    message: "Please specify the number of guests.",
  }),
});

export const guestNumber = [
  { label: "1-5 guests", value: "1-5" },
  { label: "6-10 guests", value: "6-10" },
  { label: "11-15 guests", value: "11-15" },
  { label: "16-20 guests", value: "16-20" },
  { label: "21+ guests", value: "21+" },
];
